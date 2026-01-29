import Link from "next/link"; // enable client side navigation

export default function Navbar(){
    return(
        <nav className="bg-[#9f70ce] text-white p-4 flex gap-6">
            <Link href= "/departments">Departments</Link>
            <Link href= "/employees">Employees</Link>
        </nav>
    );
}