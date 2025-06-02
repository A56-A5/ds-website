'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    <nav className="bg-purple-900 text-white px-6 py-4 flex justify-between items-center transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn fixed w-full top-0 z-[1000]">
      <div className="flex items-center space-x-4">
        <Image
          src="/ds_logo.png"
          alt="Department of Data Science Logo"
          width={50}
          height={50}
          className="rounded-full bg-white"
        />
        <div className="text-2xl font-bold">Department of Data Science</div>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        
        {Object.entries(menuItems).map(([title, items]) => (
          <div
            key={title}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:underline">
              {title}
            </button>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-purple-800 ring-1 ring-black ring-opacity-5 z-[1001] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-purple-700 whitespace-nowrap"
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 