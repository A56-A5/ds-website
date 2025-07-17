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
                Creating socially committed engineers with professional competency and excellence in Computer Science
                and Engineering through quality education.
              </p>
            </div>

            <div className="mt-8 space-y-6 text-gray-600">
              <p>
                The Department of Data Science at Christ College of Engineering, Irinjalakuda envisions creating
                socially committed engineers who possess professional competency and excellence in Computer Science and
                Engineering. Our vision emphasizes quality education that not only imparts technical knowledge but also
                instills social responsibility and ethical values in our students.
              </p>

              <p>
                We aim to develop graduates who understand the societal impact of technology and are committed to using
                their skills for the betterment of society. Through our comprehensive curriculum and experiential
                learning approach, we strive to create engineers who can bridge the gap between technological
                advancement and social welfare.
              </p>

              <p>
                Our vision encompasses producing graduates who are not just technically proficient but also socially
                conscious, ethically responsible, and committed to contributing positively to society through their
                professional endeavors in the field of data science and computer engineering.
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
                To achieve technical proficiency by adopting effective teaching-learning strategies which promote
                innovation and professional expertise. To facilitate skill development of students through additional
                training by collaborating with industry to broaden their knowledge. To promote excellence in research,
                development and consultancy services rooted in ethics, in order to emerge as responsible engineers.
              </p>
            </div>

            <div className="mt-8 space-y-6 text-gray-600">
              <h3 className="text-xl font-semibold text-slate-800">Our mission encompasses three core pillars:</h3>

              <div className="pl-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Technical Proficiency Through Effective Teaching-Learning
                  </h4>
                  <p>
                    We are committed to achieving technical proficiency by adopting effective teaching-learning
                    strategies that promote innovation and professional expertise. Our faculty employs modern
                    pedagogical approaches, hands-on learning experiences, and industry-relevant curriculum to ensure
                    students develop strong technical competencies in data science and computer engineering.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Industry Collaboration for Skill Development</h4>
                  <p>
                    We facilitate comprehensive skill development of students through additional training programs by
                    collaborating with industry partners. These partnerships help broaden students' knowledge base,
                    provide real-world exposure, and ensure they are well-prepared for the demands of the professional
                    world.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Excellence in Research and Ethical Practice</h4>
                  <p>
                    We promote excellence in research, development, and consultancy services rooted in ethics. Our goal
                    is to emerge as responsible engineers who contribute meaningfully to society while maintaining the
                    highest standards of professional integrity and ethical conduct in all their endeavors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Program Educational Objectives Section */}
          <section className="mt-16">
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Program Educational Objectives (PEO)</h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-cyan-600 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Program Educational Objectives define what our graduates are expected to achieve within a few years
                after graduation:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Technical Problem-Solving Expertise</h4>
                    <p className="text-gray-700">
                      Demonstrate their expertise in solving contemporary problems through design, analysis and
                      implementation of hardware and software systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Continuous Learning and Adaptability</h4>
                    <p className="text-gray-700">
                      Adapt to a constantly changing world through professional development and continuous learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Leadership and Entrepreneurship</h4>
                    <p className="text-gray-700">
                      Develop teamwork, leadership and entrepreneurship skills required to function productively in
                      their profession.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Program Specific Outcomes Section */}
          <section className="mt-16">
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
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Program Specific Outcomes (PSO)</h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-cyan-600 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Program Specific Outcomes define the specific skills and knowledge that graduates will possess upon
                completion of the program:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">System Analysis and Design</h4>
                    <p className="text-gray-700">
                      Analyse and design computation systems by applying the attained knowledge in programming language
                      and algorithms, system software, database management, data communication, networking and allied
                      areas of Computer Science and Engineering.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Software Engineering Excellence</h4>
                    <p className="text-gray-700">
                      Apply software engineering principles and practices to develop efficient software solutions for
                      real world computing problems.
                    </p>
                  </div>
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
