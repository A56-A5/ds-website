import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Location</h1>
            <p className="text-xl text-gray-600">
              Find us at Christ College of Engineering, Irinjalakuda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18022.27906721691!2d76.20771649003032!3d10.350460298645196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f65a7d7bc725%3A0x22dc855ba6cace68!2sChrist%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1750154397635!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Address</h3>
                      <p className="text-gray-600">
                        Department of Data Science<br />
                        Christ College of Engineering<br />
                        Irinjalakuda, Kerala, India
                      </p>
                    </div>
                  </div>

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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">How to Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">By Road</h3>
                      <p className="text-gray-600">
                        The college is located on the main road connecting Irinjalakuda and Thrissur.
                        Regular bus services are available from both cities.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">By Train</h3>
                      <p className="text-gray-600">
                        The nearest railway station is Irinjalakuda Railway Station,
                        which is about 2 km from the college.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
