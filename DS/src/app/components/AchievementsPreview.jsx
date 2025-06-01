const achievements = [
  {
    icon: "🏆",
    title: "Best Paper Award",
    desc: "Faculty received best paper award at NeurIPS 2024 for work on 'Explainable AI in Healthcare'.",
    tags: ["Research", "Award"],
  },
  {
    icon: "💡",
    title: "Student Innovation Grant",
    desc: "Undergraduate team won $50,000 grant for their health AI project 'MediPredict'.",
    tags: ["Grant", "Student"],
  },
  {
    icon: "🥇",
    title: "Hackathon Champions",
    desc: "Our students won first place in the National Data Science Hackathon 2024.",
    tags: ["Hackathon", "Student"],
  },
  {
    icon: "🔬",
    title: "Research Grant",
    desc: "Department secured $1M grant for AI research in sustainable development.",
    tags: ["Research", "Grant"],
  },
  {
    icon: "🤝",
    title: "Industry Partnership",
    desc: "New collaboration with Google AI for research in quantum machine learning.",
    tags: ["Industry", "Collaboration"],
  },
  {
    icon: "🎓",
    title: "Student Recognition",
    desc: "Three students selected for prestigious Microsoft Research Internship Program.",
    tags: ["Student", "Internship"],
  },
];

export default function AchievementsPreview() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl text-purple-700">{ach.icon}</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{ach.title}</h3>
            <div className="text-sm text-gray-700 mb-2">{ach.desc}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {ach.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 