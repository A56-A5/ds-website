import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[600px] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Data Science Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Department of Data Science</h1>
          <p className="text-xl mb-8">Empowering the future through data-driven innovation and research</p>
          <button className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition-colors">
            Explore Our Programs
          </button>
        </div>
      </div>
    </div>
  );
} 