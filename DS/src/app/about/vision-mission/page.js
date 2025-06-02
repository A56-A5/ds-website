import Footer from "@/app/components/Footer";

export default function VisionMission() {
  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-purple-900">Vision & Mission</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Vision</h2>
            <p className="text-lg">To be a premier technical institution that nurtures professionally competent and socially responsible data scientists through quality education, training, and research.</p>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Mission</h2>
            <p className="text-lg">To advance knowledge and innovation in data science through research, education, and community engagement.</p>
          </div>
        </div>

        <div className="bg-purple-100 rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Integrity</h3>
              <p>Maintaining the highest standards of academic and professional ethics in all our endeavors.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Excellence</h3>
              <p>Striving for the highest quality in teaching, research, and community service.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Collaboration</h3>
              <p>Fostering partnerships with industry, academia, and the community to achieve shared goals.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Innovation</h3>
              <p>Encouraging creative thinking and cutting-edge research in data science.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Department Highlights</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">59</div>
            <div className="text-gray-600 text-lg">Students Enrolled</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 