import Footer from "@/app/components/Footer";

const headOfDepartment = {
  name: "Dr. Priya Sharma",
  title: "Professor & Head of Department",
  desc: "Expert in machine learning, data mining, and AI ethics.",
  image: "https://randomuser.me/api/portraits/women/44.jpg"
};

const facultyMembers = [
  {
    name: "Dr. Rahul Mehta",
    title: "Associate Professor",
    focus: "Big data analytics, cloud computing.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Dr. Ananya Singh",
    title: "Assistant Professor",
    focus: "Natural language processing, data visualization.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Vikram Patel",
    title: "Assistant Professor",
    focus: "Deep learning, computer vision.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Dr. Meera Kapoor",
    title: "Assistant Professor",
    focus: "Statistical learning, time series analysis.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Dr. Arjun Reddy",
    title: "Assistant Professor",
    focus: "Reinforcement learning, robotics.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Dr. Sneha Gupta",
    title: "Assistant Professor",
    focus: "Data mining, pattern recognition.",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

export default function FacultyStaff() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen pt-20">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#00293f' }}>Faculty & Staff</h1>
        {/* Head of Department Card */}
        <div className="flex flex-col items-center mb-12">
          <div style={{ background: '#00293f', border: '2px solid #aef54e' }} className="flex flex-col items-center rounded-2xl p-8 shadow-lg w-full max-w-xl">
            <img
              src={headOfDepartment.image}
              alt={headOfDepartment.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-[#aef54e] mb-4"
            />
            <div className="text-center" style={{ color: '#aef54e' }}>
              <strong className="text-xl">{headOfDepartment.name}</strong> – {headOfDepartment.title}
              <p className="mt-2">{headOfDepartment.desc}</p>
            </div>
          </div>
        </div>
        {/* Faculty Members Grid */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#00293f' }}>Faculty Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facultyMembers.map((faculty, idx) => (
            <div key={idx} style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="flex flex-col items-center rounded-lg p-6 shadow-md text-center">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#aef54e] mb-3"
              />
              <div>
                <strong>{faculty.name}</strong> – {faculty.title}
                <p>Focus: {faculty.focus}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Support Staff Section */}
        <div style={{ background: '#00293f', border: '2px solid #aef54e', color: '#aef54e' }} className="rounded-xl p-8 w-full text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#aef54e' }}>Support Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#aef54e' }}>Administrative Staff</h3>
              <ul className="space-y-2">
                <li>Department Secretary</li>
                <li>Administrative Assistant</li>
                <li>Office Coordinator</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#aef54e' }}>Technical Staff</h3>
              <ul className="space-y-2">
                <li>Lab Technicians</li>
                <li>IT Support Staff</li>
                <li>Research Assistants</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 