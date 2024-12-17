import React from "react";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      {/* Header */}
      <header className="text-3xl font-bold text-gray-800 mb-6">
        Employee Management System
      </header>

      {/* Add Employee Form */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Employee</h2> */}
        <AddEmployeeForm />
      </div>
    </div>
  );
}

export default App;
