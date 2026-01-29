"use client"; // to use react hooks and handle events
import { useEffect,useState } from "react"; //store ui , runs code when component loads
import EmployeeForm from "@/components/EmployeeForm";
import {getEmployees,deleteEmployee,} from "../services/employeeService";

export default function EmployeePage() {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee,setEditingEmployee] = useState(null);

    useEffect(() => {
        loadEmployees();
    },[]);

    async function loadEmployees(){
        const data = await getEmployees();
        setEmployees(data);
    }

    function handleEdit(emp) {
        setEditingEmployee(emp);
    }

    async function handleDelete(id) {
        await deleteEmployee(id);
        loadEmployees();
    }

    function handleSaved()
    {
        setEditingEmployee(null);
        loadEmployees();
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Employees</h1>
            <EmployeeForm employee={editingEmployee} onSaved={handleSaved} />
            <table className="w-full mt-6 border">
                <thead className="bg-grey-200">
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Department</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td className="border p-2">{emp.id}</td>
                            <td className="border p-2">{emp.name}</td>
                            <td className="border p-2">{emp.department?.name ?? "—"}</td>
                            <td className="border p-2 space-x-2"><button onClick={() => handleEdit(emp)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button><button onClick = {() => handleDelete(emp.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}