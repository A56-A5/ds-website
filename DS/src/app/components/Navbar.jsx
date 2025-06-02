import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-purple-900 text-white px-6 py-4 flex justify-between items-center transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
      <div className="flex items-center space-x-4">
        <Image
          src="/ds_logo.png"
          alt="Department of Data Science Logo"
          width={50}
          height={50}
          className="rounded-full bg-white"
        />
        <div className="text-2xl font-bold">Department of Data Science</div>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/events" className="hover:underline">Events</Link>
        <Link href="/achievements" className="hover:underline">Achievements</Link>
        <Link href="/timeline" className="hover:underline">Timeline</Link>
      </div>
    </nav>
  );
} 