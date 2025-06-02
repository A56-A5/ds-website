import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Infrastructure() {
  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-purple-900">Infrastructure</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Research Labs</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">AI & Machine Learning Lab</h3>
                  <p className="text-gray-600">State-of-the-art computing facilities with GPU clusters</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Data Analytics Lab</h3>
                  <p className="text-gray-600">High-performance computing systems for big data analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Visualization Lab</h3>
                  <p className="text-gray-600">Advanced display systems for data visualization</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Computing Resources</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">High-Performance Computing Cluster</h3>
                  <p className="text-gray-600">100+ CPU cores, 500TB storage</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">GPU Workstations</h3>
                  <p className="text-gray-600">NVIDIA RTX 3090, 24GB VRAM each</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Cloud Computing Access</h3>
                  <p className="text-gray-600">AWS, Azure, and Google Cloud credits</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Software & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Development Tools</h3>
              <ul className="space-y-2">
                <li>Python</li>
                <li>R</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Data Analysis</h3>
              <ul className="space-y-2">
                <li>Tableau</li>
                <li>Power BI</li>
                <li>SPSS</li>
                <li>SAS</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Cloud Platforms</h3>
              <ul className="space-y-2">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>IBM Cloud</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Learning Spaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Smart Classrooms</h3>
              <ul className="space-y-2">
                <li>Interactive whiteboards</li>
                <li>Video conferencing facilities</li>
                <li>High-speed internet</li>
                <li>Projection systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Collaboration Spaces</h3>
              <ul className="space-y-2">
                <li>Group study rooms</li>
                <li>Meeting rooms</li>
                <li>Common areas</li>
                <li>Presentation spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 