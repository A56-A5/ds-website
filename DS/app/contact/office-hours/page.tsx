// DS/app/contact/office-hours/page.jsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Phone, Mail } from "lucide-react"

export default function OfficeHoursPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Office Hours</h1>
            <p className="text-xl text-gray-600">
              Find out when we're available to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Regular Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Regular Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-cyan-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Working Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-cyan-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Important Dates</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Academic Year: June - May</li>
                        <li>• Mid-term Break: October</li>
                        <li>• End-term Break: December</li>
                        <li>• Summer Break: May - June</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-cyan-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Phone</h3>
                      <p className="text-gray-600">+91 480 282 2259</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-cyan-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <p className="text-gray-600">ds@cce.edu.in</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}