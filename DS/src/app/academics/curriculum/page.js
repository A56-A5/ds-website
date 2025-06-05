"use client";
import React, { useState } from "react";

const syllabusList = [
  {
    name: "2024-2028 Syllabus",
    file: "https://dnbca6q7do6n.cloudfront.net/media/SyllabusPDFS/Curriculam_Computer_Science_and_EngineeringData_Science.pdf"
  },
  // Add more syllabus PDFs here as needed
];

export default function CurriculumPage() {
  const [selected, setSelected] = useState(syllabusList[0]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-[#00293f]">Curriculum / Syllabus</h1>
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-[#00293f]">Select Syllabus PDF:</label>
        <select
          className="w-full p-3 rounded border-2 border-[#00293f] text-lg mb-4"
          value={selected.file}
          onChange={e => setSelected(syllabusList.find(s => s.file === e.target.value))}
        >
          {syllabusList.map((syllabus, idx) => (
            <option key={idx} value={syllabus.file}>{syllabus.name}</option>
          ))}
        </select>
        <a
          href={selected.file}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-block px-6 py-2 bg-[#97d655] text-[#00293f] font-bold rounded shadow hover:bg-[#7fc244] transition-colors"
        >
          Download PDF
        </a>
      </div>
      <div className="border-2 border-[#97d655] rounded-xl overflow-hidden shadow-lg" style={{ minHeight: 600 }}>
        <iframe
          src={selected.file}
          title="Syllabus PDF"
          width="100%"
          height="600px"
          className="w-full"
        />
      </div>
    </div>
  );
} 