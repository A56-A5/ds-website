'use client';
import { useState } from "react";

const eventsByYear = {
  2024: [
    { date: "Mar 15", title: "AI Symposium 2024", desc: "Annual gathering of AI researchers and students.", icon: "🤖", tags: ["Conference", "AI"], link: "#" },
    { date: "Jun 10", title: "Data Science Bootcamp", desc: "Hands-on training for aspiring data scientists.", icon: "📊", tags: ["Workshop", "Training"], link: "#" },
    { date: "Aug 5", title: "Industry Connect Day", desc: "Networking event with leading tech companies.", icon: "🤝", tags: ["Networking", "Industry"], link: "#" },
    { date: "Sep 12", title: "Women in Data Science Panel", desc: "Panel discussion with women leaders in data science.", icon: "👩‍💻", tags: ["Panel", "Diversity"], link: "#" },
    { date: "Oct 20", title: "Research Paper Presentation", desc: "Students present their research findings.", icon: "📄", tags: ["Research", "Student"], link: "#" },
    { date: "Nov 18", title: "AI Ethics Debate", desc: "Debate on ethical issues in AI.", icon: "⚖️", tags: ["Debate", "Ethics"], link: "#" },
    { date: "Dec 15", title: "Winter Workshop", desc: "Advanced topics in machine learning and deep learning.", icon: "❄️", tags: ["Workshop", "ML"], link: "#" },
  ],
  2023: [
    { date: "Apr 5", title: "Big Data Analytics Workshop", desc: "Workshop on big data tools and techniques.", icon: "💾", tags: ["Workshop", "Big Data"], link: "#" },
    { date: "May 22", title: "Data Science Quiz", desc: "Inter-college quiz competition.", icon: "❓", tags: ["Competition", "Quiz"], link: "#" },
    { date: "Jul 15", title: "Summer Internship Fair", desc: "Opportunities with top tech companies.", icon: "🧑‍💼", tags: ["Internship", "Career"], link: "#" },
    { date: "Sep 20", title: "Hackathon: Data for Good", desc: "Students built solutions for social impact.", icon: "🏆", tags: ["Hackathon", "Social"], link: "#" },
    { date: "Oct 10", title: "Guest Lecture: Dr. Smith", desc: "Lecture on AI in Healthcare.", icon: "🎤", tags: ["Lecture", "Healthcare"], link: "#" },
    { date: "Nov 10", title: "Data Visualization Contest", desc: "Creative visualization of complex datasets.", icon: "📈", tags: ["Contest", "Visualization"], link: "#" },
    { date: "Dec 5", title: "Alumni Meet", desc: "Networking with successful graduates.", icon: "🎓", tags: ["Alumni", "Networking"], link: "#" },
  ],
  2022: [
    { date: "Feb 12", title: "Machine Learning Seminar", desc: "Talks by leading ML researchers.", icon: "🧠", tags: ["Seminar", "ML"], link: "#" },
    { date: "Mar 30", title: "Python for Data Science", desc: "Hands-on coding session.", icon: "🐍", tags: ["Workshop", "Python"], link: "#" },
    { date: "May 20", title: "Data Science Career Fair", desc: "Job opportunities in data science.", icon: "💼", tags: ["Career", "Fair"], link: "#" },
    { date: "Aug 8", title: "Research Collaboration Day", desc: "Partnering with industry for research.", icon: "🔬", tags: ["Research", "Industry"], link: "#" },
    { date: "Oct 25", title: "Data Ethics Workshop", desc: "Ethical considerations in AI and data science.", icon: "⚖️", tags: ["Workshop", "Ethics"], link: "#" },
    { date: "Dec 18", title: "Project Showcase", desc: "Student projects demonstration.", icon: "🖥️", tags: ["Showcase", "Student"], link: "#" },
  ],
  2021: [
    { date: "Jan 10", title: "Department Inauguration", desc: "Official launch of the Department of Data Science.", icon: "🎉", tags: ["Inauguration"], link: "#" },
    { date: "Mar 25", title: "First Faculty Recruitment", desc: "Welcoming our initial faculty members.", icon: "👨‍🏫", tags: ["Recruitment", "Faculty"], link: "#" },
    { date: "Jun 15", title: "Curriculum Development", desc: "Designing the data science curriculum.", icon: "📚", tags: ["Curriculum"], link: "#" },
    { date: "Sep 1", title: "First Batch Admission", desc: "Welcoming our first batch of students.", icon: "🧑‍🎓", tags: ["Admission", "Student"], link: "#" },
    { date: "Oct 10", title: "First Research Grant", desc: "Received first major research grant.", icon: "💰", tags: ["Grant", "Research"], link: "#" },
    { date: "Nov 20", title: "Industry Advisory Board", desc: "Formation of industry advisory committee.", icon: "🏢", tags: ["Industry", "Advisory"], link: "#" },
  ],
};

export default function Timeline() {
  const [year, setYear] = useState(2024);
  const years = [2024, 2023, 2022, 2021];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Events Timeline</h2>
      <div className="mb-6">
        <label htmlFor="year-select" className="mr-2 font-semibold">Select Year:</label>
        <select
          id="year-select"
          value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-purple-300 -translate-x-1/2 z-0" />
        <ul className="space-y-12 relative z-10">
          {eventsByYear[year] && eventsByYear[year].length > 0 ? (
            eventsByYear[year].map((event, idx) => (
              <li key={idx} className="flex w-full min-h-[140px]">
                {/* Left side */}
                {idx % 2 === 0 ? (
                  <div className="w-1/2 flex justify-end items-center">
                    <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 min-w-[220px] max-w-xs">
                      <div className="flex items-center justify-end mb-1">
                        <span className="text-2xl mr-2">{event.icon}</span>
                        <span className="font-bold text-purple-700">{event.date}</span>
                      </div>
                      <div className="font-semibold mb-1 text-right">{event.title}</div>
                      <div className="text-sm text-gray-600 mb-2 text-right">{event.desc}</div>
                      <div className="flex flex-wrap gap-2 mb-2 justify-end">
                        {event.tags && event.tags.map((tag, i) => (
                          <span key={i} className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      {event.link && <a href={event.link} className="text-xs text-blue-600 hover:underline float-right">More info</a>}
                    </div>
                  </div>
                ) : (
                  <div className="w-1/2" />
                )}
                {/* Dot on the line */}
                <div className="w-0 flex flex-col items-center">
                  <span className="block w-4 h-4 bg-purple-500 rounded-full border-4 border-white z-20" />
                </div>
                {/* Right side */}
                {idx % 2 !== 0 ? (
                  <div className="w-1/2 flex justify-start items-center">
                    <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 min-w-[220px] max-w-xs">
                      <div className="flex items-center justify-start mb-1">
                        <span className="text-2xl mr-2">{event.icon}</span>
                        <span className="font-bold text-purple-700">{event.date}</span>
                      </div>
                      <div className="font-semibold mb-1 text-left">{event.title}</div>
                      <div className="text-sm text-gray-600 mb-2 text-left">{event.desc}</div>
                      <div className="flex flex-wrap gap-2 mb-2 justify-start">
                        {event.tags && event.tags.map((tag, i) => (
                          <span key={i} className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      {event.link && <a href={event.link} className="text-xs text-blue-600 hover:underline">More info</a>}
                    </div>
                  </div>
                ) : (
                  <div className="w-1/2" />
                )}
              </li>
            ))
          ) : (
            <li className="text-center">No events for this year.</li>
          )}
        </ul>
      </div>
    </section>
  );
} 