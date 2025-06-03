'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    'About': [
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Faculty & Staff', href: '/about/faculty-staff' },
      { name: 'Infrastructure', href: '/about/infrastructure' }
    ],
    'Academics': [
      { name: 'Academic Calendar', href: '/academics/calendar' },
      { name: 'Curriculum / Syllabus', href: '/academics/curriculum' },
      { name: 'Courses Offered', href: '/academics/courses' },
      { name: 'Time Table / Class Schedule', href: '/academics/timetable' },
      { name: 'Student Guide', href: '/academics/student-guide' }
    ],
    'Previous Batches': [
      { name: 'Alumni Directory', href: '/previous-batches/alumni' },
      { name: 'Batch-wise Projects', href: '/previous-batches/projects' },
      { name: 'Placements History', href: '/previous-batches/placements' },
      { name: 'Testimonials', href: '/previous-batches/testimonials' }
    ],
    'Achievements': [
      { name: 'Faculty Achievements', href: '/achievements/faculty' },
      { name: 'Student Achievements', href: '/achievements/students' },
      { name: 'Department Awards', href: '/achievements/awards' }
    ],
    'Events': [
      { name: 'Timeline', href: '/events/timeline' },
      { name: 'Workshops & Seminars', href: '/events/workshops' },
      { name: 'Conferences', href: '/events/conferences' },
      { name: 'Hackathons', href: '/events/hackathons' },
      { name: 'Webinars', href: '/events/webinars' },
      { name: 'Annual Day / Fests', href: '/events/annual-day' }
    ],
    'Contact': [
      { name: 'Location Map', href: '/contact/location' },
      { name: 'Inquiry Form', href: '/contact/inquiry' },
      { name: 'Office Hours', href: '/contact/office-hours' }
    ]
  };

  return (
    <nav style={{ background: '#97d655' }} className="px-4 sm:px-6 py-4 flex justify-between items-center fixed w-full top-0 z-[1000]">
      <div className="flex items-center space-x-4">
        <Image
          src="/ds_logo.png"
          alt="Department of Data Science Logo"
          width={50}
          height={50}
          className="rounded-full bg-white"
        />
        <div style={{ color: '#00293f' }} className="text-lg sm:text-2xl font-bold uppercase">Department of Data Science</div>
      </div>
      {/* Hamburger for mobile */}
      <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
        <span className={`block w-7 h-1 bg-[#00293f] mb-1 rounded transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#00293f] mb-1 rounded transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#00293f] rounded transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" style={{ color: '#00293f', textDecoration: 'none' }} className="font-bold uppercase">Home</Link>
        <div className="h-8 w-[2px] bg-[#00293f]" />
        {Object.entries(menuItems).map(([title, items], index, array) => (
          <div key={title} className="flex items-center">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown(title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button style={{ color: '#00293f', textDecoration: 'none' }} className="font-bold uppercase">
                {title}
              </button>
              <div style={{ background: '#aef54e', border: '1.5px solid #00293f', borderRadius: '12px', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)' }} className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 z-[1001] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{ color: '#00293f', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none' }}
                      className="block px-4 py-2 text-sm hover:bg-[#97b0c0] hover:text-white whitespace-nowrap transition-colors rounded-md"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {index < array.length - 1 && <div className="h-8 w-[2px] bg-[#00293f] ml-4" />}
          </div>
        ))}
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#97d655] shadow-lg border-t border-[#00293f] z-[1002] animate-fadeInUp">
          <div className="flex flex-col py-4 px-4 space-y-2">
            <Link href="/" style={{ color: '#00293f', textDecoration: 'none' }} className="font-bold uppercase py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            {Object.entries(menuItems).map(([title, items]) => (
              <div key={title} className="flex flex-col">
                <button style={{ color: '#00293f', textDecoration: 'none' }} className="font-bold uppercase text-left py-2" onClick={() => setActiveDropdown(activeDropdown === title ? null : title)}>
                  {title}
                </button>
                {/* Dropdown for mobile */}
                {activeDropdown === title && (
                  <div className="flex flex-col pl-4 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        style={{ color: '#00293f', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none' }}
                        className="py-1 text-sm hover:bg-[#97b0c0] hover:text-white rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 