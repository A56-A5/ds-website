import Timeline from "@/app/components/Timeline";
import Footer from "@/app/components/Footer";

export default function EventsTimeline() {
  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-purple-900">Events Timeline</h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Timeline />
        </div>
      </main>
      <Footer />
    </div>
  );
} 