import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, BookOpen, Award } from "lucide-react"

export default function FacultyStaffPage() {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Head of Department",
      specialization: "Machine Learning & AI",
      education: "Ph.D. in Computer Science, Stanford University",
      experience: "15+ years in academia and industry",
      image: "/placeholder.svg?height=300&width=300",
      email: "sarah.johnson@cce.edu",
      phone: "+91 9876543210",
      publications: 45,
      awards: ["Best Faculty Award 2023", "Research Excellence Award 2022"],
      bio: "Dr. Sarah Johnson is a renowned expert in Machine Learning and Artificial Intelligence with over 15 years of experience in both academia and industry. She leads the department with a vision to establish it as a center of excellence in data science education and research.",
    },
    {
      name: "Dr. Michael Chen",
      position: "Associate Professor",
      specialization: "Big Data Analytics",
      education: "Ph.D. in Data Science, MIT",
      experience: "12 years in research and teaching",
      image: "/placeholder.svg?height=300&width=300",
      email: "michael.chen@cce.edu",
      phone: "+91 9876543211",
      publications: 38,
      awards: ["Outstanding Researcher Award 2023"],
      bio: "Dr. Michael Chen specializes in Big Data Analytics and has contributed significantly to the field through his research on scalable data processing algorithms and distributed computing frameworks. He has collaborated with leading tech companies on various research projects.",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Assistant Professor",
      specialization: "Natural Language Processing",
      education: "Ph.D. in Computer Science, IIT Delhi",
      experience: "8 years in teaching and research",
      image: "/placeholder.svg?height=300&width=300",
      email: "priya.sharma@cce.edu",
      phone: "+91 9876543212",
      publications: 32,
      awards: ["Young Scientist Award 2022"],
      bio: "Dr. Priya Sharma is an expert in Natural Language Processing with a focus on multilingual text analysis and sentiment analysis. Her research has been published in top-tier conferences and journals in the field of computational linguistics and AI.",
    },
    {
      name: "Dr. James Wilson",
      position: "Professor",
      specialization: "Computer Vision",
      education: "Ph.D. in Computer Engineering, Carnegie Mellon University",
      experience: "18 years in academia and research",
      image: "/placeholder.svg?height=300&width=300",
      email: "james.wilson@cce.edu",
      phone: "+91 9876543213",
      publications: 52,
      awards: ["Distinguished Professor Award 2023", "Best Paper Award - CVPR 2022"],
      bio: "Dr. James Wilson is a distinguished professor specializing in Computer Vision and Image Processing. His pioneering work in object recognition algorithms has been widely recognized and implemented in various commercial applications.",
    },
  ]

  const staff = [
    {
      name: "Rajesh Kumar",
      position: "Lab Administrator",
      image: "/placeholder.svg?height=300&width=300",
      email: "rajesh.kumar@cce.edu",
      phone: "+91 9876543214",
    },
    {
      name: "Anita Patel",
      position: "Administrative Assistant",
      image: "/placeholder.svg?height=300&width=300",
      email: "anita.patel@cce.edu",
      phone: "+91 9876543215",
    },
    {
      name: "Suresh Menon",
      position: "Technical Support Specialist",
      image: "/placeholder.svg?height=300&width=300",
      email: "suresh.menon@cce.edu",
      phone: "+91 9876543216",
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
            <div className="grid md:grid-cols-2 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-100">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                      <p className="text-cyan-600 font-medium mb-3">{member.position}</p>

                      <div className="space-y-3 mb-4">
                        <p className="text-gray-700">
                          <span className="font-semibold">Specialization:</span> {member.specialization}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Education:</span> {member.education}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Experience:</span> {member.experience}
                        </p>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                          <BookOpen className="h-4 w-4 mr-1 text-cyan-600" />
                          <span>{member.publications} Publications</span>
                        </div>
                        {member.awards && member.awards.length > 0 && (
                          <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                            <Award className="h-4 w-4 mr-1 text-cyan-600" />
                            <span>{member.awards.length} Awards</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
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
