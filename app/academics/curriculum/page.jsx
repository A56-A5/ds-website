"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PdfViewer } from "@/components/pdf-viewer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, BookOpen, Calendar } from "lucide-react"

export default function CurriculumPage() {
  const syllabusUrl =
    "https://dnbca6q7do6n.cloudfront.net/media/SyllabusPDFS/Curriculam_Computer_Science_and_EngineeringData_Science.pdf"

  const semesters = [
    {
      name: "Semester 1",
      courses: [
        { code: "GAMAT101", name: "Mathematics for Information Science - 1", credits: 3 },
        { code: "GAPHT121", name: "Physics for Information Science", credits: 5 },
        { code: "GXCYT122", name: "Chemistry for Information Science", credits: 3 },
        { code: "GMEST103", name: "Engineering Graphics and Computer Aided Drawing", credits: 4 },
        { code: "GXEST104", name: "Introduction to Electrical & Electronics Engineering", credits: 4 },
        { code: "UCEST105", name: "Algorithmic Thinking with Python", credits: 5 },
        { code: "GYESL106", name: "Basic Electrical and Electronics Engineering Workshop", credits: 2 },
        { code: "UCHWT127", name: "Health and Wellness", credits: "2*" },
        { code: "UCHUT128", name: "Life Skills and Professional Communication", credits: "0*" },
        { code: "UCSEM129", name: "Skill Enhancement Course: Digital 101 (MOOC)", credits: "0**" },
      ],
    },
    {
      name: "Semester 2",
      courses: [
        { code: "GAMAT201", name: "Mathematics for Information Science - 2", credits: 3 },
        { code: "GAPHT121", name: "Physics for Information Science", credits: 5 },
        { code: "GXCYT122", name: "Chemistry for Information Science", credits: 3 },
        { code: "GXEST203", name: "Foundations of Computing: From Hardware Essentials to Web Design", credits: 3 },
        { code: "GYEST204", name: "Programming in C", credits: 5 },
        { code: "PCCST205", name: "Discrete Mathematics", credits: 4 },
        { code: "UCEST206", name: "Engineering Entrepreneurship & IPR", credits: 3 },
        { code: "UCHWT127", name: "Health and Wellness", credits: "2*" },
        { code: "UCHUT128", name: "Life Skills and Professional Communication", credits: "0*" },
        { code: "GXESL208", name: "IT Workshop", credits: 2 },
        { code: "UCSEM129", name: "Skill Enhancement Course: Digital 101 (MOOC)", credits: "1**" },
      ],
    },
    {
      name: "Semester 3",
      courses: [
        { code: "GAMAT301", name: "Mathematics for Information Science - 3", credits: 3 },
        { code: "PCCST302", name: "Data Structures", credits: 4 },
        { code: "PCCST303", name: "Computer Organization and Architecture", credits: 4 },
        { code: "PCCST304", name: "Object Oriented Programming", credits: 4 },
        { code: "PCCST305", name: "Database Management Systems", credits: 4 },
        { code: "PCCSL306", name: "Data Structures Lab", credits: 2 },
        { code: "PCCSL307", name: "Object Oriented Programming Lab", credits: 2 },
        { code: "PCCSL308", name: "Database Management Systems Lab", credits: 2 },
        { code: "UCSEM309", name: "Skill Enhancement Course", credits: 1 },
      ],
    },
    {
      name: "Semester 4",
      courses: [
        { code: "GAMAT401", name: "Mathematics for Information Science - 4", credits: 3 },
        { code: "PCCST402", name: "Design and Analysis of Algorithms", credits: 4 },
        { code: "PCCST403", name: "Operating Systems", credits: 4 },
        { code: "PCCST404", name: "Computer Networks", credits: 4 },
        { code: "PCCST405", name: "Statistics for Data Science", credits: 4 },
        { code: "PCCSL406", name: "Design and Analysis of Algorithms Lab", credits: 2 },
        { code: "PCCSL407", name: "Operating Systems Lab", credits: 2 },
        { code: "PCCSL408", name: "Computer Networks Lab", credits: 2 },
        { code: "UCSEM409", name: "Skill Enhancement Course", credits: 1 },
      ],
    },
    {
      name: "Semester 5",
      courses: [
        { code: "PCCST501", name: "Software Engineering", credits: 3 },
        { code: "PCCST502", name: "Machine Learning", credits: 4 },
        { code: "PCCST503", name: "Data Mining and Warehousing", credits: 4 },
        { code: "PCCST504", name: "Big Data Analytics", credits: 4 },
        { code: "PCCST505", name: "Web Technologies", credits: 3 },
        { code: "PCCSL506", name: "Machine Learning Lab", credits: 2 },
        { code: "PCCSL507", name: "Data Mining and Warehousing Lab", credits: 2 },
        { code: "PCCSL508", name: "Big Data Analytics Lab", credits: 2 },
        { code: "PCCSL509", name: "Web Technologies Lab", credits: 2 },
        { code: "UCSEM510", name: "Skill Enhancement Course", credits: 1 },
      ],
    },
    {
      name: "Semester 6",
      courses: [
        { code: "PCCST601", name: "Artificial Intelligence", credits: 4 },
        { code: "PCCST602", name: "Deep Learning", credits: 4 },
        { code: "PCCST603", name: "Natural Language Processing", credits: 4 },
        { code: "PCCST604", name: "Computer Vision", credits: 4 },
        { code: "PCCSL605", name: "Artificial Intelligence Lab", credits: 2 },
        { code: "PCCSL606", name: "Deep Learning Lab", credits: 2 },
        { code: "PCCSL607", name: "Natural Language Processing Lab", credits: 2 },
        { code: "PCCSL608", name: "Computer Vision Lab", credits: 2 },
        { code: "PCCST609", name: "Mini Project", credits: 2 },
        { code: "UCSEM610", name: "Skill Enhancement Course", credits: 1 },
      ],
    },
    {
      name: "Semester 7",
      courses: [
        { code: "PCCST701", name: "Cloud Computing", credits: 3 },
        { code: "PCCST702", name: "Internet of Things", credits: 3 },
        { code: "PCCST703", name: "Blockchain Technology", credits: 3 },
        { code: "PCCST704", name: "Professional Elective - 1", credits: 3 },
        { code: "PCCST705", name: "Professional Elective - 2", credits: 3 },
        { code: "PCCST706", name: "Open Elective - 1", credits: 3 },
        { code: "PCCST707", name: "Major Project - Phase 1", credits: 4 },
        { code: "PCCST708", name: "Industrial Training", credits: 2 },
      ],
    },
    {
      name: "Semester 8",
      courses: [
        { code: "PCCST801", name: "Cyber Security", credits: 3 },
        { code: "PCCST802", name: "Professional Elective - 3", credits: 3 },
        { code: "PCCST803", name: "Professional Elective - 4", credits: 3 },
        { code: "PCCST804", name: "Open Elective - 2", credits: 3 },
        { code: "PCCST805", name: "Major Project - Phase 2", credits: 8 },
        { code: "PCCST806", name: "Comprehensive Viva", credits: 2 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Curriculum</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            B.Tech CSE (Data Science) - Comprehensive curriculum designed to equip students with cutting-edge knowledge
            and skills
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 flex-grow">
        <Tabs defaultValue="overview" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="overview" className="px-8 py-3">
                Overview
              </TabsTrigger>
              <TabsTrigger value="structure" className="px-8 py-3">
                Course Structure
              </TabsTrigger>
              <TabsTrigger value="syllabus" className="px-8 py-3">
                Syllabus PDF
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">B.Tech CSE (Data Science)</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-4 text-lg">
                  The B.Tech Computer Science and Engineering (Data Science) program at Christ College of Engineering is
                  a comprehensive four-year undergraduate program designed to provide students with a strong foundation
                  in computer science fundamentals along with specialized knowledge in data science and its
                  applications.
                </p>

                <p className="mb-4">
                  The curriculum is structured to balance theoretical knowledge with practical skills, ensuring that
                  graduates are well-equipped to tackle real-world data challenges. The program covers core areas such
                  as programming, data structures, algorithms, database systems, machine learning, artificial
                  intelligence, big data technologies, and data visualization.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Program Highlights</h3>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Comprehensive coverage of computer science fundamentals and data science specialization</li>
                  <li>Strong emphasis on practical skills through laboratory work and projects</li>
                  <li>Industry-relevant curriculum developed in consultation with experts</li>
                  <li>Opportunities for specialization in areas like AI, ML, Big Data, etc.</li>
                  <li>Mandatory industrial training and major project in final year</li>
                  <li>Skill enhancement courses and professional development</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Program Outcomes</h3>

                <p className="mb-4">Upon completion of the program, graduates will be able to:</p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Apply mathematical and computational principles to solve complex data science problems</li>
                  <li>Design and implement efficient algorithms for data processing and analysis</li>
                  <li>Develop and deploy machine learning models for various applications</li>
                  <li>Work with large-scale data using appropriate technologies and tools</li>
                  <li>Visualize and communicate data insights effectively</li>
                  <li>Understand and address ethical considerations in data science</li>
                  <li>Collaborate in multidisciplinary teams to solve real-world problems</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Career Opportunities</h3>

                <p className="mb-4">
                  Graduates of the B.Tech CSE (Data Science) program can pursue careers in various roles such as:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data Scientist</li>
                    <li>Machine Learning Engineer</li>
                    <li>Data Analyst</li>
                    <li>Business Intelligence Analyst</li>
                    <li>Data Engineer</li>
                    <li>AI Researcher</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data Visualization Specialist</li>
                    <li>Big Data Engineer</li>
                    <li>Research Scientist</li>
                    <li>Software Developer</li>
                    <li>Product Manager</li>
                    <li>Consultant</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Admission Requirements</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>10+2 with Mathematics, Physics, and Chemistry</li>
                    <li>Minimum 60% aggregate in qualifying examination</li>
                    <li>Valid score in JEE Main/State Engineering Entrance Examination</li>
                    <li>English proficiency</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Complete Brochure
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="structure" className="mt-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {semesters.map((semester, index) => (
                  <Card key={index}>
                    <CardHeader className="bg-slate-50 border-b">
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-cyan-600" />
                        {semester.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-2 text-slate-600 font-medium">Code</th>
                              <th className="text-left py-2 text-slate-600 font-medium">Course Name</th>
                              <th className="text-center py-2 text-slate-600 font-medium">Credits</th>
                            </tr>
                          </thead>
                          <tbody>
                            {semester.courses.map((course, courseIndex) => (
                              <tr key={courseIndex} className="border-b border-slate-100">
                                <td className="py-3 text-slate-800 font-medium text-xs">{course.code}</td>
                                <td className="py-3 text-slate-700 text-xs">{course.name}</td>
                                <td className="py-3 text-center text-slate-700 text-xs">{course.credits}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="2" className="py-3 text-right font-medium text-slate-700 text-sm">
                                Total Credits:
                              </td>
                              <td className="py-3 text-center font-medium text-slate-800 text-sm">
                                {semester.courses.reduce((sum, course) => {
                                  const credits =
                                    typeof course.credits === "string"
                                      ? Number.parseInt(course.credits.replace(/[^0-9]/g, "")) || 0
                                      : course.credits
                                  return sum + credits
                                }, 0)}
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">Additional Components</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Industrial Training</h4>
                      <p className="text-slate-600">Mandatory industrial training in Semester 7</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Major Project</h4>
                      <p className="text-slate-600">Two-phase major project in final year</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
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
                          className="h-6 w-6 text-cyan-600"
                        >
                          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
                          <circle cx="12" cy="8" r="2"></circle>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Skill Enhancement</h4>
                      <p className="text-slate-600">Regular skill enhancement courses and MOOCs</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Credit Notes:</h4>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>
                      <strong>*</strong> - Non-credit bearing courses for holistic development
                    </li>
                    <li>
                      <strong>**</strong> - MOOC courses with variable credits based on completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="syllabus" className="mt-6">
            <div className="bg-white rounded-lg shadow-sm border h-[800px]">
              <PdfViewer pdfUrl={syllabusUrl} title="B.Tech CSE (Data Science) Curriculum" />
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-cyan-600 hover:bg-cyan-700" onClick={() => window.open(syllabusUrl, "_blank")}>
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus PDF
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
