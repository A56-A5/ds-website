import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, User } from "lucide-react"

export default function OfficeHoursPage() {
  const facultyOfficeHours = [
    {
      name: "Dr. Vince Paul",
      position: "Head of Department",
      office: "Room 301, DS Block",
      hours: "Monday - Friday: 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM",
      email: "vince.paul@cce.edu",
      phone: "+91 9876543210",
    },
    {
      name: "Ms. Sreetha E S",
      position: "Deputy HOD",
      office: "Room 302, DS Block",
      hours: "Monday - Friday: 9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
      email: "sreetha.es@cce.edu",
      phone: "+91 9876543211",
    },
    {
      name: "Ms. Sreemol",
      position: "HOD in Charge",
      office: "Room 303, DS Block",
      hours: "Monday - Friday: 11:00 AM - 1:00 PM, 2:30 PM - 4:30 PM",
      email: "sreemol@cce.edu",
      phone: "+91 9876543212",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Office Hours</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Contact information and office hours for faculty and staff</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Department Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Department Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Address</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-3 text-cyan-600 mt-1" />
                  <div className="text-slate-600">
                    <p>Department of Data Science</p>
                    <p>Christ College of Engineering</p>
                    <p>Irinjalakuda, Thrissur, Kerala - 680125</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-cyan-600" />
                    <span className="text-slate-600">04802825355</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-cyan-600" />
                    <span className="text-slate-600">contact@cce.edu.in</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">General Office Hours</h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-cyan-600" />
                    <div>
                      <p>
                        <strong>Monday - Friday:</strong> 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-cyan-600" />
                    <div>
                      <p>
                        <strong>Saturday:</strong> 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-cyan-600" />
                    <div>
                      <p>
                        <strong>Lunch Break:</strong> 12:30 PM - 1:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Office Hours */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Faculty Office Hours</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyOfficeHours.map((faculty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-slate-800">
                    <User className="h-5 w-5 mr-2 text-cyan-600" />
                    {faculty.name}
                  </CardTitle>
                  <p className="text-cyan-600 font-medium">{faculty.position}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-slate-600 mt-1" />
                    <span className="text-slate-600 text-sm">{faculty.office}</span>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-4 w-4 mr-2 text-slate-600 mt-1" />
                    <span className="text-slate-600 text-sm">{faculty.hours}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-slate-600" />
                      <span className="text-slate-600 text-sm">{faculty.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-slate-600" />
                      <span className="text-slate-600 text-sm">{faculty.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Appointments:</strong> While faculty maintain regular office hours, it's recommended to
                  schedule appointments in advance for important discussions or meetings.
                </p>
                <p>
                  <strong>Emergency Contact:</strong> For urgent matters outside office hours, please contact the main
                  office at 04802825355.
                </p>
                <p>
                  <strong>Holiday Schedule:</strong> Office hours may vary during holidays and examination periods.
                  Please check with the department for updated schedules.
                </p>
                <p>
                  <strong>Student Consultation:</strong> Faculty are available for student consultation during their
                  office hours. No prior appointment needed for general academic queries.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
