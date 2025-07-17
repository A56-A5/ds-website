import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function DepartmentAwardsPage() {
  const awards = [
    {
      id: 1,
      title: "Best Emerging Department Award",
      organization: "Education Excellence Awards",
      description:
        "Recognized as the Best Emerging Department at the Education Excellence Awards 2024 for innovative teaching methodologies and industry-relevant curriculum.",
      date: "May 2024",
      category: "Department Excellence",
      icon: <Trophy className="h-12 w-12 text-amber-500" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Award+Ceremony",
        "/placeholder.svg?height=300&width=300&text=Department+Team",
        "/placeholder.svg?height=300&width=300&text=Trophy+Display",
      ],
    },
    {
      id: 2,
      title: "Outstanding Research Department",
      organization: "National Research Foundation",
      description:
        "Awarded the Outstanding Research Department recognition by the National Research Foundation for significant contributions to data science research and publications.",
      date: "March 2024",
      category: "Research Excellence",
      icon: <Award className="h-12 w-12 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Research+Lab",
        "/placeholder.svg?height=300&width=300&text=Publication",
        "/placeholder.svg?height=300&width=300&text=Data+Analysis",
      ],
    },
    {
      id: 3,
      title: "Best Industry Collaboration Award",
      organization: "Industry-Academia Conclave",
      description:
        "Received the Best Industry Collaboration Award at the Industry-Academia Conclave 2024 for establishing strong partnerships with leading technology companies and startups.",
      date: "February 2024",
      category: "Industry Connect",
      icon: <Medal className="h-12 w-12 text-blue-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Industry+Partners",
        "/placeholder.svg?height=300&width=300&text=Joint+Projects",
        "/placeholder.svg?height=300&width=300&text=Networking+Event",
      ],
    },
    {
      id: 4,
      title: "Innovation Hub Recognition",
      organization: "State Innovation Council",
      description:
        "Recognized as an Innovation Hub by the State Innovation Council for fostering a culture of innovation and entrepreneurship among students.",
      date: "December 2023",
      category: "Innovation",
      icon: <Star className="h-12 w-12 text-purple-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Innovation+Lab",
        "/placeholder.svg?height=300&width=300&text=Student+Projects",
        "/placeholder.svg?height=300&width=300&text=Entrepreneurship+Workshop",
      ],
    },
    {
      id: 5,
      title: "Academic Excellence Award",
      organization: "Higher Education Department",
      description:
        "Awarded the Academic Excellence Award by the Higher Education Department for maintaining high academic standards and achieving exceptional student outcomes.",
      date: "October 2023",
      category: "Academic Excellence",
      icon: <Award className="h-12 w-12 text-green-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Academic+Results",
        "/placeholder.svg?height=300&width=300&text=Student+Achievements",
        "/placeholder.svg?height=300&width=300&text=Faculty+Excellence",
      ],
    },
  ]

  // Category colors
  const categoryColors = {
    "Department Excellence": "bg-amber-100 text-amber-800",
    "Research Excellence": "bg-cyan-100 text-cyan-800",
    "Industry Connect": "bg-blue-100 text-blue-800",
    Innovation: "bg-purple-100 text-purple-800",
    "Academic Excellence": "bg-green-100 text-green-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Department Awards</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Recognitions and accolades received by the Department of Data Science
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card
              key={award.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <ImageCarousel images={award.images} alt={award.title} className="h-full" />
                <div className="absolute top-3 right-3">
                  <Badge className={categoryColors[award.category] || "bg-slate-100 text-slate-800"}>
                    {award.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">{award.icon}</div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 text-center line-clamp-2">{award.title}</h3>
                <p className="text-cyan-600 font-medium mb-4 text-center">Awarded by: {award.organization}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{award.description}</p>

                <div className="flex justify-center items-center">
                  <span className="text-xs text-slate-500">{award.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Rankings Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Department Rankings</h2>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">National Rankings</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Top Emerging Data Science Department</p>
                        <p className="text-sm text-slate-600">National Education Survey 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Best Industry Collaboration</p>
                        <p className="text-sm text-slate-600">Tech Education Rankings 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Research Output in Data Science</p>
                        <p className="text-sm text-slate-600">Academic Research Index 2023</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">State Rankings</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Best Data Science Department</p>
                        <p className="text-sm text-slate-600">State Higher Education Survey 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Student Placement Rate</p>
                        <p className="text-sm text-slate-600">State Employment Index 2023</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Innovation & Entrepreneurship</p>
                        <p className="text-sm text-slate-600">State Innovation Council Rankings 2023</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
