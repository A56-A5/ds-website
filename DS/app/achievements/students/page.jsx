import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Briefcase, Laptop } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function StudentAchievementsPage() {
  const achievements = [
    {
      id: 1,
      students: ["Rahul Sharma", "Priya Patel", "Arjun Singh"],
      batch: "2022-2026",
      title: "National Data Science Hackathon Winners",
      description:
        "Secured first place in the National Data Science Hackathon 2024 organized by Tech Innovators, competing against 200+ teams from across the country.",
      date: "May 2024",
      category: "Competition",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Team+Coding",
        "/placeholder.svg?height=300&width=300&text=Presentation",
        "/placeholder.svg?height=300&width=300&text=Victory+Moment",
      ],
    },
    {
      id: 2,
      students: ["Ananya Desai"],
      batch: "2021-2025",
      title: "Research Paper Published in International Journal",
      description:
        "Published a research paper titled 'Novel Approaches to Sentiment Analysis in Low-Resource Languages' in the International Journal of Data Science and Analytics.",
      date: "April 2024",
      category: "Research",
      icon: <Star className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Research+Lab",
        "/placeholder.svg?height=300&width=300&text=Journal+Cover",
      ],
    },
    {
      id: 3,
      students: ["Mohammed Ali", "Sneha Reddy"],
      batch: "2022-2026",
      title: "Microsoft Student Ambassador Selection",
      description:
        "Selected as Microsoft Student Ambassadors for their exceptional technical skills and community contributions.",
      date: "March 2024",
      category: "Recognition",
      icon: <Award className="h-8 w-8 text-blue-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Microsoft+Logo",
        "/placeholder.svg?height=300&width=300&text=Community+Event",
      ],
    },
    {
      id: 4,
      students: ["Vikram Joshi", "Neha Gupta", "Raj Malhotra", "Divya Shah"],
      batch: "2021-2025",
      title: "Smart India Hackathon Finalists",
      description:
        "Selected as finalists in the Smart India Hackathon 2024 for their project 'AgroSense' - an AI-powered solution for crop disease detection.",
      date: "February 2024",
      category: "Competition",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Hackathon+Setup",
        "/placeholder.svg?height=300&width=300&text=Project+Demo",
      ],
    },
    {
      id: 5,
      students: ["Karthik Nair"],
      batch: "2020-2024",
      title: "Google Summer of Code Selection",
      description:
        "Selected for Google Summer of Code 2024 to work on TensorFlow's model optimization for edge devices project.",
      date: "January 2024",
      category: "Recognition",
      icon: <Laptop className="h-8 w-8 text-green-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=TensorFlow+Logo",
        "/placeholder.svg?height=300&width=300&text=Coding+Session",
      ],
    },
    {
      id: 6,
      students: ["Aisha Khan", "Rohan Mehta"],
      batch: "2020-2024",
      title: "Pre-Placement Offer from Amazon",
      description:
        "Received pre-placement offers from Amazon after completing their summer internship, with a package of ₹24 LPA.",
      date: "December 2023",
      category: "Placement",
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Amazon+Office",
        "/placeholder.svg?height=300&width=300&text=Internship+Project",
      ],
    },
    {
      id: 7,
      students: ["Sanjay Kumar", "Meera Nair", "Aryan Patel"],
      batch: "2021-2025",
      title: "IEEE Student Project Award",
      description:
        "Received the IEEE Student Project Award for their project 'DeepSleep' - an AI-based sleep monitoring and analysis system.",
      date: "November 2023",
      category: "Award",
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Project+Setup",
        "/placeholder.svg?height=300&width=300&text=Award+Ceremony",
      ],
    },
    {
      id: 8,
      students: ["Tanya Sharma"],
      batch: "2022-2026",
      title: "Women in Tech Scholarship",
      description:
        "Awarded the prestigious Women in Tech Scholarship by Google for academic excellence and contributions to promoting gender diversity in technology.",
      date: "October 2023",
      category: "Scholarship",
      icon: <Star className="h-8 w-8 text-pink-600" />,
      images: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300&text=Google+Logo",
        "/placeholder.svg?height=300&width=300&text=Scholarship+Event",
      ],
    },
  ]

  // Category colors
  const categoryColors = {
    Competition: "bg-amber-100 text-amber-800",
    Research: "bg-cyan-100 text-cyan-800",
    Recognition: "bg-blue-100 text-blue-800",
    Award: "bg-green-100 text-green-800",
    Placement: "bg-purple-100 text-purple-800",
    Scholarship: "bg-pink-100 text-pink-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Student Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Celebrating the outstanding accomplishments of our talented students
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
                <ImageCarousel images={achievement.images} alt={achievement.title} className="h-full" />
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
                    <div className="flex items-center">
                      {achievement.students.length > 1 ? (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-slate-600" />
                          <span className="font-semibold text-slate-800">{achievement.students.length} Students</span>
                        </div>
                      ) : (
                        <h3 className="text-lg font-bold text-slate-800">{achievement.students[0]}</h3>
                      )}
                    </div>
                    <p className="text-sm text-cyan-600 font-medium">Batch: {achievement.batch}</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">{achievement.title}</h4>

                {achievement.students.length > 1 && (
                  <div className="mb-3">
                    <span className="text-sm font-medium text-slate-700">Students: </span>
                    <span className="text-sm text-slate-600">{achievement.students.join(", ")}</span>
                  </div>
                )}

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
