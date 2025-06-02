'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
    image: "/events/ai-symposium.jpg"
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
    image: "/events/bootcamp.jpg"
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
    image: "/events/industry-connect.jpg"
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
    image: "/events/women-in-ds.jpg"
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
    image: "/events/ai-ethics.jpg"
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
    image: "/events/winter-workshop.jpg"
  },
];

export default function EventsPreview() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="opacity-0" style={{ background: '#97b0c0' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#00293f' }}>Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div
            key={idx}
            style={{ background: '#97b0c0', border: '2px solid #00293f' }}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="text-2xl">{event.icon}</span>
                <span className="ml-2 font-bold text-white">{event.date}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#00293f' }}>{event.title}</h3>
              <div className="text-sm mb-3" style={{ color: '#00293f' }}>{event.desc}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ background: '#aef54e', color: '#00293f' }}
                    className="px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs mb-2" style={{ color: '#00293f' }}>
                📍 {event.location} | ⏰ {event.time}
              </div>
              <div className="text-xs mb-3" style={{ color: '#00293f' }}>{event.extra}</div>
              <a 
                href={event.link} 
                style={{ color: '#00293f' }}
                className="inline-block text-sm font-medium transition-colors hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 