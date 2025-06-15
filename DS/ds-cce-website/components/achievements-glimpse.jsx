import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AchievementsGlimpse() {
  const achievements = [
    {
      title: "National Data Science Hackathon Winners",
      description: "Our students secured first place in the National Data Science Hackathon 2024",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      category: "Student Achievement",
    },
    {
      title: "Research Grant Awarded",
      description: "₹50 Lakhs research grant awarded for AI in Healthcare project",
      icon: <Award className="h-8 w-8 text-cyan-500" />,
      category: "Research",
    },
    {
      title: "Best Emerging Department Award",
      description: "Recognized as the Best Emerging Department at the Education Excellence Awards 2024",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      category: "Department",
    },
    {
      title: "Faculty Excellence Award",
      description: "Dr. Sarah Johnson received the Faculty Excellence Award for contributions to ML research",
      icon: <Medal className="h-8 w-8 text-blue-500" />,
      category: "Faculty",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Recent Achievements</h2>
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white">
            View All Achievements
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">{achievement.icon}</div>
                <Badge className="self-start mb-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-normal">
                  {achievement.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{achievement.title}</h3>
                <p className="text-gray-600 flex-grow">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
