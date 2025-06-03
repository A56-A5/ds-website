import Footer from "@/app/components/Footer";

const facultyAchievements = [
  {
    icon: "🏆",
    title: "Best Paper Award",
    desc: "Faculty received best paper award at NeurIPS 2024 for work on 'Explainable AI in Healthcare'.",
    tags: ["Research", "Award"],
    image: "/achievements/best-paper.jpg"
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
    icon: "📚",
    title: "Teaching Excellence Award",
    desc: "Dr. Smith recognized for innovative teaching methods in Machine Learning.",
    tags: ["Teaching", "Award"],
    image: "/achievements/teaching-award.jpg"
  },
  {
    icon: "🌐",
    title: "International Recognition",
    desc: "Faculty invited as keynote speaker at International AI Conference 2024.",
    tags: ["Recognition", "International"],
    image: "/achievements/international.jpg"
  },
  {
    icon: "💡",
    title: "Patent Award",
    desc: "Faculty team awarded patent for novel data compression algorithm.",
    tags: ["Patent", "Innovation"],
    image: "/achievements/patent.jpg"
  }
];

export default function FacultyAchievements() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>Faculty Achievements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyAchievements.map((ach, idx) => (
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
      </main>
      <Footer />
    </div>
  );
} 