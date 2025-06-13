import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, BookOpen } from "lucide-react"

export function FacultySection() {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Head of Department",
      specialization: "Machine Learning & AI",
      image: "/placeholder.svg?height=300&width=300",
      email: "sarah.johnson@cce.edu",
      publications: 45,
    },
    {
      name: "Dr. Michael Chen",
      position: "Associate Professor",
      specialization: "Big Data Analytics",
      image: "/placeholder.svg?height=300&width=300",
      email: "michael.chen@cce.edu",
      publications: 38,
    },
    {
      name: "Dr. Priya Sharma",
      position: "Assistant Professor",
      specialization: "Natural Language Processing",
      image: "/placeholder.svg?height=300&width=300",
      email: "priya.sharma@cce.edu",
      publications: 32,
    },
    {
      name: "Dr. James Wilson",
      position: "Professor",
      specialization: "Computer Vision",
      image: "/placeholder.svg?height=300&width=300",
      email: "james.wilson@cce.edu",
      publications: 52,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Meet Our Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished faculty members bring years of industry experience and academic excellence to guide
            students in their data science journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{member.publications} Publications</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            View All Faculty Members
          </Button>
        </div>
      </div>
    </section>
  )
}
