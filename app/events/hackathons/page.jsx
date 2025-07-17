import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { Calendar, Clock, MapPin, Users, Trophy, Code, Zap, ArrowRight } from "lucide-react"

export default function HackathonsPage() {
  const hackathons = [
    {
      id: 1,
      title: "DataHack 2024: AI for Social Good",
      date: "August 15-17, 2024",
      time: "48 Hours",
      location: "Innovation Hub, CCE",
      description:
        "A 48-hour hackathon focused on developing AI-powered solutions for social challenges. Participants will work on real-world problems in healthcare, education, and environmental sustainability.",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Team+Formation",
        "/placeholder.svg?height=300&width=600&text=Coding+Marathon",
        "/placeholder.svg?height=300&width=600&text=Final+Pitches",
        "/placeholder.svg?height=300&width=600&text=Award+Ceremony",
      ],
      status: "upcoming",
      participants: 150,
      teams: 30,
      prizes: "₹2,00,000",
      themes: ["Healthcare AI", "EdTech Solutions", "Environmental Monitoring", "Smart Cities"],
      sponsors: ["Google", "Microsoft", "AWS", "NVIDIA"],
      featured: true,
    },
    {
      id: 2,
      title: "FinTech Innovation Challenge",
      date: "September 20-22, 2024",
      time: "36 Hours",
      location: "Main Auditorium & Labs",
      description:
        "Develop innovative financial technology solutions using blockchain, AI, and data analytics. Focus on digital payments, fraud detection, and financial inclusion.",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Blockchain+Workshop",
        "/placeholder.svg?height=300&width=600&text=Mentor+Sessions",
        "/placeholder.svg?height=300&width=600&text=Demo+Day",
      ],
      status: "upcoming",
      participants: 120,
      teams: 25,
      prizes: "₹1,50,000",
      themes: ["Digital Payments", "Fraud Detection", "Robo-Advisory", "Cryptocurrency"],
      sponsors: ["Razorpay", "Paytm", "HDFC Bank", "Coinbase"],
    },
    {
      id: 3,
      title: "Smart Campus Hackathon",
      date: "October 10-12, 2024",
      time: "48 Hours",
      location: "Computer Science Block",
      description:
        "Create IoT and data-driven solutions to make our campus smarter and more sustainable. Focus on energy management, security, and student services.",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=IoT+Sensors",
        "/placeholder.svg?height=300&width=600&text=Data+Dashboard",
        "/placeholder.svg?height=300&width=600&text=Campus+Tour",
      ],
      status: "upcoming",
      participants: 100,
      teams: 20,
      prizes: "₹1,00,000",
      themes: ["Energy Management", "Campus Security", "Student Services", "Waste Management"],
      sponsors: ["Intel", "Cisco", "IBM", "Siemens"],
    },
    {
      id: 4,
      title: "Data Science Challenge 2024",
      date: "June 5-7, 2024",
      time: "48 Hours",
      location: "Data Science Lab",
      description:
        "Our flagship hackathon where teams competed to solve complex data science problems using machine learning and analytics. Winners developed a predictive model for crop yield optimization.",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Data+Analysis",
        "/placeholder.svg?height=300&width=600&text=ML+Models",
        "/placeholder.svg?height=300&width=600&text=Winning+Team",
        "/placeholder.svg?height=300&width=600&text=Prize+Distribution",
      ],
      status: "completed",
      participants: 180,
      teams: 35,
      prizes: "₹2,50,000",
      themes: ["Predictive Analytics", "Computer Vision", "NLP", "Time Series Analysis"],
      sponsors: ["TCS", "Infosys", "Wipro", "Accenture"],
      winner: "Team DataMinds - Crop Yield Prediction System",
      featured: true,
    },
    {
      id: 5,
      title: "Healthcare Innovation Hack",
      date: "April 12-14, 2024",
      time: "48 Hours",
      location: "Medical Informatics Lab",
      description:
        "Focused on developing technology solutions for healthcare challenges. Teams worked on telemedicine, health monitoring, and medical data analysis projects.",
      images: [
        "/placeholder.svg?height=300&width=600",
        "/placeholder.svg?height=300&width=600&text=Health+Tech",
        "/placeholder.svg?height=300&width=600&text=Medical+Data",
        "/placeholder.svg?height=300&width=600&text=Prototype+Demo",
      ],
      status: "completed",
      participants: 90,
      teams: 18,
      prizes: "₹1,25,000",
      themes: ["Telemedicine", "Health Monitoring", "Medical Imaging", "Drug Discovery"],
      sponsors: ["Philips Healthcare", "GE Healthcare", "Siemens Healthineers"],
      winner: "Team MedTech - AI-Powered Diagnostic Assistant",
    },
  ]

  const upcomingHackathons = hackathons.filter((h) => h.status === "upcoming")
  const completedHackathons = hackathons.filter((h) => h.status === "completed")

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Hackathons</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Join our exciting hackathons and coding challenges to showcase your skills and build innovative solutions
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">8+</div>
              <div className="text-slate-600">Hackathons Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
              <div className="text-slate-600">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">₹10L+</div>
              <div className="text-slate-600">Prize Money Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-slate-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Upcoming Hackathons */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Upcoming Hackathons</h2>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">
              <Zap className="h-4 w-4 mr-1" />
              Register Now
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingHackathons.map((hackathon, index) => (
              <Card
                key={hackathon.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <ImageCarousel images={hackathon.images} alt={hackathon.title} className="h-full" />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(hackathon.status)}>
                      {hackathon.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Badge>
                  </div>
                  {hackathon.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-cyan-600 hover:bg-cyan-700">Featured</Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 line-clamp-2">{hackathon.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Clock className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.time}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Users className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.participants} participants expected</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Trophy className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">Prize Pool: {hackathon.prizes}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{hackathon.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Themes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {hackathon.themes.slice(0, 3).map((theme, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {theme}
                        </Badge>
                      ))}
                      {hackathon.themes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{hackathon.themes.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Hackathons */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Past Hackathons</h2>
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
              <Trophy className="h-4 w-4 mr-1" />
              Success Stories
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedHackathons.map((hackathon, index) => (
              <Card
                key={hackathon.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <ImageCarousel images={hackathon.images} alt={hackathon.title} className="h-full" />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(hackathon.status)}>Completed</Badge>
                  </div>
                  {hackathon.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-amber-600 hover:bg-amber-700">Flagship Event</Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 line-clamp-2">{hackathon.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Users className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">{hackathon.participants} participants</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Trophy className="h-4 w-4 mr-2 text-cyan-600" />
                      <span className="text-sm">Prize Pool: {hackathon.prizes}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{hackathon.description}</p>

                  {hackathon.winner && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="text-sm font-semibold text-amber-800 mb-1">🏆 Winner:</h4>
                      <p className="text-sm text-amber-700">{hackathon.winner}</p>
                    </div>
                  )}

                  <Button variant="outline" className="w-full bg-transparent">
                    View Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Why Participate in Our Hackathons?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Skill Development</h3>
              <p className="text-slate-600 text-sm">Enhance your coding, problem-solving, and teamwork skills</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Networking</h3>
              <p className="text-slate-600 text-sm">Connect with industry experts, mentors, and like-minded peers</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Win Prizes</h3>
              <p className="text-slate-600 text-sm">Compete for substantial cash prizes and recognition</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Innovation</h3>
              <p className="text-slate-600 text-sm">Work on cutting-edge technologies and real-world problems</p>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
