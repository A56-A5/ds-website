import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsPreview from "../components/EventsPreview";

export default function Events() {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <EventsPreview />
      </main>
      <Footer />
    </div>
  );
} 