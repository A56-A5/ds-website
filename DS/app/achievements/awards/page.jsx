import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star } from "lucide-react"

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
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {awards.map((award) => (
              <Card key={award.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-50 p-8 flex flex-col items-center justify-center text-center border-r border-slate-100">
                      {award.icon}
                      <Badge className={`mt-4 ${categoryColors[award.category] || "bg-slate-100 text-slate-800"}`}>
                        {award.category}
                      </Badge>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{award.title}</h3>
                      <p className="text-cyan-600 font-medium mb-4">Awarded by: {award.organization}</p>
                      <p className="text-slate-600 mb-4">{award.description}</p>

                      <div className="flex items-center text-sm text-slate-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {award.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Department Rankings Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Department Rankings</h2>

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
      </div>

      <Footer />
    </div>
  )
}
