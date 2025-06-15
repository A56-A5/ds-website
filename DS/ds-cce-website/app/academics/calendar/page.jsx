import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export default function AcademicCalendarPage() {
  const academicYear = "2024-2025"

  const semesters = [
    {
      name: "Odd Semester (July - December 2024)",
      events: [
        { date: "July 1, 2024", event: "Faculty Reporting Day", category: "Administrative" },
        { date: "July 8, 2024", event: "Classes Begin for 3rd, 5th, and 7th Semesters", category: "Academic" },
        { date: "July 15, 2024", event: "Last Date for Course Registration", category: "Academic" },
        { date: "August 15, 2024", event: "Independence Day (Holiday)", category: "Holiday" },
        { date: "September 1-5, 2024", event: "First Internal Examination", category: "Examination" },
        { date: "October 2, 2024", event: "Gandhi Jayanti (Holiday)", category: "Holiday" },
        { date: "October 15-19, 2024", event: "Second Internal Examination", category: "Examination" },
        { date: "October 21-25, 2024", event: "Dussehra Vacation", category: "Holiday" },
        { date: "November 15-19, 2024", event: "Model Examination", category: "Examination" },
        { date: "November 25, 2024", event: "Last Working Day", category: "Academic" },
        { date: "December 1-15, 2024", event: "End Semester Examination", category: "Examination" },
        { date: "December 16-31, 2024", event: "Winter Vacation", category: "Holiday" },
      ],
    },
    {
      name: "Even Semester (January - June 2025)",
      events: [
        { date: "January 2, 2025", event: "Faculty Reporting Day", category: "Administrative" },
        { date: "January 6, 2025", event: "Classes Begin for 2nd, 4th, 6th, and 8th Semesters", category: "Academic" },
        { date: "January 15, 2025", event: "Last Date for Course Registration", category: "Academic" },
        { date: "January 26, 2025", event: "Republic Day (Holiday)", category: "Holiday" },
        { date: "February 10-14, 2025", event: "First Internal Examination", category: "Examination" },
        { date: "March 25-29, 2025", event: "Second Internal Examination", category: "Examination" },
        { date: "April 10-14, 2025", event: "Model Examination", category: "Examination" },
        { date: "April 20, 2025", event: "Last Working Day", category: "Academic" },
        { date: "May 1-15, 2025", event: "End Semester Examination", category: "Examination" },
        { date: "May 16-31, 2025", event: "Result Processing", category: "Administrative" },
        { date: "June 1, 2025", event: "Result Publication", category: "Administrative" },
        { date: "June 2-30, 2025", event: "Summer Vacation", category: "Holiday" },
      ],
    },
  ]

  // Category colors
  const categoryColors = {
    Academic: "bg-cyan-100 text-cyan-800",
    Administrative: "bg-purple-100 text-purple-800",
    Examination: "bg-amber-100 text-amber-800",
    Holiday: "bg-red-100 text-red-800",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academic Calendar</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Academic calendar for the year {academicYear}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Academic Year {academicYear}</h2>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button className="bg-cyan-600 hover:bg-cyan-700 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(categoryColors).map(([category, colorClass]) => (
              <Badge key={category} className={colorClass}>
                {category}
              </Badge>
            ))}
          </div>

          {/* Semesters */}
          <div className="space-y-12">
            {semesters.map((semester, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  {semester.name}
                </h3>

                <Card>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="py-3 px-6 text-left font-semibold text-slate-700">Date</th>
                          <th className="py-3 px-6 text-left font-semibold text-slate-700">Event</th>
                          <th className="py-3 px-6 text-left font-semibold text-slate-700">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester.events.map((event, eventIndex) => (
                          <tr
                            key={eventIndex}
                            className={`border-b border-slate-100 ${eventIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                          >
                            <td className="py-3 px-6 text-slate-800 font-medium">{event.date}</td>
                            <td className="py-3 px-6 text-slate-700">{event.event}</td>
                            <td className="py-3 px-6">
                              <Badge className={categoryColors[event.category] || "bg-gray-100 text-gray-800"}>
                                {event.category}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Notes</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• The academic calendar is subject to change based on university notifications.</li>
              <li>• Any changes to the calendar will be communicated through official channels.</li>
              <li>• Students are advised to regularly check the department notice board for updates.</li>
              <li>• Additional events may be added during the academic year.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
