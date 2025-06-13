"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventCalendar } from "@/components/event-calendar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState([])

  // Sample events data - in a real app, this would come from a database
  const events = [
    {
      id: 1,
      title: "Data Science Workshop Series",
      date: new Date(2024, 5, 20), // June 20, 2024
      endDate: new Date(2024, 5, 22), // June 22, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description:
        "A three-day workshop covering advanced topics in data science including machine learning, deep learning, and natural language processing.",
      category: "Workshop",
      organizer: "Department of Data Science",
      featured: true,
    },
    {
      id: 2,
      title: "Industry Expert Talk: AI in Finance",
      date: new Date(2024, 5, 25), // June 25, 2024
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall",
      description: "Guest lecture by industry experts on the applications of AI in the financial sector.",
      category: "Guest Lecture",
      organizer: "Department of Data Science",
    },
    {
      id: 3,
      title: "Annual Data Science Symposium",
      date: new Date(2024, 6, 10), // July 10, 2024
      endDate: new Date(2024, 6, 12), // July 12, 2024
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      description:
        "Annual symposium featuring research presentations, panel discussions, and networking opportunities.",
      category: "Conference",
      organizer: "Department of Data Science",
      featured: true,
    },
    {
      id: 4,
      title: "Hackathon: Data for Good",
      date: new Date(2024, 7, 5), // August 5, 2024
      endDate: new Date(2024, 7, 6), // August 6, 2024
      time: "9:00 AM - 9:00 PM",
      location: "Innovation Hub",
      description: "A 36-hour hackathon focused on developing data-driven solutions for social good.",
      category: "Hackathon",
      organizer: "Department of Data Science & IEEE Student Chapter",
    },
    {
      id: 5,
      title: "Freshers' Orientation",
      date: new Date(2024, 8, 1), // September 1, 2024
      time: "10:00 AM - 1:00 PM",
      location: "Main Auditorium",
      description: "Orientation program for new students joining the Data Science program.",
      category: "Orientation",
      organizer: "Department of Data Science",
    },
    {
      id: 6,
      title: "Research Methodology Workshop",
      date: new Date(2024, 8, 15), // September 15, 2024
      time: "2:00 PM - 5:00 PM",
      location: "Research Lab",
      description: "Workshop on research methodologies and paper writing for data science research.",
      category: "Workshop",
      organizer: "Department of Data Science",
    },
    {
      id: 7,
      title: "Alumni Meet",
      date: new Date(2024, 9, 10), // October 10, 2024
      time: "5:00 PM - 8:00 PM",
      location: "College Grounds",
      description: "Annual alumni meet for networking and knowledge sharing.",
      category: "Networking",
      organizer: "Department of Data Science & Alumni Association",
    },
    {
      id: 8,
      title: "Data Visualization Contest",
      date: new Date(2024, 10, 5), // November 5, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Contest for students to showcase their data visualization skills.",
      category: "Contest",
      organizer: "Department of Data Science",
    },
    {
      id: 9,
      title: "Industry Visit: Tech Park",
      date: new Date(2024, 10, 20), // November 20, 2024
      time: "9:00 AM - 3:00 PM",
      location: "InfoPark",
      description: "Visit to leading tech companies to understand industry practices in data science.",
      category: "Industry Visit",
      organizer: "Department of Data Science",
    },
    {
      id: 10,
      title: "End of Year Celebration",
      date: new Date(2024, 11, 20), // December 20, 2024
      time: "4:00 PM - 8:00 PM",
      location: "College Grounds",
      description: "Celebration marking the end of the academic year with cultural performances and awards.",
      category: "Celebration",
      organizer: "Department of Data Science",
    },
    {
      id: 11,
      title: "Machine Learning Workshop",
      date: new Date(2025, 0, 15), // January 15, 2025
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on advanced machine learning techniques.",
      category: "Workshop",
      organizer: "Department of Data Science",
    },
    {
      id: 12,
      title: "National Conference on Data Science",
      date: new Date(2025, 1, 10), // February 10, 2025
      endDate: new Date(2025, 1, 12), // February 12, 2025
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      description: "National conference featuring research presentations and keynote speeches.",
      category: "Conference",
      organizer: "Department of Data Science",
      featured: true,
    },
  ]

  useEffect(() => {
    setFilteredEvents(events)
  }, [])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredEvents(events)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query),
    )
    setFilteredEvents(filtered)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events Timeline</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our upcoming and past events in an interactive calendar view
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search events by title, category, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-slate-300"
            />
            <Button onClick={handleSearch} className="bg-cyan-600 hover:bg-cyan-700">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Calendar */}
        <EventCalendar events={filteredEvents} />
      </div>

      <Footer />
    </div>
  )
}
