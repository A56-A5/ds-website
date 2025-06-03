import Footer from "../components/Footer";
import AchievementsPreview from "../components/AchievementsPreview";

export default function Achievements() {
  return (
    <div style={{ background: '#97b0c0' }} className="min-h-screen">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6" style={{ color: '#00293f' }}>Achievements</h1>
        <AchievementsPreview />
      </main>
      <Footer />
    </div>
  );
} 