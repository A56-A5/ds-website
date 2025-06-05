import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Infrastructure() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="w-[75%] max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>Infrastructure</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#aef54e' }}>Research Labs</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>AI & Machine Learning Lab</h3>
                  <p>State-of-the-art computing facilities with GPU clusters</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>Data Analytics Lab</h3>
                  <p>High-performance computing systems for big data analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>Visualization Lab</h3>
                  <p>Advanced display systems for data visualization</p>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#aef54e' }}>Computing Resources</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>High-Performance Computing Cluster</h3>
                  <p>100+ CPU cores, 500TB storage</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>GPU Workstations</h3>
                  <p>NVIDIA RTX 3090, 24GB VRAM each</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#aef54e] mr-2">•</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#aef54e' }}>Cloud Computing Access</h3>
                  <p>AWS, Azure, and Google Cloud credits</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 w-full text-center shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#aef54e' }}>Software & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54e' }}>Development Tools</h3>
              <ul className="space-y-2">
                <li>Python</li>
                <li>R</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54e' }}>Data Analysis</h3>
              <ul className="space-y-2">
                <li>Tableau</li>
                <li>Power BI</li>
                <li>SPSS</li>
                <li>SAS</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54e' }}>Cloud Platforms</h3>
              <ul className="space-y-2">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>IBM Cloud</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 w-full text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#aef54e' }}>Learning Spaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54e' }}>Smart Classrooms</h3>
              <ul className="space-y-2">
                <li>Interactive whiteboards</li>
                <li>Video conferencing facilities</li>
                <li>High-speed internet</li>
                <li>Projection systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#aef54e' }}>Collaboration Spaces</h3>
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