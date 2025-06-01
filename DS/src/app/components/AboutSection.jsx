export default function AboutSection() {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-green-100 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <p>To be a premier technical institution that nurtures professionally competent and socially responsible data scientists through quality education, training, and research.</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p>To advance knowledge and innovation in data science through research, education, and community engagement.</p>
        </div>
        <div className="bg-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4">Core Values</h2>
          <p>Integrity, Excellence, Collaboration, Innovation, and Social Responsibility.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-purple-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Research Areas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Machine Learning and Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Big Data Analytics</li>
            <li>Data Mining and Pattern Recognition</li>
            <li>AI Ethics and Responsible AI</li>
          </ul>
        </div>
        <div className="bg-yellow-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Industry Collaborations</h2>
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

      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Department Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Research Papers Published</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
} 