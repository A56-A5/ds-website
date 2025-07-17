"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react"

export default function LocationPage() {
  const mapUrl = "https://maps.app.goo.gl/nUP3k1UuZdiYG3ko7"

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Location</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Find us at Christ College of Engineering, Irinjalakuda, Kerala, India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Information */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-slate-800">
                  <MapPin className="h-6 w-6 mr-3 text-cyan-600" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Department of Data Science
                    <br />
                    Christ College of Engineering
                    <br />
                    Irinjalakuda, Kerala, India
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Contact Information</h3>
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
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Getting Here</h3>
                  <p className="text-slate-600 mb-4">
                    Christ College of Engineering is located in Irinjalakuda, Thrissur district, Kerala. The campus is
                    easily accessible by road and is well-connected to major cities in Kerala.
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• 15 km from Thrissur city center</li>
                    <li>• 2 km from Irinjalakuda Railway Station</li>
                    <li>• 45 km from Cochin International Airport</li>
                    <li>• Regular bus services available</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    className="bg-cyan-600 hover:bg-cyan-700 w-full"
                    onClick={() => window.open(mapUrl, "_blank")}
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.8234567890123!2d76.2123456789!3d10.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChrist%20College%20of%20Engineering%20Irinjalakuda!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Christ College of Engineering Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-slate-800">
                <Clock className="h-6 w-6 mr-3 text-cyan-600" />
                Visiting Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Campus Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 8:00 AM - 1:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Department Office Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 9:00 AM - 12:00 PM
                    </p>
                    <p>
                      <strong>Lunch Break:</strong> 12:30 PM - 1:30 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <p className="text-slate-700">
                  <strong>Note:</strong> For campus visits and meetings with faculty, please contact us in advance to
                  ensure availability.
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
