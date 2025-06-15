"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventCalendar } from "@/components/event-calendar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X, Calendar, Clock, MapPin, Users } from "lucide-react"

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)

  // Expanded events data with more events across different months and years
  const events = [
    // June 2024
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
      image: "/placeholder.svg?height=200&width=400",
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
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Faculty Development Program",
      date: new Date(2024, 5, 15), // June 15, 2024
      endDate: new Date(2024, 5, 16), // June 16, 2024
      time: "9:00 AM - 5:00 PM",
      location: "Conference Room",
      description: "Two-day faculty development program on advanced teaching methodologies for data science courses.",
      category: "Training",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Python Programming Contest",
      date: new Date(2024, 5, 10), // June 10, 2024
      time: "10:00 AM - 1:00 PM",
      location: "Computer Lab",
      description: "Coding competition for students to showcase their Python programming skills.",
      category: "Contest",
      organizer: "Department of Data Science & Programming Club",
      image: "/placeholder.svg?height=200&width=400",
    },

    // July 2024
    {
      id: 5,
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
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Research Methodology Workshop",
      date: new Date(2024, 6, 18), // July 18, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Seminar Hall",
      description: "Workshop on research methodologies and paper writing for data science research.",
      category: "Workshop",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 7,
      title: "Industry Visit: Google Office",
      date: new Date(2024, 6, 25), // July 25, 2024
      time: "9:00 AM - 3:00 PM",
      location: "Google Office, Bangalore",
      description: "Educational visit to Google's Bangalore office to understand industry practices in data science.",
      category: "Industry Visit",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },

    // August 2024
    {
      id: 8,
      title: "Hackathon: Data for Good",
      date: new Date(2024, 7, 5), // August 5, 2024
      endDate: new Date(2024, 7, 6), // August 6, 2024
      time: "9:00 AM - 9:00 PM",
      location: "Innovation Hub",
      description: "A 36-hour hackathon focused on developing data-driven solutions for social good.",
      category: "Hackathon",
      organizer: "Department of Data Science & IEEE Student Chapter",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 9,
      title: "Alumni Talk Series",
      date: new Date(2024, 7, 15), // August 15, 2024
      time: "3:00 PM - 5:00 PM",
      location: "Main Auditorium",
      description:
        "Interactive session with alumni working in leading tech companies sharing their industry experiences.",
      category: "Guest Lecture",
      organizer: "Department of Data Science & Alumni Association",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 10,
      title: "Data Visualization Workshop",
      date: new Date(2024, 7, 22), // August 22, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on data visualization techniques using Tableau and Power BI.",
      category: "Workshop",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },

    // September 2024
    {
      id: 11,
      title: "Freshers' Orientation",
      date: new Date(2024, 8, 1), // September 1, 2024
      time: "10:00 AM - 1:00 PM",
      location: "Main Auditorium",
      description: "Orientation program for new students joining the Data Science program.",
      category: "Orientation",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 12,
      title: "Research Methodology Workshop",
      date: new Date(2024, 8, 15), // September 15, 2024
      time: "2:00 PM - 5:00 PM",
      location: "Research Lab",
      description: "Workshop on research methodologies and paper writing for data science research.",
      category: "Workshop",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 13,
      title: "Parent-Teacher Meeting",
      date: new Date(2024, 8, 20), // September 20, 2024
      time: "10:00 AM - 1:00 PM",
      location: "Department Block",
      description: "Meeting with parents to discuss student progress and department initiatives.",
      category: "Meeting",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },

    // October 2024
    {
      id: 14,
      title: "Alumni Meet",
      date: new Date(2024, 9, 10), // October 10, 2024
      time: "5:00 PM - 8:00 PM",
      location: "College Grounds",
      description: "Annual alumni meet for networking and knowledge sharing.",
      category: "Networking",
      organizer: "Department of Data Science & Alumni Association",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 15,
      title: "Tech Fest: DataFusion 2024",
      date: new Date(2024, 9, 25), // October 25, 2024
      endDate: new Date(2024, 9, 27), // October 27, 2024
      time: "9:00 AM - 6:00 PM",
      location: "College Campus",
      description:
        "Annual technical festival featuring competitions, workshops, and talks related to data science and AI.",
      category: "Festival",
      organizer: "Department of Data Science & Student Council",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },

    // November 2024
    {
      id: 16,
      title: "Data Visualization Contest",
      date: new Date(2024, 10, 5), // November 5, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Contest for students to showcase their data visualization skills.",
      category: "Contest",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 17,
      title: "Industry Visit: Tech Park",
      date: new Date(2024, 10, 20), // November 20, 2024
      time: "9:00 AM - 3:00 PM",
      location: "InfoPark",
      description: "Visit to leading tech companies to understand industry practices in data science.",
      category: "Industry Visit",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 18,
      title: "Guest Lecture: Ethics in AI",
      date: new Date(2024, 10, 15), // November 15, 2024
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall",
      description: "Guest lecture on ethical considerations in AI development and deployment.",
      category: "Guest Lecture",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },

    // December 2024
    {
      id: 19,
      title: "End of Year Celebration",
      date: new Date(2024, 11, 20), // December 20, 2024
      time: "4:00 PM - 8:00 PM",
      location: "College Grounds",
      description: "Celebration marking the end of the academic year with cultural performances and awards.",
      category: "Celebration",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 20,
      title: "Winter Coding Camp",
      date: new Date(2024, 11, 10), // December 10, 2024
      endDate: new Date(2024, 11, 15), // December 15, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Intensive coding camp for students during the winter break.",
      category: "Training",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },

    // January 2025
    {
      id: 21,
      title: "Machine Learning Workshop",
      date: new Date(2025, 0, 15), // January 15, 2025
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on advanced machine learning techniques.",
      category: "Workshop",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 22,
      title: "Industry Connect Program",
      date: new Date(2025, 0, 25), // January 25, 2025
      time: "11:00 AM - 3:00 PM",
      location: "Main Auditorium",
      description: "Networking event with industry representatives for internship and placement opportunities.",
      category: "Networking",
      organizer: "Department of Data Science & Placement Cell",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },

    // February 2025
    {
      id: 23,
      title: "National Conference on Data Science",
      date: new Date(2025, 1, 10), // February 10, 2025
      endDate: new Date(2025, 1, 12), // February 12, 2025
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      description: "National conference featuring research presentations and keynote speeches.",
      category: "Conference",
      organizer: "Department of Data Science",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 24,
      title: "Project Exhibition",
      date: new Date(2025, 1, 20), // February 20, 2025
      time: "10:00 AM - 4:00 PM",
      location: "Exhibition Hall",
      description: "Exhibition of student projects in data science and AI.",
      category: "Exhibition",
      organizer: "Department of Data Science",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // Initialize filtered events with all events
  useEffect(() => {
    setFilteredEvents(events)
  }, [])

  // Handle search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredEvents(events)
      setSearchPerformed(false)
      setShowSearchResults(false)
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
    setSearchPerformed(true)
    setShowSearchResults(true)
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
    setFilteredEvents(events)
    setSearchPerformed(false)
    setShowSearchResults(false)
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // Category colors for badges
  const categoryColors = {
    Workshop: "bg-blue-100 text-blue-800",
    "Guest Lecture": "bg-green-100 text-green-800",
    Training: "bg-purple-100 text-purple-800",
    Contest: "bg-amber-100 text-amber-800",
    Conference: "bg-cyan-100 text-cyan-800",
    "Industry Visit": "bg-indigo-100 text-indigo-800",
    Hackathon: "bg-red-100 text-red-800",
    Orientation: "bg-teal-100 text-teal-800",
    Meeting: "bg-gray-100 text-gray-800",
    Networking: "bg-pink-100 text-pink-800",
    Festival: "bg-orange-100 text-orange-800",
    Celebration: "bg-rose-100 text-rose-800",
    Exhibition: "bg-emerald-100 text-emerald-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 animate-slide-up">Events Timeline</h1>
          <p className="text-xl text-gray-300 max-w-3xl animate-slide-up animation-delay-200">
            Explore our upcoming and past events in an interactive calendar view
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-400">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search events by title, category, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-slate-300 pr-10 transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              onClick={handleSearch}
              className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 hover:scale-105"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Search Results Summary */}
          {searchPerformed && (
            <div className="mt-4 flex items-center justify-between animate-fade-in">
              <div className="text-sm text-slate-600">
                Found {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"} matching "
                <span className="font-medium">{searchQuery}</span>"
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>

        {/* Show Search Results as Cards when searching */}
        {showSearchResults && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Search Results</h2>
            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {event.featured && (
                        <Badge className="absolute top-3 right-3 bg-cyan-600 hover:bg-cyan-700 animate-pulse">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={categoryColors[event.category] || "bg-gray-100 text-gray-800"}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-slate-800 line-clamp-2">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-slate-600">
                          <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                          <span className="text-sm">
                            {event.date.toLocaleDateString("en-US", {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                            {event.endDate && (
                              <span>
                                {" - "}
                                {event.endDate.toLocaleDateString("en-US", {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 mr-2 text-cyan-600" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-4 w-4 mr-2 text-cyan-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Users className="h-4 w-4 mr-2 text-cyan-600" />
                          <span className="text-sm">{event.organizer}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">{event.description}</p>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 hover:scale-105">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No events found</h3>
                <p className="text-slate-600">Try adjusting your search terms or browse all events below.</p>
              </div>
            )}
          </div>
        )}

        {/* Calendar */}
        <div className="animate-slide-up animation-delay-600">
          <EventCalendar events={filteredEvents} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
