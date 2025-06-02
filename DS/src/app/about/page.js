import AboutSection from "../components/AboutSection";
import FacultyList from "../components/FacultyList";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <AboutSection />
        <FacultyList />
      </main>
      <Footer />
    </div>
  );
} 