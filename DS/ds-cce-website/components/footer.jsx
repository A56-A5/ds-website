import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Department Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <span className="text-xl font-bold">DS-CCE</span>
            </div>
            <p className="text-gray-300 mb-6">
              Department of Data Science, Christ College of Engineering, Irinjalakuda - Shaping the future through
              data-driven innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Department
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/library" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Digital Library
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Research Labs
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Department of Data Science</p>
                  <p>Christ College of Engineering</p>
                  <p>Irinjalakuda, Kerala, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">+91 480 282 2259</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">ds@cce.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Department of Data Science, Christ College of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
