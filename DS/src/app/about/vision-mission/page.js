'use client';
import Footer from "@/app/components/Footer";

export default function VisionMission() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>VISION & MISSION</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <div style={{ background: '#00293f', border: '2px solid #aef54ebf' }} className="rounded-xl p-8 w-full text-center shadow-lg group cursor-pointer">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#aef54ebf' }}>Vision</h2>
            <p className="text-lg transition-opacity duration-300" style={{ color: '#aef54ebf', opacity: 0.6 }}>
              To be a premier technical institution that nurtures professionally competent and socially responsible data scientists through quality education, training, and research.
            </p>
          </div>
          {/* Mission Card */}
          <div style={{ background: '#00293f', border: '2px solid #aef54ebf' }} className="rounded-xl p-8 w-full text-center shadow-lg group cursor-pointer">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#aef54ebf' }}>Mission</h2>
            <p className="text-lg transition-opacity duration-300" style={{ color: '#aef54ebf', opacity: 0.6 }}>
              To advance knowledge and innovation in data science through research, education, and community engagement.
            </p>
          </div>
        </div>
        {/* Core Values Card */}
        <div style={{ background: '#00293f', border: '2px solid #aef54ebf', color: '#aef54ebf' }} className="rounded-xl p-8 w-full text-center shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#aef54ebf' }}>Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54ebf' }}>Integrity</h3>
              <p>Maintaining the highest standards of academic and professional ethics in all our endeavors.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54ebf' }}>Excellence</h3>
              <p>Striving for the highest quality in teaching, research, and community service.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54ebf' }}>Collaboration</h3>
              <p>Fostering partnerships with industry, academia, and the community to achieve shared goals.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54ebf' }}>Innovation</h3>
              <p>Encouraging creative thinking and cutting-edge research in data science.</p>
            </div>
          </div>
        </div>
        {/* Department Highlights Card */}
        <div style={{ background: '#00293f', border: '2px solid #aef54ebf', color: '#aef54ebf' }} className="rounded-xl p-8 w-full text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#aef54ebf' }}>Department Highlights</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#aef54ebf' }}>59</div>
            <div className="text-lg" style={{ color: '#aef54ebf' }}>Students Enrolled</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 