import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function TimelinePage() {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-10 px-4">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
} 