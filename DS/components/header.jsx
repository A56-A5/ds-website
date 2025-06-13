import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
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

          {/* Navigation */}
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

            {/* Previous Batches Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-cyan-300 transition-colors font-medium focus:outline-none">
                PREVIOUS BATCHES <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/previous-batches/alumni" className="w-full">
                    Alumni Directory
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/previous-batches/projects" className="w-full">
                    Batch-wise Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/previous-batches/placements" className="w-full">
                    Placements History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                  <Link href="/previous-batches/testimonials" className="w-full">
                    Testimonials
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

          {/* Search */}
          <Button variant="ghost" size="icon" className="text-white hover:text-cyan-300">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
