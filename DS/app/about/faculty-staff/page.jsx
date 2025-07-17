import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function FacultyStaffPage() {
  const faculty = [
    {
      name: "Dr. Vince Paul",
      position: "Head of Department",
      specialization: "Data Science & Machine Learning",
      education: "Ph.D. in Computer Science",
      experience: "15+ years in academia and industry",
      image: "/placeholder.svg?height=300&width=300",
      email: "vince.paul@cce.edu",
      phone: "+91 9876543210",
      publications: 45,
      awards: ["Best Faculty Award 2023", "Research Excellence Award 2022"],
      bio: "Dr. Vince Paul is the Head of Department of Data Science with extensive experience in machine learning and data analytics. He leads the department with a vision to establish it as a center of excellence in data science education and research.",
    },
    {
      name: "Ms. Sreetha E S",
      position: "Deputy HOD",
      specialization: "Big Data Analytics & Database Systems",
      education: "M.Tech in Computer Science",
      experience: "12 years in teaching and research",
      image: "/placeholder.svg?height=300&width=300",
      email: "sreetha.es@cce.edu",
      phone: "+91 9876543211",
      publications: 25,
      awards: ["Outstanding Teacher Award 2023"],
      bio: "Ms. Sreetha E S serves as the Deputy Head of Department and specializes in Big Data Analytics and Database Systems. She has contributed significantly to curriculum development and student mentoring in the department.",
    },
    {
      name: "Ms. Sreemol",
      position: "HOD in Charge",
      specialization: "Data Mining & Analytics",
      education: "M.Tech in Data Science",
      experience: "10 years in teaching and research",
      image: "/placeholder.svg?height=300&width=300",
      email: "sreemol@cce.edu",
      phone: "+91 9876543212",
      publications: 20,
      awards: ["Young Faculty Award 2022"],
      bio: "Ms. Sreemol serves as HOD in Charge and specializes in Data Mining and Analytics. She is actively involved in research projects and has been instrumental in establishing industry collaborations for the department.",
    },
  ]

  const staff = [
    {
      name: "Vineed Sir",
      position: "Class Tutor",
      image: "/placeholder.svg?height=300&width=300",
      email: "rajesh.kumar@cce.edu",
      phone: "+91 9876543214",
    },
    {
      name: "Ms. Athithya",
      position: "Class Tutor",
      image: "/placeholder.svg?height=300&width=300",
      email: "athithya.patel@cce.edu",
      phone: "+91 9876543215",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Faculty & Staff</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet our distinguished faculty members and dedicated staff who make our department exceptional
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="faculty" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="faculty" className="px-8 py-3">
                Faculty
              </TabsTrigger>
              <TabsTrigger value="staff" className="px-8 py-3">
                Staff
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="faculty" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-cyan-600 font-medium mb-4">{member.position}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2 text-slate-600" />
                        <span className="text-gray-700 text-sm">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2 text-slate-600" />
                        <span className="text-gray-700 text-sm">{member.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="staff" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {staff.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-slate-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-cyan-600 font-medium mb-4">{member.position}</p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-slate-600" />
                        <span className="text-gray-700">{member.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-slate-600" />
                        <span className="text-gray-700">{member.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
