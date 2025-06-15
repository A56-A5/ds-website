import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Globe, Users, FileText, Bookmark } from "lucide-react"

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
    },
  ]

  // Group achievements by year and month
  const groupedAchievements = achievements.reduce((acc, achievement) => {
    const [month, year] = achievement.date.split(" ")
    if (!acc[year]) {
      acc[year] = {}
    }
    if (!acc[year][month]) {
      acc[year][month] = []
    }
    acc[year][month].push(achievement)
    return acc
  }, {})

  // Sort years in descending order
  const sortedYears = Object.keys(groupedAchievements).sort((a, b) => b - a)

  // Month order for sorting
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

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
        <div className="max-w-4xl mx-auto">
          {sortedYears.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 pb-2 border-b border-slate-200">{year}</h2>

              {Object.keys(groupedAchievements[year])
                .sort((a, b) => monthOrder.indexOf(b) - monthOrder.indexOf(a))
                .map((month) => (
                  <div key={month} className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-700 mb-4">{month}</h3>

                    <div className="space-y-6">
                      {groupedAchievements[year][month].map((achievement) => (
                        <Card key={achievement.id} className="overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/4 bg-slate-50 p-6 flex flex-col items-center justify-center text-center border-r border-slate-100">
                                {achievement.icon}
                                <h4 className="font-semibold text-slate-800 mt-3">{achievement.faculty}</h4>
                                <p className="text-sm text-slate-600">{achievement.position}</p>
                              </div>
                              <div className="md:w-3/4 p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <h4 className="text-xl font-semibold text-slate-800">{achievement.title}</h4>
                                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
                                    {achievement.category}
                                  </Badge>
                                </div>
                                <p className="text-slate-600 mb-4">{achievement.description}</p>
                                <p className="text-sm text-slate-500">{achievement.date}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
