import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     welcome page
      <Link  className='cursor-pointer underline text-blue-500' href='/marketing/customers'>Customers</Link>
    </div>
  );
}
