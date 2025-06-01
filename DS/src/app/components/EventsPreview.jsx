const events = [
  {
    icon: "🤖",
    date: "Mar 15",
    title: "AI Symposium 2024",
    desc: "Annual gathering of AI researchers and students.",
    tags: ["Conference", "AI"],
    location: "Main Auditorium",
    time: "9:00 AM",
    extra: "Keynote: Dr. Priya Sharma",
    link: "#",
  },
  {
    icon: "📊",
    date: "Jun 10",
    title: "Data Science Bootcamp",
    desc: "Hands-on training for aspiring data scientists.",
    tags: ["Workshop", "Training"],
    location: "Computer Lab 3",
    time: "10:00 AM",
    extra: "Trainer: Dr. Rahul Mehta",
    link: "#",
  },
  {
    icon: "🤝",
    date: "Aug 5",
    title: "Industry Connect Day",
    desc: "Networking event with leading tech companies.",
    tags: ["Networking", "Industry"],
    location: "Conference Hall",
    time: "2:00 PM",
    extra: "Panel: Google, Microsoft, Amazon",
    link: "#",
  },
  {
    icon: "👩‍💻",
    date: "Sep 12",
    title: "Women in Data Science Panel",
    desc: "Panel discussion with women leaders in data science.",
    tags: ["Panel", "Diversity"],
    location: "Seminar Room",
    time: "3:00 PM",
    extra: "Speakers: Dr. Ananya Singh, Dr. Meera Kapoor",
    link: "#",
  },
  {
    icon: "⚖️",
    date: "Nov 18",
    title: "AI Ethics Debate",
    desc: "Debate on ethical issues in AI.",
    tags: ["Debate", "Ethics"],
    location: "Debate Hall",
    time: "4:00 PM",
    extra: "Moderator: Dr. Arjun Reddy",
    link: "#",
  },
  {
    icon: "❄️",
    date: "Dec 15",
    title: "Winter Workshop",
    desc: "Advanced topics in machine learning and deep learning.",
    tags: ["Workshop", "ML"],
    location: "AI Lab",
    time: "9:30 AM",
    extra: "Guest: Dr. Vikram Patel",
    link: "#",
  },
];

export default function EventsPreview() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl text-purple-700">{event.icon}</span>
              <span className="font-bold text-purple-700 text-base">{event.date}</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{event.title}</h3>
            <div className="text-sm text-gray-700 mb-2">{event.desc}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs text-gray-600 mb-1">
              📍 {event.location} | ⏰ {event.time}
            </div>
            <div className="text-xs text-gray-700 mb-2">{event.extra}</div>
            <a href={event.link} className="text-xs text-blue-600 hover:underline mt-auto">More info</a>
          </div>
        ))}
      </div>
    </section>
  );
} 