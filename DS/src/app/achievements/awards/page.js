import Footer from "@/app/components/Footer";

const departmentAwards = [
  {
    icon: "🏆",
    title: "Excellence in Research",
    desc: "Department recognized for outstanding contributions to AI research at national level.",
    tags: ["Research", "National"],
    image: "/achievements/research-excellence.jpg"
  },
  {
    icon: "🎓",
    title: "Best Department Award",
    desc: "Recognized as the top Data Science department in the country for 2024.",
    tags: ["Recognition", "National"],
    image: "/achievements/best-department.jpg"
  },
  {
    icon: "🤝",
    title: "Industry Collaboration Award",
    desc: "Awarded for exceptional industry-academia partnerships and student placements.",
    tags: ["Industry", "Collaboration"],
    image: "/achievements/industry-award.jpg"
  },
  {
    icon: "💡",
    title: "Innovation Hub Recognition",
    desc: "Department's innovation center recognized as a center of excellence.",
    tags: ["Innovation", "Recognition"],
    image: "/achievements/innovation-hub.jpg"
  },
  {
    icon: "🌐",
    title: "International Accreditation",
    desc: "Received international accreditation for Data Science programs.",
    tags: ["Accreditation", "International"],
    image: "/achievements/accreditation.jpg"
  },
  {
    icon: "📚",
    title: "Teaching Excellence",
    desc: "Department recognized for innovative teaching methodologies.",
    tags: ["Teaching", "Excellence"],
    image: "/achievements/teaching-excellence.jpg"
  }
];

export default function DepartmentAwards() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>Department Awards</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departmentAwards.map((ach, idx) => (
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