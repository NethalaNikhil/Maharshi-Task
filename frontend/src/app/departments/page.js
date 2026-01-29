"use client";
import { useEffect,useState } from "react";
import DepartmentForm from "@/components/DepartmentForm";
import { getDepartments,deleteDepartment } from "../services/departmentService";
export default function DepartmentPage() {
    const [departments, setDepartments] = useState([]);
    const [editingDept,setEditingDept] = useState(null);

    useEffect(() => {
        loadDepartments();
    },[]);

    async function loadDepartments(){
        const data = await getDepartments();
        setDepartments(data);
    }

    function handleEdit(dept) {
        setEditingDept(dept);
    }

    async function handleDelete(id) {
        await deleteDepartment(id);
        loadDepartments();
    }

    function handleSaved()
    {
        setEditingDept(null);
        loadDepartments();
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Departments</h1>
            <DepartmentForm department={editingDept} onSaved={handleSaved} />
            <table className="w-full mt-6 border">
                <thead className="bg-grey-200">
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept) => (
                        <tr key={dept.id}>
                            <td className="border p-2">{dept.id}</td>
                            <td className="border p-2">{dept.name}</td>
                            <td className="border p-2 space-x-2"><button onClick={() => handleEdit(dept)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button><button onClick = {() => handleDelete(dept.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}