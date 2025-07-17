import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shaping the Future of
            <span className="text-cyan-400 block">Data Science</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            The Department of Data Science at Christ College of Engineering, Irinjalakuda is committed to excellence in
            education, research, and innovation. We prepare students to tackle real-world challenges through
            cutting-edge curriculum and hands-on experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/academics/curriculum">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-base font-medium">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-base font-medium bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Introduction
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">2024</div>
              <div className="text-gray-300 text-base">Department Established</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">60</div>
              <div className="text-gray-300 text-base">Students Enrolled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
