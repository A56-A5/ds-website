"use client";
import { useState } from "react";
import Footer from "../../components/Footer";

// Dummy events data
const events = [
  {
    name: "Orientation Day",
    date: "2024-06-03",
    description: "Welcome and orientation for new students.",
    location: "Auditorium",
    color: "#97d655"
  },
  {
    name: "AI Seminar",
    date: "2024-06-07",
    description: "Seminar on AI trends.",
    location: "Seminar Hall",
    color: "#97b0c0"
  },
  {
    name: "Sports Day",
    date: "2024-06-14",
    description: "Annual sports event.",
    location: "Sports Ground",
    color: "#00293f"
  },
  {
    name: "Workshop: Python",
    date: "2024-06-19",
    description: "Hands-on Python workshop.",
    location: "Lab 1",
    color: "#97d655"
  },
  {
    name: "Cultural Fest",
    date: "2024-06-25",
    description: "Cultural performances and competitions.",
    location: "Main Hall",
    color: "#97b0c0"
  }
];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = firstDay.getDay();
  for (let i = 0; i < dayOfWeek; i++) week.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    week.push(new Date(year, month, d));
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export default function EventsTimelineCalendar() {
  const today = new Date();
  const [calendar, setCalendar] = useState({
    year: 2024,
    month: 7, // August (0-indexed)
  });
  const monthMatrix = getMonthMatrix(calendar.year, calendar.month);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  function getEventForDate(date) {
    if (!date) return null;
    const dateStr = date.toISOString().slice(0, 10);
    return events.find(e => e.date === dateStr);
  }

  function changeMonth(offset) {
    let newMonth = calendar.month + offset;
    let newYear = calendar.year;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCalendar({ year: newYear, month: newMonth });
  }

  function changeYear(offset) {
    const newYear = calendar.year + offset;
    if (newYear < 2024 || newYear > 2030) return;
    setCalendar({ year: newYear, month: calendar.month });
  }

  function handleMonthChange(e) {
    setCalendar({ ...calendar, month: parseInt(e.target.value, 10) });
  }

  function handleYearChange(e) {
    setCalendar({ ...calendar, year: parseInt(e.target.value, 10) });
  }

  // Generate years for dropdown (2024-2030)
  const years = Array.from({ length: 7 }, (_, i) => 2024 + i);

  return (
    <div style={{ background: '#97b0c0', minHeight: '100vh' }}>
      <main className="max-w-5xl mx-auto py-12 px-4 mt-24">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => changeYear(-1)} disabled={calendar.year === 2024} className={`px-3 py-2 rounded bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] ${calendar.year === 2024 ? 'opacity-50 cursor-not-allowed' : ''}`}>«</button>
            <button onClick={() => changeMonth(-1)} className="px-3 py-2 rounded bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655]">‹</button>
            <label className="font-bold text-[#00293f] text-lg mr-2" htmlFor="month-select">Month:</label>
            <select
              id="month-select"
              value={calendar.month}
              onChange={handleMonthChange}
              className="px-4 py-2 rounded border-2 border-[#00293f] font-bold text-[#00293f] bg-white text-lg mr-4 shadow focus:outline-none focus:ring-2 focus:ring-[#97d655]"
              style={{ minWidth: 140 }}
            >
              {monthNames.map((name, idx) => (
                <option key={name} value={idx}>{name}</option>
              ))}
            </select>
            <label className="font-bold text-[#00293f] text-lg mr-2" htmlFor="year-select">Year:</label>
            <select
              id="year-select"
              value={calendar.year}
              onChange={handleYearChange}
              className="px-4 py-2 rounded border-2 border-[#00293f] font-bold text-[#00293f] bg-white text-lg mr-4 shadow focus:outline-none focus:ring-2 focus:ring-[#97d655]"
              style={{ minWidth: 100 }}
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <button onClick={() => changeMonth(1)} className="px-3 py-2 rounded bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655]">›</button>
            <button onClick={() => changeYear(1)} disabled={calendar.year === 2030} className={`px-3 py-2 rounded bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] ${calendar.year === 2030 ? 'opacity-50 cursor-not-allowed' : ''}`}>»</button>
          </div>
        </div>
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