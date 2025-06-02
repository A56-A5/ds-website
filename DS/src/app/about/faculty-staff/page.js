import Footer from "@/app/components/Footer";
import FacultyList from "@/app/components/FacultyList";

export default function FacultyStaff() {
  return (
    <div className="bg-gray-50 text-black min-h-screen pt-20">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-purple-900">Faculty & Staff</h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Our Faculty</h2>
          <FacultyList />
        </div>

        <div className="bg-purple-100 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Support Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Administrative Staff</h3>
              <ul className="space-y-2">
                <li>Department Secretary</li>
                <li>Administrative Assistant</li>
                <li>Office Coordinator</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Technical Staff</h3>
              <ul className="space-y-2">
                <li>Lab Technicians</li>
                <li>IT Support Staff</li>
                <li>Research Assistants</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 