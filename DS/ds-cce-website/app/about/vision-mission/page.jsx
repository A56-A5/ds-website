import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our guiding principles and aspirations for the Department of Data Science
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Vision Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-cyan-600 shadow-sm">
              <p className="text-xl text-gray-700 leading-relaxed">
                To be a leading center of excellence in data science education and research, fostering innovation and
                creating future leaders who will drive technological advancement and societal progress through
                data-driven insights and solutions.
              </p>
            </div>

            <div className="mt-8 space-y-6 text-gray-600">
              <p>
                The Department of Data Science at Christ College of Engineering, Irinjalakuda envisions becoming a
                globally recognized hub for cutting-edge data science education, research, and innovation. We aspire to
                be at the forefront of technological advancements in the field, contributing significantly to the
                development of data science as a discipline.
              </p>

              <p>
                We aim to create an ecosystem where students, faculty, and industry partners collaborate to solve
                complex real-world problems using data-driven approaches. Our vision encompasses producing graduates who
                are not just technically proficient but also ethically responsible and socially conscious in their
                application of data science.
              </p>

              <p>
                By 2030, we aim to be recognized among the top data science departments in the country, known for our
                innovative teaching methodologies, impactful research output, and strong industry connections.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-cyan-600 shadow-sm">
              <p className="text-xl text-gray-700 leading-relaxed">
                To provide high-quality education in data science through innovative teaching methodologies,
                industry-relevant curriculum, and hands-on learning experiences, while promoting research, ethical
                practices, and societal impact.
              </p>
            </div>

            <div className="mt-8 space-y-6 text-gray-600">
              <h3 className="text-xl font-semibold text-slate-800">Our mission encompasses:</h3>

              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700">Excellence in Education</h4>
                  <p>
                    Deliver a comprehensive, up-to-date curriculum that balances theoretical foundations with practical
                    applications, ensuring students develop strong analytical, technical, and problem-solving skills.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700">Research and Innovation</h4>
                  <p>
                    Foster a culture of research and innovation, encouraging faculty and students to explore emerging
                    areas in data science and contribute to the advancement of the field through publications, patents,
                    and projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700">Industry Collaboration</h4>
                  <p>
                    Establish and maintain strong partnerships with industry leaders to ensure curriculum relevance,
                    provide internship opportunities, facilitate knowledge exchange, and enhance employment prospects
                    for graduates.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700">Ethical Data Science</h4>
                  <p>
                    Instill a strong sense of ethics and responsibility in students, emphasizing the importance of
                    privacy, security, fairness, and transparency in data collection, analysis, and application.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700">Societal Impact</h4>
                  <p>
                    Encourage the application of data science to address societal challenges in areas such as
                    healthcare, environment, education, and governance, contributing to sustainable development and
                    social welfare.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700">Continuous Learning</h4>
                  <p>
                    Promote a culture of lifelong learning and adaptability, preparing students to thrive in the rapidly
                    evolving field of data science and related technologies.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
