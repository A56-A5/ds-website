import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Data Science Workshop Series",
      date: "June 20-22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description:
        "A three-day workshop covering advanced topics in data science including machine learning, deep learning, and natural language processing.",
      image: "/placeholder.svg?height=300&width=600",
      capacity: 100,
      registrationOpen: true,
      featured: true,
    },
    {
      id: 2,
      title: "Research Methodology Workshop",
      date: "July 18, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Seminar Hall",
      description: "Workshop on research methodologies and paper writing for data science research.",
      image: "/placeholder.svg?height=300&width=600",
      capacity: 50,
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Data Visualization Workshop",
      date: "August 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on data visualization techniques using Tableau and Power BI.",
      image: "/placeholder.svg?height=300&width=600",
      capacity: 40,
      registrationOpen: true,
    },
    {
      id: 4,
      title: "Machine Learning Workshop",
      date: "January 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on advanced machine learning techniques.",
      image: "/placeholder.svg?height=300&width=600",
      capacity: 40,
      registrationOpen: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Workshops & Seminars</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Enhance your skills and knowledge through our specialized workshops and seminars
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                {workshop.featured && (
                  <Badge className="absolute top-3 right-3 bg-cyan-600 hover:bg-cyan-700">Featured</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-5 w-5 mr-2 text-cyan-600" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-5 w-5 mr-2 text-cyan-600" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-5 w-5 mr-2 text-cyan-600" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Users className="h-5 w-5 mr-2 text-cyan-600" />
                    <span>Capacity: {workshop.capacity} participants</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">{workshop.description}</p>

                <div className="flex justify-between items-center">
                  <Badge
                    className={
                      workshop.registrationOpen ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }
                  >
                    {workshop.registrationOpen ? "Registration Open" : "Coming Soon"}
                  </Badge>
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
