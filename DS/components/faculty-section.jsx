import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function FacultySection() {
  const faculty = [
    {
      name: "Dr. Vince Paul",
      position: "Head of Department",
      image: "/placeholder.svg?height=300&width=300",
      email: "vince.paul@cce.edu",
    },
    {
      name: "Ms. Sreetha E S",
      position: "Deputy HOD",
      image: "/placeholder.svg?height=300&width=300",
      email: "sreetha.es@cce.edu",
    },
    {
      name: "Ms. Sreemol",
      position: "HOD in charge",
      image: "/placeholder.svg?height=300&width=300",
      email: "sreemol@cce.edu",
    },
    {
      name: "Ms. Athithya",
      position: "Class Tutor",
      image: "/placeholder.svg?height=300&width=300",
      email: "athithya@cce.edu",
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
                <p className="text-cyan-600 font-medium mb-4">{member.position}</p>

                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-4 w-4 mr-2 text-cyan-600" />
                  <span className="text-slate-600 text-sm">{member.email}</span>
                </div>

                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/about/faculty-staff">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              View All Faculty Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
