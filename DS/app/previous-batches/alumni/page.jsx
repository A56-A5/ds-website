import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, Briefcase, GraduationCap, MapPin } from "lucide-react"

export default function AlumniDirectoryPage() {
  const batches = [
    {
      year: "2020-2024",
      students: 60,
      placementRate: "95%",
      averagePackage: "₹8.5 LPA",
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Infosys", "Wipro"],
      coordinator: "Dr. Sarah Johnson",
      websiteUrl: "https://batch2020.ds-cce.edu",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      year: "2021-2025",
      students: 65,
      placementRate: "Ongoing",
      averagePackage: "Ongoing",
      topRecruiters: ["Placement in progress"],
      coordinator: "Dr. Michael Chen",
      websiteUrl: "https://batch2021.ds-cce.edu",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      year: "2022-2026",
      students: 70,
      placementRate: "Upcoming",
      averagePackage: "Upcoming",
      topRecruiters: ["Placement yet to start"],
      coordinator: "Dr. Priya Sharma",
      websiteUrl: "https://batch2022.ds-cce.edu",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      year: "2023-2027",
      students: 75,
      placementRate: "Upcoming",
      averagePackage: "Upcoming",
      topRecruiters: ["Placement yet to start"],
      coordinator: "Dr. James Wilson",
      websiteUrl: "https://batch2023.ds-cce.edu",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  const alumniSpotlight = [
    {
      name: "Rahul Sharma",
      batch: "2020-2024",
      company: "Google",
      position: "Data Scientist",
      location: "Bangalore, India",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The data science program at CCE provided me with a strong foundation that helped me secure my dream job at Google.",
    },
    {
      name: "Priya Patel",
      batch: "2020-2024",
      company: "Microsoft",
      position: "Machine Learning Engineer",
      location: "Hyderabad, India",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The hands-on experience and industry exposure I received during my time at CCE were invaluable for my career.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Alumni Directory</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect with our alumni network and explore batch-specific information
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Alumni Spotlight */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Alumni Spotlight</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {alumniSpotlight.map((alumni, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-50 p-6 flex items-center justify-center">
                      <img
                        src={alumni.image || "/placeholder.svg"}
                        alt={alumni.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{alumni.name}</h3>
                      <p className="text-cyan-600 font-medium mb-3">
                        {alumni.position} at {alumni.company}
                      </p>
                      <div className="flex items-center text-sm text-slate-600 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {alumni.location}
                      </div>
                      <p className="text-slate-600 italic mb-4">"{alumni.quote}"</p>
                      <Badge className="bg-slate-100 text-slate-700">Batch: {alumni.batch}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Batch Directory */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Batch Directory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {batches.map((batch, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200 relative">
                  <img
                    src={batch.image || "/placeholder.svg"}
                    alt={`Batch ${batch.year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Batch {batch.year}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center text-slate-600 mb-2">
                        <Users className="h-4 w-4 mr-2 text-cyan-600" />
                        <span className="text-sm">Students:</span>
                      </div>
                      <p className="font-semibold text-slate-800">{batch.students}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-slate-600 mb-2">
                        <Briefcase className="h-4 w-4 mr-2 text-cyan-600" />
                        <span className="text-sm">Placement:</span>
                      </div>
                      <p className="font-semibold text-slate-800">{batch.placementRate}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-slate-600 mb-2">
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
                          className="mr-2 text-cyan-600"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                        <span className="text-sm">Avg. Package:</span>
                      </div>
                      <p className="font-semibold text-slate-800">{batch.averagePackage}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-slate-600 mb-2">
                        <GraduationCap className="h-4 w-4 mr-2 text-cyan-600" />
                        <span className="text-sm">Coordinator:</span>
                      </div>
                      <p className="font-semibold text-slate-800">{batch.coordinator}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-slate-600 mb-2">Top Recruiters:</div>
                    <div className="flex flex-wrap gap-2">
                      {batch.topRecruiters.map((recruiter, i) => (
                        <Badge key={i} variant="outline" className="bg-slate-50">
                          {recruiter}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center">
                    Visit Batch Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
