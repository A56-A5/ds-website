'use client';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";

const aboutText = `Established in 2024, the Department of Data Science at Christ College of Engineering, Irinjalakuda aims to equip students with the knowledge and skills required in today's data-driven world. The department offers a comprehensive undergraduate program covering key areas like statistics, machine learning, artificial intelligence, and big data.\n\nWith a focus on hands-on learning, industry exposure, and ethical practices, the department fosters innovation, critical thinking, and real-world problem-solving. Supported by experienced faculty and modern infrastructure, it prepares students to become competent and responsible data science professionals.`;

const achievements = [
  {
    image: "/achievements/freshers-day.jpg",
    caption: "WINNERS OF FRESHER'S DAY 2024–25"
  },
  {
    image: "/achievements/hackathon.jpg",
    caption: "HACKATHON CHAMPIONS 2024"
  }
];

const events = [
  {
    image: "/events/event1.jpg",
    caption: "UPCOMING EVENT 1"
  },
  {
    image: "/events/event2.jpg",
    caption: "UPCOMING EVENT 2"
  }
];

export default function Home() {
  const [activeAch, setActiveAch] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);
  const achTouchStart = useRef(null);
  const eventTouchStart = useRef(null);
  const nextAch = () => setActiveAch((activeAch + 1) % achievements.length);
  const prevAch = () => setActiveAch((activeAch - 1 + achievements.length) % achievements.length);
  const nextEvent = () => setActiveEvent((activeEvent + 1) % events.length);
  const prevEvent = () => setActiveEvent((activeEvent - 1 + events.length) % events.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextAch();
    }, 3300);
    return () => clearInterval(interval);
  }, [activeAch]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextEvent();
    }, 3300);
    return () => clearInterval(interval);
  }, [activeEvent]);

  // Touch handlers for Achievements
  const handleAchTouchStart = (e) => {
    achTouchStart.current = e.touches[0].clientX;
  };
  const handleAchTouchEnd = (e) => {
    if (achTouchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - achTouchStart.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextAch();
      else prevAch();
    }
    achTouchStart.current = null;
  };
  // Touch handlers for Events
  const handleEventTouchStart = (e) => {
    eventTouchStart.current = e.touches[0].clientX;
  };
  const handleEventTouchEnd = (e) => {
    if (eventTouchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - eventTouchStart.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextEvent();
      else prevEvent();
    }
    eventTouchStart.current = null;
  };

  return (
    <div className="min-h-screen" style={{ background: '#97b0c0' }}>
      <Hero />
      {/* About Card */}
      <section className="flex flex-col items-center py-10">
        <div className="w-[75%] max-w-5xl mx-auto mb-2">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#163447', textAlign: 'left' }}>ABOUT</h2>
        </div>
        <div style={{ background: '#163447', border: '2.5px solid #97d655', borderRadius: '8px' }} className="w-[75%] max-w-5xl mx-auto px-2 sm:px-4 p-8 sm:p-12 shadow-lg min-h-[400px] flex items-center">
          <p className="text-base sm:text-lg text-center" style={{ color: '#97d655', fontFamily: 'inherit', lineHeight: '1.8' }}>
            {aboutText.split('\n').map((line, idx) => (
              <span key={idx} style={{ display: 'block', marginBottom: '1.5em' }}>{line}</span>
            ))}
          </p>
        </div>
      </section>
      {/* Achievements Carousel */}
      <section className="flex flex-col items-center py-10">
        <div className="w-[75%] max-w-5xl mx-auto mb-2">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#163447', textAlign: 'left' }}>ACHIEVEMENTS</h2>
        </div>
        <div
          style={{ background: '#163447', border: '2.5px solid #97d655', borderRadius: '12px' }}
          className="w-[75%] max-w-5xl mx-auto px-2 sm:px-4 p-4 sm:p-8 shadow-lg flex flex-col items-center relative min-h-[320px] sm:min-h-[600px] max-h-[700px] justify-center"
          onTouchStart={handleAchTouchStart}
          onTouchEnd={handleAchTouchEnd}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <button onClick={prevAch} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 40 40"><polygon points="28,8 14,20 28,32" fill="#97d655"/></svg>
            </button>
            <div className="flex flex-col items-center w-full">
              <div style={{ border: '2.5px solid #97d655', borderRadius: '12px' }} className="overflow-hidden mb-6 mx-auto" >
                <img src={achievements[activeAch].image} alt={achievements[activeAch].caption} className="w-full max-w-xs sm:w-[400px] h-[200px] sm:h-[300px] object-cover" />
              </div>
              <div className="text-2xl font-semibold text-center" style={{ color: '#97d655' }}>{achievements[activeAch].caption}</div>
            </div>
            <button onClick={nextAch} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 40 40"><polygon points="12,8 26,20 12,32" fill="#97d655"/></svg>
            </button>
          </div>
        </div>
      </section>
      {/* Events Carousel */}
      <section className="flex flex-col items-center py-10">
        <div className="w-[75%] max-w-5xl mx-auto mb-2">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#163447', textAlign: 'left' }}>EVENTS</h2>
        </div>
        <div
          style={{ background: '#163447', border: '2.5px solid #97d655', borderRadius: '12px' }}
          className="w-[75%] max-w-5xl mx-auto px-2 sm:px-4 p-4 sm:p-8 shadow-lg flex flex-col items-center relative min-h-[320px] sm:min-h-[600px] max-h-[700px] justify-center"
          onTouchStart={handleEventTouchStart}
          onTouchEnd={handleEventTouchEnd}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <button onClick={prevEvent} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 40 40"><polygon points="28,8 14,20 28,32" fill="#97d655"/></svg>
            </button>
            <div className="flex flex-col items-center w-full">
              <div style={{ border: '2.5px solid #97d655', borderRadius: '12px' }} className="overflow-hidden mb-6 mx-auto" >
                <img src={events[activeEvent].image} alt={events[activeEvent].caption} className="w-full max-w-xs sm:w-[400px] h-[200px] sm:h-[300px] object-cover" />
              </div>
              <div className="text-2xl font-semibold text-center" style={{ color: '#97d655' }}>{events[activeEvent].caption}</div>
            </div>
            <button onClick={nextEvent} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 40 40"><polygon points="12,8 26,20 12,32" fill="#97d655"/></svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
