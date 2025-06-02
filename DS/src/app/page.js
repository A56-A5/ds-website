import Hero from "./components/Hero";
import EventsPreview from "./components/EventsPreview";
import AchievementsPreview from "./components/AchievementsPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <Hero />
      <main className="max-w-6xl mx-auto p-6 grid gap-12">
        <EventsPreview />
        <AchievementsPreview />
      </main>
      <Footer />
    </div>
  );
}
