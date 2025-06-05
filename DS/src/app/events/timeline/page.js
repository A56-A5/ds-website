"use client";
import { useState, useRef } from "react";
import Footer from "../../components/Footer";

// Dummy events data
const events = [
  {
    name: "Orientation Day",
    date: "2024-06-03",
    description: "Welcome and orientation for new students.",
    location: "Auditorium",
    time: "9:00 AM - 4:00 PM",
    organizer: "Department of Data Science",
    color: "#97d655",
    details: "Join us for a comprehensive orientation program where new students will be introduced to the department, faculty members, and the exciting journey ahead in Data Science. The day includes campus tours, program overview, and interactive sessions."
  },
  {
    name: "AI Seminar",
    date: "2024-06-07",
    description: "Seminar on AI trends.",
    location: "Seminar Hall",
    time: "2:00 PM - 5:00 PM",
    organizer: "AI Research Group",
    color: "#97b0c0",
    details: "An in-depth seminar covering the latest trends in Artificial Intelligence, featuring guest speakers from industry leaders. Topics include machine learning advancements, ethical AI, and real-world applications."
  },
  {
    name: "Sports Day",
    date: "2024-06-14",
    description: "Annual sports event.",
    location: "Sports Ground",
    time: "8:00 AM - 6:00 PM",
    organizer: "Sports Committee",
    color: "#00293f",
    details: "Annual sports day featuring various athletic events, team sports, and fun activities. Students can participate in track events, team sports, and recreational activities. Prizes and certificates will be awarded to winners."
  },
  {
    name: "Workshop: Python",
    date: "2024-06-19",
    description: "Hands-on Python workshop.",
    location: "Lab 1",
    time: "10:00 AM - 1:00 PM",
    organizer: "Programming Club",
    color: "#97d655",
    details: "A comprehensive workshop covering Python programming fundamentals, data structures, and basic algorithms. Perfect for beginners and intermediate programmers. Bring your laptops for hands-on practice."
  },
  {
    name: "Cultural Fest",
    date: "2024-06-25",
    description: "Cultural performances and competitions.",
    location: "Main Hall",
    time: "4:00 PM - 9:00 PM",
    organizer: "Cultural Committee",
    color: "#97b0c0",
    details: "Annual cultural festival featuring dance performances, music competitions, drama, and art exhibitions. Students can showcase their talents and participate in various cultural activities. Food stalls and entertainment included."
  },
  {
    name: "Hackathon",
    date: "2024-07-01",
    description: "24-hour coding competition.",
    location: "Innovation Hub",
    time: "9:00 AM - 9:00 AM (Next Day)",
    organizer: "Technical Club",
    color: "#00293f",
    details: "A 24-hour hackathon where teams will work on innovative solutions to real-world problems. Mentors from industry will be available for guidance. Prizes worth ₹50,000 to be won!"
  },
  {
    name: "Industry Connect",
    date: "2024-07-08",
    description: "Networking with industry professionals.",
    location: "Conference Hall",
    time: "10:00 AM - 4:00 PM",
    organizer: "Placement Cell",
    color: "#97d655",
    details: "An opportunity to interact with industry professionals from leading tech companies. Includes panel discussions, networking sessions, and potential internship opportunities."
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
  const [searchQuery, setSearchQuery] = useState("");
  const monthMatrix = getMonthMatrix(calendar.year, calendar.month);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null); // { event, x, y }
  const gridRef = useRef();

  function getEventForDate(date) {
    if (!date) return null;
    const dateStr = date.toISOString().slice(0, 10);
    return events.find(e => e.date === dateStr);
  }

  // Filter events based on search query
  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  function handleEventMouseEnter(idx, eventObj, e) {
    const rect = e.target.getBoundingClientRect();
    setHoveredEvent(idx);
    setPopupInfo({
      event: eventObj,
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY + 8 // 8px below
    });
  }
  function handleEventMouseLeave() {
    setHoveredEvent(null);
    setPopupInfo(null);
  }

  return (
    <div style={{ background: '#97b0c0', minHeight: '100vh' }}>
      <main className="max-w-5xl mx-auto py-12 px-4 mt-24">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#00293f] bg-white text-[#00293f] font-medium text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#97d655]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-6 h-6" fill="none" stroke="#00293f" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Calendar Controls */}
        {!searchQuery && (
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <button onClick={() => changeYear(-1)} disabled={calendar.year === 2024} className={`px-3 py-2 rounded-xl bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] hover:bg-[#163447] transition-colors ${calendar.year === 2024 ? 'opacity-50 cursor-not-allowed' : ''}`}>«</button>
              <button onClick={() => changeMonth(-1)} className="px-3 py-2 rounded-xl bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] hover:bg-[#163447] transition-colors">‹</button>
              <label className="font-bold text-[#00293f] text-lg mr-2" htmlFor="month-select">Month:</label>
              <select
                id="month-select"
                value={calendar.month}
                onChange={handleMonthChange}
                className="px-4 py-2 rounded-xl border-2 border-[#00293f] font-bold text-[#00293f] bg-white text-lg mr-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#97d655]"
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
                className="px-4 py-2 rounded-xl border-2 border-[#00293f] font-bold text-[#00293f] bg-white text-lg mr-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#97d655]"
                style={{ minWidth: 100 }}
              >
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <button onClick={() => changeMonth(1)} className="px-3 py-2 rounded-xl bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] hover:bg-[#163447] transition-colors">›</button>
              <button onClick={() => changeYear(1)} disabled={calendar.year === 2030} className={`px-3 py-2 rounded-xl bg-[#00293f] text-[#97d655] font-bold text-lg border-2 border-[#97d655] hover:bg-[#163447] transition-colors ${calendar.year === 2030 ? 'opacity-50 cursor-not-allowed' : ''}`}>»</button>
            </div>
          </div>
        )}

        {/* Calendar Grid */}
        {!searchQuery && (
          <div ref={gridRef} className="bg-[#00293f] rounded-2xl shadow-lg p-6 border-2 border-[#97d655]" style={{overflow: 'visible', position: 'relative', zIndex: 1}}>
            <div className="grid grid-cols-7 gap-2 mb-2" style={{overflow: 'visible'}}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center font-semibold text-lg" style={{ color: '#97d655' }}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2" style={{overflow: 'visible', position: 'relative'}}>
              {monthMatrix.flat().map((date, idx) => {
                const event = getEventForDate(date);
                return (
                  <div
                    key={idx}
                    className="relative bg-[#163447] rounded-xl border border-[#97d655] min-h-[100px] flex flex-col items-center justify-start p-2 transition-all hover:shadow-lg hover:scale-[1.02]"
                    style={{ position: 'relative', overflow: 'visible', zIndex: 1 }}
                  >
                    <div className="text-sm font-semibold mb-1" style={{ color: '#97d655' }}>
                      {date ? date.getDate() : ""}
                    </div>
                    {event && (
                      <div
                        className="w-full cursor-pointer rounded-lg px-2 py-1 text-sm font-bold text-center mt-1 transition-all hover:scale-105"
                        style={{ background: event.color, color: event.color === '#00293f' ? '#97d655' : '#00293f', position: 'relative', zIndex: 2 }}
                        onMouseEnter={e => handleEventMouseEnter(idx, { ...event, date }, e)}
                        onMouseLeave={handleEventMouseLeave}
                      >
                        {event.name}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Popup rendered outside the grid for stacking */}
        {popupInfo && (
          <div
            className="fixed z-[99999] w-72 bg-[#00293f] border-2 border-[#97d655] rounded-xl shadow-lg p-4 text-sm text-left"
            style={{ left: popupInfo.x, top: popupInfo.y, transform: 'translateX(-50%)', color: '#97d655', pointerEvents: 'none' }}
          >
            <div className="font-bold mb-2 text-base">{popupInfo.event.name}</div>
            <div className="mb-2"><b>Date:</b> {new Date(popupInfo.event.date).toLocaleDateString()}</div>
            <div className="mb-2"><b>Time:</b> {popupInfo.event.time}</div>
            <div className="mb-2"><b>Location:</b> {popupInfo.event.location}</div>
            <div className="mb-2"><b>Organizer:</b> {popupInfo.event.organizer}</div>
            <div className="mb-2"><b>Description:</b> {popupInfo.event.description}</div>
            <div className="mt-3 pt-3 border-t border-[#97d655]">
              <b>Details:</b> {popupInfo.event.details}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00293f' }}>Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvents.length === 0 && (
                <div className="text-lg text-[#00293f]">No events found.</div>
              )}
              {filteredEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-[#00293f] border-2 border-[#97d655] rounded-xl p-4 shadow-lg"
                >
                  <div className="font-bold text-lg mb-2" style={{ color: '#97d655' }}>{event.name}</div>
                  <div className="text-sm" style={{ color: '#97d655' }}>
                    <p><b>Date:</b> {new Date(event.date).toLocaleDateString()}</p>
                    <p><b>Time:</b> {event.time}</p>
                    <p><b>Location:</b> {event.location}</p>
                    <p><b>Organizer:</b> {event.organizer}</p>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 