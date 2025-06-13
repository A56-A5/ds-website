import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      title: "New AI Research Lab Inaugurated",
      date: "December 15, 2024",
      excerpt:
        "State-of-the-art artificial intelligence research laboratory equipped with latest GPU clusters and computing infrastructure.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Students Win National Data Science Competition",
      date: "December 10, 2024",
      excerpt: "Our B.Tech Data Science students secured first place in the National Data Science Challenge 2024.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Industry Partnership with Tech Giants",
      date: "December 5, 2024",
      excerpt:
        "New collaborations established with leading technology companies for internships and placement opportunities.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, achievements, and announcements from our department.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-xl text-slate-800 leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="outline" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  )
}
