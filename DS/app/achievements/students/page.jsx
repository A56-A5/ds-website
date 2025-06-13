import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Briefcase, Laptop } from "lucide-react"

export default function StudentAchievementsPage() {
  const achievements = [
    {
      id: 1,
      students: ["Rahul Sharma", "Priya Patel", "Arjun Singh"],
      batch: "2022-2026",
      title: "National Data Science Hackathon Winners",
      description:
        "Secured first place in the National Data Science Hackathon 2024 organized by Tech Innovators, competing against 200+ teams from across the country. The team developed an innovative solution for predictive healthcare analytics.",
      date: "May 2024",
      category: "Competition",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 2,
      students: ["Ananya Desai"],
      batch: "2021-2025",
      title: "Research Paper Published in International Journal",
      description:
        "Published a research paper titled 'Novel Approaches to Sentiment Analysis in Low-Resource Languages' in the International Journal of Data Science and Analytics (Impact Factor: 4.2).",
      date: "April 2024",
      category: "Research",
      icon: <Star className="h-8 w-8 text-cyan-600" />,
    },
    {
      id: 3,
      students: ["Mohammed Ali", "Sneha Reddy"],
      batch: "2022-2026",
      title: "Microsoft Student Ambassador Selection",
      description:
        "Selected as Microsoft Student Ambassadors for their exceptional technical skills and community contributions. They will represent the department in various Microsoft events and workshops.",
      date: "March 2024",
      category: "Recognition",
      icon: <Award className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 4,
      students: ["Vikram Joshi", "Neha Gupta", "Raj Malhotra", "Divya Shah"],
      batch: "2021-2025",
      title: "Smart India Hackathon Finalists",
      description:
        "Selected as finalists in the Smart India Hackathon 2024 for their project 'AgroSense' - an AI-powered solution for crop disease detection using smartphone cameras.",
      date: "February 2024",
      category: "Competition",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
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
                                <div className="mt-3">
                                  {achievement.students.length > 1 ? (
                                    <div className="flex items-center justify-center">
                                      <Users className="h-4 w-4 mr-1 text-slate-600" />
                                      <span className="font-semibold text-slate-800">
                                        {achievement.students.length} Students
                                      </span>
                                    </div>
                                  ) : (
                                    <h4 className="font-semibold text-slate-800">{achievement.students[0]}</h4>
                                  )}
                                  <p className="text-sm text-slate-600 mt-1">Batch: {achievement.batch}</p>
                                </div>
                              </div>
                              <div className="md:w-3/4 p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <h4 className="text-xl font-semibold text-slate-800">{achievement.title}</h4>
                                  <Badge
                                    className={categoryColors[achievement.category] || "bg-slate-100 text-slate-800"}
                                  >
                                    {achievement.category}
                                  </Badge>
                                </div>

                                {achievement.students.length > 1 && (
                                  <div className="mb-3">
                                    <span className="text-sm font-medium text-slate-700">Students: </span>
                                    <span className="text-sm text-slate-600">{achievement.students.join(", ")}</span>
                                  </div>
                                )}

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
