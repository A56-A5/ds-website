import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Briefcase } from "lucide-react"

export function ProgramsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to provide students with both theoretical knowledge and practical
            skills needed in the data science industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <GraduationCap className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">B.Tech Data Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                A comprehensive 4-year undergraduate program covering fundamentals of data science, programming,
                statistics, and machine learning.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Programming in Python & R</li>
                <li>• Statistical Analysis</li>
                <li>• Machine Learning Algorithms</li>
                <li>• Data Visualization</li>
                <li>• Big Data Technologies</li>
              </ul>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <BookOpen className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">Research Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Engage in cutting-edge research projects in collaboration with faculty and industry partners.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• AI in Healthcare</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• IoT Data Analytics</li>
                <li>• Blockchain Technology</li>
              </ul>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Explore Research</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <Briefcase className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-800">Industry Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Hands-on training programs and internships with leading technology companies and startups.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 6-month Industry Internship</li>
                <li>• Live Project Experience</li>
                <li>• Mentorship Programs</li>
                <li>• Certification Courses</li>
                <li>• Placement Assistance</li>
              </ul>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">View Opportunities</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
