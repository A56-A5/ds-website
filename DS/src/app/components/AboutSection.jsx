export default function AboutSection() {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div style={{ background: '#00293f', border: '2px solid #aef54e' }} className="rounded-xl p-8 flex flex-col items-center justify-center text-center group relative min-h-[200px] cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 transition-opacity duration-300 group-hover:opacity-0" style={{ color: '#aef54e' }}>Vision</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-lg" style={{ color: '#aef54e' }}>
            To be a premier technical institution that nurtures professionally competent and socially responsible data scientists through quality education, training, and research.
          </p>
        </div>
        <div style={{ background: '#00293f', border: '2px solid #aef54e' }} className="rounded-xl p-8 flex flex-col items-center justify-center text-center group relative min-h-[200px] cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 transition-opacity duration-300 group-hover:opacity-0" style={{ color: '#aef54e' }}>Mission</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-lg" style={{ color: '#aef54e' }}>
            To advance knowledge and innovation in data science through research, education, and community engagement.
          </p>
        </div>
        <div style={{ background: '#00293f', border: '2px solid #aef54e' }} className="rounded-xl p-8 flex flex-col items-center justify-center text-center group relative min-h-[200px] cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 transition-opacity duration-300 group-hover:opacity-0" style={{ color: '#aef54e' }}>Core Values</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-lg" style={{ color: '#aef54e' }}>
            Integrity, Excellence, Collaboration, Innovation, and Social Responsibility.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#aef54e' }}>Research Areas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Machine Learning and Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Big Data Analytics</li>
            <li>Data Mining and Pattern Recognition</li>
            <li>AI Ethics and Responsible AI</li>
          </ul>
        </div>
        <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#aef54e' }}>Industry Collaborations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google AI Research Partnership</li>
            <li>Microsoft Azure Cloud Platform</li>
            <li>IBM Watson Research Center</li>
            <li>Amazon Web Services</li>
            <li>Intel AI Research Lab</li>
            <li>NVIDIA GPU Research Center</li>
          </ul>
        </div>
      </div>

      <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#aef54e' }}>Department Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#aef54e' }}>15+</div>
            <div className="text-lg" style={{ color: '#aef54e' }}>Research Papers Published</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#aef54e' }}>95%</div>
            <div className="text-lg" style={{ color: '#aef54e' }}>Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#aef54e' }}>20+</div>
            <div className="text-lg" style={{ color: '#aef54e' }}>Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
} 