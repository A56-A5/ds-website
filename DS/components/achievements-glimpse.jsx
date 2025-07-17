import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"

export function AchievementsGlimpse() {
  const achievements = [
    {
      title: "National Data Science Hackathon Winners",
      description: "Our students secured first place in the National Data Science Hackathon 2024",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      category: "Student Achievement",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300&text=Team+Presentation",
        "/placeholder.svg?height=200&width=300&text=Award+Ceremony",
        "/placeholder.svg?height=200&width=300&text=Victory+Celebration",
      ],
      type: "students",
    },
    {
      title: "Research Grant Awarded",
      description: "₹50 Lakhs research grant awarded for AI in Healthcare project",
      icon: <Award className="h-8 w-8 text-cyan-500" />,
      category: "Faculty Achievement",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300&text=Grant+Announcement",
        "/placeholder.svg?height=200&width=300&text=Research+Lab",
        "/placeholder.svg?height=200&width=300&text=Project+Team",
      ],
      type: "faculty",
    },
    {
      title: "Best Emerging Department Award",
      description: "Recognized as the Best Emerging Department at the Education Excellence Awards 2024",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      category: "Department Award",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300&text=Award+Ceremony",
        "/placeholder.svg?height=200&width=300&text=Department+Team",
        "/placeholder.svg?height=200&width=300&text=Trophy+Display",
      ],
      type: "department",
    },
    {
      title: "Faculty Excellence Award",
      description: "Dr. Sarah Johnson received the Faculty Excellence Award for contributions to ML research",
      icon: <Medal className="h-8 w-8 text-blue-500" />,
      category: "Faculty Achievement",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300&text=Award+Presentation",
        "/placeholder.svg?height=200&width=300&text=Research+Work",
        "/placeholder.svg?height=200&width=300&text=Faculty+Recognition",
      ],
      type: "faculty",
    },
  ]

  // Category colors
  const categoryColors = {
    "Student Achievement": "bg-green-100 text-green-800",
    "Faculty Achievement": "bg-cyan-100 text-cyan-800",
    "Department Award": "bg-amber-100 text-amber-800",
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Recent Achievements</h2>
          <Button
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
          >
            View All Achievements
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40">
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
                    <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">{achievement.title}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm line-clamp-3">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links to Achievement Categories */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Student Achievements</h3>
              <p className="text-slate-600 text-sm mb-4">
                Celebrating our students' success in competitions, research, and placements
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                View Student Achievements
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Faculty Achievements</h3>
              <p className="text-slate-600 text-sm mb-4">
                Recognizing our faculty's contributions to research and academic excellence
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                View Faculty Achievements
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Department Awards</h3>
              <p className="text-slate-600 text-sm mb-4">
                Awards and recognitions received by our department for excellence
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                View Department Awards
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
