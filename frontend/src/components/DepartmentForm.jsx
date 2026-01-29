"use client";
import { useEffect,useState } from "react";
import {addDepartment,updateDepartment}from "../app/services/departmentService";

export default function DepartmentForm({department,onSaved}){
    const [name,setName] = useState("");  //store input values

    useEffect(() => {     //when department changes it will handle
        if(department){
            setName(department.name);
        }else{
            setName("");
        }
    },[department]);

    async function handleSubmit(e) {
        e.preventDefault();   //prevents page reloading
        const payload = {name}; //data sent to backend
        if(department){ // same form is used for add and update
            await updateDepartment(department.id,payload);
        }else{
            await addDepartment(payload);
        }
        onSaved(); // reload after change
    }
    return (
        <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow mb-6'>
            <h2 className='font-bold mb-3'>{department ? "Edit" : "Add"}</h2>
            <div className='mb-3'><label htmlFor="block mb-1">Name</label><input className='border p-2 w-full' value={name} onChange={(e) => setName(e.target.value)} required /></div>
            <button className='bg-blue-600 text-white px-4 py-2 rounded'> {department ? "update" : "Add"}</button>
        </form>
    );
}