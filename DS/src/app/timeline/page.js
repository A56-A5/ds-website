"use client";
import { useState } from "react";
import Footer from "../components/Footer";

// Sample events data
const events = [
  {
    name: "Department Inauguration",
    date: "2024-06-05",
    description: "Official inauguration of the Data Science Department.",
    location: "Auditorium",
    color: "#97d655"
  },
  {
    name: "AI Workshop",
    date: "2024-06-12",
    description: "Hands-on workshop on Artificial Intelligence.",
    location: "Lab 2",
    color: "#97b0c0"
  },
  {
    name: "Hackathon",
    date: "2024-06-18",
    description: "24-hour coding hackathon for all students.",
    location: "Main Hall",
    color: "#00293f"
  },
  {
    name: "Guest Lecture",
    date: "2024-06-22",
    description: "Talk by Dr. Jane Doe on Data Ethics.",
    location: "Seminar Room",
    color: "#97d655"
  },
  {
    name: "Project Expo",
    date: "2024-06-28",
    description: "Showcase of student projects.",
    location: "Exhibition Hall",
    color: "#97b0c0"
  }
];

function getMonthMatrix(year, month) {
  // month: 0-indexed
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = firstDay.getDay();
  // Fill initial empty days
  for (let i = 0; i < dayOfWeek; i++) week.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    week.push(new Date(year, month, d));
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  // Fill trailing empty days
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

export default function TimelineCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthMatrix = getMonthMatrix(year, month);
  const monthName = today.toLocaleString("default", { month: "long" });
  const [hoveredEvent, setHoveredEvent] = useState(null);

  function getEventForDate(date) {
    if (!date) return null;
    const dateStr = date.toISOString().slice(0, 10);
    return events.find(e => e.date === dateStr);
  }

  return (
    <div style={{ background: '#97b0c0', minHeight: '100vh' }}>
      <main className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#00293f' }}>{monthName} {year} Event Timeline</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="text-center font-semibold" style={{ color: '#00293f' }}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {monthMatrix.flat().map((date, idx) => {
              const event = getEventForDate(date);
              return (
                <div
                  key={idx}
                  className="relative bg-[#f3f6f8] rounded-xl border border-[#97b0c0] min-h-[80px] flex flex-col items-center justify-start p-2 transition-shadow hover:shadow-lg"
                  style={{ position: 'relative' }}
                >
                  <div className="text-xs font-semibold mb-1" style={{ color: '#00293f' }}>
                    {date ? date.getDate() : ""}
                  </div>
                  {event && (
                    <div
                      className="w-full cursor-pointer rounded px-2 py-1 text-xs font-bold text-center mt-1"
                      style={{ background: event.color, color: event.color === '#00293f' ? '#97d655' : '#00293f' }}
                      onMouseEnter={() => setHoveredEvent(idx)}
                      onMouseLeave={() => setHoveredEvent(null)}
                    >
                      {event.name}
                      {hoveredEvent === idx && (
                        <div
                          className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#97b0c0] rounded-xl shadow-lg p-3 text-xs text-left"
                          style={{ top: '100%' }}
                        >
                          <div className="font-bold mb-1" style={{ color: '#00293f' }}>{event.name}</div>
                          <div className="mb-1" style={{ color: '#163447' }}><b>Date:</b> {date.toLocaleDateString()}</div>
                          <div className="mb-1" style={{ color: '#163447' }}><b>Location:</b> {event.location}</div>
                          <div style={{ color: '#163447' }}>{event.description}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 