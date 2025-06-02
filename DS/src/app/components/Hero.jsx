import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-white text-center py-20 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out opacity-0 translate-y-4 animate-fadeInUp">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.2)_0%,transparent_70%)]"></div>
      <Image
        src="/ds_logo.png"
        alt="Data Science Logo"
        width={160}
        height={160}
        className="mx-auto mb-8 rounded-full shadow-2xl border-4 border-purple-300 bg-white"
        priority
      />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-purple-900 drop-shadow-lg">Welcome to the Department of Data Science</h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">Explore our cutting-edge research, outstanding achievements, and vibrant community events. Join us in shaping the future of data-driven innovation!</p>
      <a href="/about" className="inline-block mt-4 px-8 py-3 bg-purple-700 text-white rounded-full text-lg font-semibold shadow-md hover:bg-purple-800 transition">Learn More About Us</a>
    </header>
  );
} 