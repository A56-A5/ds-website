'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const achievements = [
  {
    icon: "🏆",
    title: "Best Paper Award",
    desc: "Faculty received best paper award at NeurIPS 2024 for work on 'Explainable AI in Healthcare'.",
    tags: ["Research", "Award"],
    image: "/achievements/best-paper.jpg"
  },
  {
    icon: "💡",
    title: "Student Innovation Grant",
    desc: "Undergraduate team won $50,000 grant for their health AI project 'MediPredict'.",
    tags: ["Grant", "Student"],
    image: "/achievements/innovation-grant.jpg"
  },
  {
    icon: "🥇",
    title: "Hackathon Champions",
    desc: "Our students won first place in the National Data Science Hackathon 2024.",
    tags: ["Hackathon", "Student"],
    image: "/achievements/hackathon.jpg"
  },
  {
    icon: "🔬",
    title: "Research Grant",
    desc: "Department secured $1M grant for AI research in sustainable development.",
    tags: ["Research", "Grant"],
    image: "/achievements/research-grant.jpg"
  },
  {
    icon: "🤝",
    title: "Industry Partnership",
    desc: "New collaboration with Google AI for research in quantum machine learning.",
    tags: ["Industry", "Collaboration"],
    image: "/achievements/industry-partnership.jpg"
  },
  {
    icon: "🎓",
    title: "Student Recognition",
    desc: "Three students selected for prestigious Microsoft Research Internship Program.",
    tags: ["Student", "Internship"],
    image: "/achievements/student-recognition.jpg"
  },
];

export default function AchievementsPreview() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="opacity-0">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#00293f' }}>Recent Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            style={{ background: '#97d655', border: '2.5px solid #00293f' }}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00293f]/50 z-10" />
              <img
                src={ach.image}
                alt={ach.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="text-2xl">{ach.icon}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#00293f' }}>{ach.title}</h3>
              <div className="text-sm mb-3" style={{ color: '#00293f' }}>{ach.desc}</div>
              <div className="flex flex-wrap gap-2">
                {ach.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ background: '#00293f', color: '#97d655' }}
                    className="px-2 py-0.5 rounded text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 