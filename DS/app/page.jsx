import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { StatsSection } from "@/components/stats-section"
import { AchievementsGlimpse } from "@/components/achievements-glimpse"
import { EventsGlimpse } from "@/components/events-glimpse"
import { FacultySection } from "@/components/faculty-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-slide-up animation-delay-200">
        <AboutSection />
      </div>
      <div className="animate-slide-up animation-delay-300">
        <ProgramsSection />
      </div>
      <div className="animate-slide-up animation-delay-400">
        <StatsSection />
      </div>
      <div className="animate-slide-up animation-delay-500">
        <AchievementsGlimpse />
      </div>
      <div className="animate-slide-up animation-delay-600">
        <EventsGlimpse />
      </div>
      <div className="animate-slide-up animation-delay-700">
        <FacultySection />
      </div>
      <div className="animate-slide-up animation-delay-800">
        <NewsSection />
      </div>
      <Footer />
    </div>
  )
}
