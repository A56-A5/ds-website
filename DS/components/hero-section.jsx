import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Shaping the Future of
            <span className="text-cyan-400 block">Data Science</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            The Department of Data Science at Christ College of Engineering, Irinjalakuda is committed to excellence in
            education, research, and innovation. We prepare students to tackle real-world challenges through
            cutting-edge curriculum and hands-on experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Introduction
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">2024</div>
              <div className="text-gray-300">Department Established</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
