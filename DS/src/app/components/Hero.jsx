import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[400px] sm:h-[600px] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Data Science Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark blue overlay at 75% opacity */}
        <div style={{ background: '#00293fcc' }} className="absolute inset-0" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 h-full flex items-center justify-center">
        <div style={{ background: '#aef54e', color: '#00293f' }} className="rounded-xl p-6 sm:p-10 w-full max-w-md sm:max-w-2xl text-center shadow-2xl border-2 border-[#97d655]">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-3 break-words leading-tight" style={{ color: '#00293f', letterSpacing: '1px' }}>DATA SCIENCE<br />DEPARTMENT</h1>
          <div className="text-base sm:text-xl font-semibold mt-2" style={{ color: '#00293f' }}>Christ College of Engineering, Irinjalakuda</div>
        </div>
      </div>
    </div>
  );
} 