import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Department of Data Science</div>
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