"use client";
import { useEffect, useState } from "react";
import { addEmployeer, updateEmployee } from "@/app/services/employeeService";

export default function EmployeeForm({ employee, onSaved }) {
  const [name, setName] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name ?? "");
      setDepartmentId(employee.department?.id ?? "");
    } else {
      setName("");
      setDepartmentId("");
    }
  }, [employee]);

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name,
      department: departmentId ? { id: Number(departmentId) } : null,
    };

    if (employee) {
      await updateEmployee(employee.id, payload);
    } else {
      await addEmployeer(payload);
    }
    onSaved();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="font-bold mb-3">{employee ? "Edit" : "Add"}</h2>

      <div className="mb-3">
        <label className="block mb-1">Name</label>
        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Department ID</label>
        <input
          className="border p-2 w-full"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          placeholder="Example: 1"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {employee ? "Update" : "Add"}
      </button>
    </form>
  );
}
