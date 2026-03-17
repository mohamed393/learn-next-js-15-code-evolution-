// app/(app)/layout.tsx
'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";
const navLinks =[
    {name:'Customer',href:'/marketing/customers'},
    {name:'Revenue',href:'/marketing/revenue'},
]
export default function AppLayout({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    const pathName=usePathname();
    return (
        <div className="min-h-screen">
            <aside>Sidebar</aside>
            {navLinks.map(link=>(
                <Link className={`flex cursor-pointer flex-col ${pathName===link.href?'text-blue-500':'text-gray-500'}`} key={link.href} href={link.href}>{link.name}</Link>
            ))}
            {/*<Link  className='cursor-pointer underline text-blue-500' href='/marketing/customers'>Customers</Link>*/}
            {/*<Link className='cursor-pointer underline text-blue-500' href='/marketing/revenue'>Revenue</Link>*/}
            <main>{children}</main>
        </div>
    )
}