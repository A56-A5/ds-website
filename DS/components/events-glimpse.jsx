import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"

export function EventsGlimpse() {
  const events = [
    {
      title: "Data Science Workshop Series",
      date: "June 20-22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      images: [
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=200&width=400&text=Workshop+Setup",
        "/placeholder.svg?height=200&width=400&text=Hands-on+Session",
        "/placeholder.svg?height=200&width=400&text=Group+Discussion",
      ],
      category: "Workshop",
      featured: true,
    },
    {
      title: "Industry Expert Talk: AI in Finance",
      date: "June 25, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall",
      images: [
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=200&width=400&text=Expert+Speaker",
        "/placeholder.svg?height=200&width=400&text=Audience+Q&A",
      ],
      category: "Guest Lecture",
    },
    {
      title: "Annual Data Science Symposium",
      date: "July 10-12, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      images: [
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=200&width=400&text=Opening+Ceremony",
        "/placeholder.svg?height=200&width=400&text=Research+Presentations",
        "/placeholder.svg?height=200&width=400&text=Networking+Session",
      ],
      category: "Conference",
      featured: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Upcoming Events</h2>
          <Button
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
          >
            View All Events
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <ImageCarousel images={event.images} alt={event.title} className="h-full" />
                {event.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-cyan-600 hover:bg-cyan-700">Featured</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <Badge
                  variant="outline"
                  className="mb-2 border-slate-300 text-slate-600 hover:bg-slate-100 font-normal"
                >
                  {event.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-cyan-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="ghost" className="text-cyan-600 hover:text-cyan-700 p-0 h-auto font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
