import React, { useState } from "react";
import axios from "axios";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    department: "HR",
    date_of_joining: "",
    role: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors
    try {
      const response = await axios.post(
        "https://employee-backend-2od9.onrender.com/api/employees/add",
        formData
      );
      alert(response.data.message); // Display success message
      setFormData({
        employee_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        department: "HR",
        date_of_joining: "",
        role: "",
      }); // Reset form
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || "An error occurred.");
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 flex items-center justify-center">
      <div className="bg-blue-300 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Add New Employee
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
          {[
            { id: "employee_id", label: "Employee ID", type: "text" },
            { id: "first_name", label: "First Name", type: "text" },
            { id: "last_name", label: "Last Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone_number", label: "Phone Number", type: "tel" },
            { id: "role", label: "Role", type: "text" },
            { id: "date_of_joining", label: "Date of Joining", type: "date" },
          ].map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-600"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={`Enter ${field.label}`}
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={formData[field.id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {/* Department Dropdown */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-600"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
