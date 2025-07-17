import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export default function EventsHomePage() {
  const featuredEvents = [
    {
      id: 1,
      title: "Data Science Workshop Series",
      date: "June 20-22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description:
        "A three-day workshop covering advanced topics in data science including machine learning, deep learning, and natural language processing.",
      category: "Workshop",
      organizer: "Department of Data Science",
      featured: true,
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Workshop+Day+1",
        "/placeholder.svg?height=300&width=600&text=Workshop+Day+2",
        "/placeholder.svg?height=300&width=600&text=Workshop+Day+3",
      ],
    },
    {
      id: 2,
      title: "Annual Data Science Symposium",
      date: "July 10-12, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      description:
        "Annual symposium featuring research presentations, panel discussions, and networking opportunities.",
      category: "Conference",
      organizer: "Department of Data Science",
      featured: true,
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Keynote+Speaker",
        "/placeholder.svg?height=300&width=600&text=Panel+Discussion",
        "/placeholder.svg?height=300&width=600&text=Networking",
      ],
    },
    {
      id: 3,
      title: "Hackathon: Data for Good",
      date: "August 5-6, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "Innovation Hub",
      description: "A 36-hour hackathon focused on developing data-driven solutions for social good.",
      category: "Hackathon",
      organizer: "Department of Data Science & IEEE Student Chapter",
      featured: true,
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Team+Formation",
        "/placeholder.svg?height=300&width=600&text=Coding+Session",
        "/placeholder.svg?height=300&width=600&text=Final+Presentations",
      ],
    },
    {
      id: 4,
      title: "Industry Expert Talk: AI in Finance",
      date: "June 25, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall",
      description: "Guest lecture by industry experts on the applications of AI in the financial sector.",
      category: "Guest Lecture",
      organizer: "Department of Data Science",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Expert+Speaker",
        "/placeholder.svg?height=300&width=600&text=Q&A+Session",
      ],
    },
    {
      id: 5,
      title: "Tech Fest: DataFusion 2024",
      date: "October 25-27, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "College Campus",
      description:
        "Annual technical festival featuring competitions, workshops, and talks related to data science and AI.",
      category: "Festival",
      organizer: "Department of Data Science & Student Council",
      featured: true,
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Opening+Ceremony",
        "/placeholder.svg?height=300&width=600&text=Competitions",
        "/placeholder.svg?height=300&width=600&text=Cultural+Events",
        "/placeholder.svg?height=300&width=600&text=Prize+Distribution",
      ],
    },
    {
      id: 6,
      title: "Alumni Meet",
      date: "October 10, 2024",
      time: "5:00 PM - 8:00 PM",
      location: "College Grounds",
      description: "Annual alumni meet for networking and knowledge sharing.",
      category: "Networking",
      organizer: "Department of Data Science & Alumni Association",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Alumni+Gathering",
        "/placeholder.svg?height=300&width=600&text=Success+Stories",
        "/placeholder.svg?height=300&width=600&text=Group+Photo",
      ],
    },
  ]

  const eventCategories = [
    {
      name: "Workshops & Seminars",
      description: "Hands-on learning sessions and expert talks",
      count: 12,
      icon: "🎓",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Conferences",
      description: "Academic conferences and symposiums",
      count: 4,
      icon: "🏛️",
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      name: "Hackathons",
      description: "Coding competitions and innovation challenges",
      count: 6,
      icon: "💻",
      color: "bg-red-100 text-red-800",
    },
    {
      name: "Webinars",
      description: "Online sessions with industry experts",
      count: 8,
      icon: "🌐",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Annual Day / Fests",
      description: "Cultural and technical festivals",
      count: 3,
      icon: "🎉",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Timeline",
      description: "Complete events calendar view",
      count: "All",
      icon: "📅",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  // Category colors for badges
  const categoryColors = {
    Workshop: "bg-blue-100 text-blue-800",
    Conference: "bg-cyan-100 text-cyan-800",
    Hackathon: "bg-red-100 text-red-800",
    "Guest Lecture": "bg-green-100 text-green-800",
    Festival: "bg-orange-100 text-orange-800",
    Networking: "bg-purple-100 text-purple-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover upcoming events, workshops, conferences, and activities at the Department of Data Science
          </p>
        </div>
      </div>

      {/* Event Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Event Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{category.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                <Badge className={category.color}>
                  {typeof category.count === "number" ? `${category.count} Events` : category.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Events */}
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <ImageCarousel images={event.images} alt={event.title} className="h-full" />
                <div className="absolute top-3 right-3">
                  <Badge className={categoryColors[event.category] || "bg-slate-100 text-slate-800"}>
                    {event.category}
                  </Badge>
                </div>
                {event.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-cyan-600 hover:bg-cyan-700">Featured</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                    <span className="text-sm">{event.date}</span>
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

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{event.description}</p>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
