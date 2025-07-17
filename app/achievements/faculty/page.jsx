import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Globe, Users, FileText, Bookmark } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function FacultyAchievementsPage() {
  const achievements = [
    {
      id: 1,
      faculty: "Dr. Sarah Johnson",
      position: "Head of Department",
      title: "Research Grant for AI in Healthcare",
      description:
        "Received a prestigious research grant of ₹50 Lakhs from the Department of Science and Technology for the project 'AI-Driven Diagnostic Tools for Rural Healthcare'.",
      date: "May 2024",
      category: "Research Grant",
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Grant+Announcement",
        "/placeholder.svg?height=300&width=300&text=Research+Lab",
        "/placeholder.svg?height=300&width=300&text=Project+Team",
      ],
    },
    {
      id: 2,
      faculty: "Dr. Michael Chen",
      position: "Associate Professor",
      title: "Best Paper Award at International Conference on Big Data",
      description:
        "Received the Best Paper Award for the research paper 'Scalable Algorithms for Processing Heterogeneous Big Data' at the International Conference on Big Data Analytics 2024.",
      date: "April 2024",
      category: "Award",
      icon: <BookOpen className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Conference+Hall",
        "/placeholder.svg?height=300&width=300&text=Award+Ceremony",
        "/placeholder.svg?height=300&width=300&text=Paper+Presentation",
      ],
    },
    {
      id: 3,
      faculty: "Dr. Priya Sharma",
      position: "Assistant Professor",
      title: "Patent Filed for NLP Algorithm",
      description:
        "Filed a patent for a novel Natural Language Processing algorithm that improves multilingual sentiment analysis accuracy by 35%.",
      date: "March 2024",
      category: "Patent",
      icon: <FileText className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Patent+Document",
        "/placeholder.svg?height=300&width=300&text=Algorithm+Diagram",
        "/placeholder.svg?height=300&width=300&text=NLP+Analysis",
      ],
    },
    {
      id: 4,
      faculty: "Dr. James Wilson",
      position: "Professor",
      title: "Visiting Professor at MIT",
      description:
        "Invited as a Visiting Professor at Massachusetts Institute of Technology for a semester to collaborate on advanced computer vision research.",
      date: "February 2024",
      category: "Recognition",
      icon: <Globe className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=MIT+Campus",
        "/placeholder.svg?height=300&width=300&text=Research+Collaboration",
        "/placeholder.svg?height=300&width=300&text=Lecture+Hall",
      ],
    },
    {
      id: 5,
      faculty: "Dr. Sarah Johnson",
      position: "Head of Department",
      title: "Editorial Board Member of IEEE Transactions on Data Science",
      description:
        "Appointed as an Editorial Board Member of the prestigious IEEE Transactions on Data Science journal.",
      date: "January 2024",
      category: "Recognition",
      icon: <Bookmark className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Journal+Cover",
        "/placeholder.svg?height=300&width=300&text=Editorial+Meeting",
        "/placeholder.svg?height=300&width=300&text=Data+Science",
      ],
    },
    {
      id: 6,
      faculty: "Dr. Michael Chen",
      position: "Associate Professor",
      title: "Industry Collaboration with Google",
      description:
        "Established a research collaboration with Google AI for developing advanced machine learning models for resource-constrained devices.",
      date: "December 2023",
      category: "Collaboration",
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Google+AI",
        "/placeholder.svg?height=300&width=300&text=Research+Team",
        "/placeholder.svg?height=300&width=300&text=Machine+Learning",
      ],
    },
    {
      id: 7,
      faculty: "Dr. Priya Sharma",
      position: "Assistant Professor",
      title: "Young Scientist Award",
      description:
        "Received the Young Scientist Award from the Indian Association for Artificial Intelligence for contributions to NLP research.",
      date: "November 2023",
      category: "Award",
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Award+Ceremony",
        "/placeholder.svg?height=300&width=300&text=AI+Conference",
        "/placeholder.svg?height=300&width=300&text=NLP+Research",
      ],
    },
    {
      id: 8,
      faculty: "Dr. James Wilson",
      position: "Professor",
      title: "Highly Cited Researcher",
      description:
        "Recognized as a Highly Cited Researcher by Clarivate Analytics, placing in the top 1% of researchers in the field of Computer Vision.",
      date: "October 2023",
      category: "Recognition",
      icon: <BookOpen className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Research+Paper",
        "/placeholder.svg?height=300&width=300&text=Computer+Vision",
        "/placeholder.svg?height=300&width=300&text=Clarivate+Analytics",
      ],
    },
  ]

  // Category colors
  const categoryColors = {
    "Research Grant": "bg-cyan-100 text-cyan-800",
    Award: "bg-amber-100 text-amber-800",
    Patent: "bg-green-100 text-green-800",
    Recognition: "bg-blue-100 text-blue-800",
    Collaboration: "bg-purple-100 text-purple-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Faculty Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Celebrating the accomplishments and recognition of our distinguished faculty members
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <ImageCarousel images={achievement.images} alt={achievement.faculty} className="h-full" />
                <div className="absolute top-3 right-3">
                  <Badge className={categoryColors[achievement.category] || "bg-slate-100 text-slate-800"}>
                    {achievement.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-slate-800">{achievement.faculty}</h3>
                    <p className="text-sm text-cyan-600 font-medium">{achievement.position}</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">{achievement.title}</h4>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{achievement.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">{achievement.date}</span>
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
