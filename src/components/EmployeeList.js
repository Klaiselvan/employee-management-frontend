import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees/list")
      .then((response) => setEmployees(response.data))
      .catch((err) => {
        setError("Failed to load employees");
        console.error(err);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">Employee List</h2>
      {error && <div className="text-red-500">{error}</div>}
      <ul>
        {employees.map((emp) => (
          <li key={emp.employee_id}>
            {emp.firstname} {emp.lastname} ({emp.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
