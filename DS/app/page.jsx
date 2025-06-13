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
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <AchievementsGlimpse />
      <EventsGlimpse />
      <FacultySection />
      <NewsSection />
      <Footer />
    </div>
  )
}
