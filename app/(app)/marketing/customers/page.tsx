import Link from "next/link";

export default function Customers(){
    return (<div>
        Customers
        <Link className='cursor-pointer underline text-blue-500' href='/'>Home</Link>
    </div>)
}