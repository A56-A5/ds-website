'use client';
import { useState } from 'react';

export default function Curriculum() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-[#00293f]">Curriculum / Syllabus</h1>
      
      <div className="space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#97d655]">
          <h2 className="text-2xl font-semibold mb-4 text-[#00293f]">Program Overview</h2>
          <p className="text-[#163447] mb-4">
            The Data Science program is designed to provide students with a strong foundation in both theoretical concepts and practical applications. The curriculum is regularly updated to align with industry standards and emerging technologies.
          </p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#97d655]">
          <h2 className="text-2xl font-semibold mb-4 text-[#00293f]">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#00293f]">Foundation Courses</h3>
              <ul className="list-disc list-inside space-y-2 text-[#163447]">
                <li>Mathematics and Statistics</li>
                <li>Programming Fundamentals</li>
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#00293f]">Specialized Courses</h3>
              <ul className="list-disc list-inside space-y-2 text-[#163447]">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Big Data Analytics</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#97d655]">
          <h2 className="text-2xl font-semibold mb-4 text-[#00293f]">Syllabus</h2>
          <p className="text-[#163447] mb-4">
            The detailed syllabus for the B.Tech Data Science program is available for viewing and download.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <a 
              href="https://dnbca6q7do6n.cloudfront.net/media/SyllabusPDFS/Curriculam_Computer_Science_and_EngineeringData_Science.pdf"
              download="B.Tech_Data_Science_Syllabus.pdf"
              className="bg-[#97d655] text-[#00293f] px-6 py-3 rounded-lg font-semibold hover:bg-[#86c44a] transition-colors text-center"
            >
              Download Full Syllabus
            </a>
            <button 
              onClick={() => setShowPdf(!showPdf)}
              className="bg-[#00293f] text-[#97d655] px-6 py-3 rounded-lg font-semibold hover:bg-[#001f2f] transition-colors text-center"
            >
              {showPdf ? 'Hide Syllabus' : 'View Syllabus'}
            </button>
          </div>
          
          {showPdf && (
            <div className="w-full h-[800px] rounded-lg overflow-hidden border-2 border-[#97d655]">
              <iframe
                src="https://dnbca6q7do6n.cloudfront.net/media/SyllabusPDFS/Curriculam_Computer_Science_and_EngineeringData_Science.pdf"
                className="w-full h-full"
                title="B.Tech Data Science Syllabus"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 