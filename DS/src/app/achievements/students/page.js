import Footer from "@/app/components/Footer";

const studentAchievements = [
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
    icon: "🎓",
    title: "Student Recognition",
    desc: "Three students selected for prestigious Microsoft Research Internship Program.",
    tags: ["Student", "Internship"],
    image: "/achievements/student-recognition.jpg"
  },
  {
    icon: "🌐",
    title: "International Conference",
    desc: "Students presented research at International Conference on Machine Learning 2024.",
    tags: ["Research", "International"],
    image: "/achievements/conference.jpg"
  },
  {
    icon: "🏆",
    title: "Data Science Competition",
    desc: "Team secured second place in Kaggle Data Science Competition.",
    tags: ["Competition", "Data Science"],
    image: "/achievements/competition.jpg"
  },
  {
    icon: "💼",
    title: "Industry Placements",
    desc: "100% placement rate with top tech companies for graduating batch.",
    tags: ["Placement", "Career"],
    image: "/achievements/placement.jpg"
  }
];

export default function StudentAchievements() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>Student Achievements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentAchievements.map((ach, idx) => (
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