"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <span className="text-xl font-bold">DS-CCE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-300 transition-colors font-medium">
              HOME
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                ABOUT <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/about" className="w-full">
                    About Department
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/about/faculty-staff" className="w-full">
                    Faculty & Staff
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/about/infrastructure" className="w-full">
                    Infrastructure
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/about/vision-mission" className="w-full">
                    Vision & Mission
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Academics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                ACADEMICS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/courses" className="w-full">
                    Courses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/curriculum" className="w-full">
                    Curriculum
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/calendar" className="w-full">
                    Academic Calendar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/timetable" className="w-full">
                    Timetable
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/student-guide" className="w-full">
                    Student Guide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/research" className="w-full">
                    Research
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/academics/projects" className="w-full">
                    Student Projects
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Achievements Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                ACHIEVEMENTS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/achievements/faculty" className="w-full">
                    Faculty Achievements
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/achievements/students" className="w-full">
                    Student Achievements
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/achievements/awards" className="w-full">
                    Department Awards
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Events Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                EVENTS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events" className="w-full">
                    Events Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/timeline" className="w-full">
                    Timeline
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/workshops" className="w-full">
                    Workshops & Seminars
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/conferences" className="w-full">
                    Conferences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/hackathons" className="w-full">
                    Hackathons
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/webinars" className="w-full">
                    Webinars
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/events/annual-day" className="w-full">
                    Annual Day / Fests
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                CONTACT <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/contact/location" className="w-full">
                    Location Map
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/contact/inquiry" className="w-full">
                    Inquiry Form
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/contact/office-hours" className="w-full">
                    Office Hours
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation - move to right edge */}
          <div className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="text-white hover:text-cyan-300" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div
            className="fixed inset-y-0 right-0 w-[280px] bg-slate-800 shadow-lg p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DS</span>
                </div>
                <span className="text-white font-bold">DS-CCE</span>
              </div>
              <Button variant="ghost" size="icon" className="text-white" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="space-y-6">
              <div>
                <Link
                  href="/"
                  className="block text-white hover:text-cyan-300 transition-colors font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  HOME
                </Link>
              </div>

              <MobileNavSection title="ABOUT">
                <Link
                  href="/about"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  About Department
                </Link>
                <Link
                  href="/about/faculty-staff"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Faculty & Staff
                </Link>
                <Link
                  href="/about/infrastructure"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Infrastructure
                </Link>
                <Link
                  href="/about/vision-mission"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Vision & Mission
                </Link>
              </MobileNavSection>

              <MobileNavSection title="ACADEMICS">
                <Link
                  href="/academics/courses"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Courses
                </Link>
                <Link
                  href="/academics/curriculum"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Curriculum
                </Link>
                <Link
                  href="/academics/calendar"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Academic Calendar
                </Link>
                <Link
                  href="/academics/timetable"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Timetable
                </Link>
                <Link
                  href="/academics/student-guide"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Student Guide
                </Link>
                <Link
                  href="/academics/research"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Research
                </Link>
                <Link
                  href="/academics/projects"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Student Projects
                </Link>
              </MobileNavSection>

              <MobileNavSection title="PREVIOUS BATCHES">
                <Link
                  href="/previous-batches/alumni"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Alumni Directory
                </Link>
                <Link
                  href="/previous-batches/projects"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Batch-wise Projects
                </Link>
                <Link
                  href="/previous-batches/placements"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Placements History
                </Link>
                <Link
                  href="/previous-batches/testimonials"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Testimonials
                </Link>
              </MobileNavSection>

              <MobileNavSection title="ACHIEVEMENTS">
                <Link
                  href="/achievements/faculty"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Faculty Achievements
                </Link>
                <Link
                  href="/achievements/students"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Student Achievements
                </Link>
                <Link
                  href="/achievements/awards"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Department Awards
                </Link>
              </MobileNavSection>

              <MobileNavSection title="EVENTS">
                <Link
                  href="/events"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Events Home
                </Link>
                <Link
                  href="/events/timeline"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Timeline
                </Link>
                <Link
                  href="/events/workshops"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Workshops & Seminars
                </Link>
                <Link
                  href="/events/conferences"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Conferences
                </Link>
                <Link
                  href="/events/hackathons"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Hackathons
                </Link>
                <Link
                  href="/events/webinars"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Webinars
                </Link>
                <Link
                  href="/events/annual-day"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Annual Day / Fests
                </Link>
              </MobileNavSection>

              <MobileNavSection title="CONTACT">
                <Link
                  href="/contact/location"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Location Map
                </Link>
                <Link
                  href="/contact/inquiry"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Inquiry Form
                </Link>
                <Link
                  href="/contact/office-hours"
                  className="block text-gray-300 hover:text-cyan-300 transition-colors py-2 pl-4"
                  onClick={toggleMobileMenu}
                >
                  Office Hours
                </Link>
              </MobileNavSection>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

// Mobile Navigation Section Component
function MobileNavSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-700 pb-2">
      <button
        className="flex items-center justify-between w-full text-white hover:text-cyan-300 transition-colors font-medium py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="mt-2 space-y-1">{children}</div>}
    </div>
  )
}
