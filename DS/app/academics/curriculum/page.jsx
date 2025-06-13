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
        { code: "MA101", name: "Calculus and Linear Algebra", credits: 4 },
        { code: "PH101", name: "Engineering Physics", credits: 4 },
        { code: "CY101", name: "Engineering Chemistry", credits: 4 },
        { code: "CS101", name: "Introduction to Programming", credits: 3 },
        { code: "ME101", name: "Engineering Graphics", credits: 3 },
        { code: "HS101", name: "Technical Communication", credits: 2 },
      ],
    },
    {
      name: "Semester 2",
      courses: [
        { code: "MA102", name: "Differential Equations and Transforms", credits: 4 },
        { code: "CS102", name: "Data Structures", credits: 4 },
        { code: "EC101", name: "Basic Electronics", credits: 3 },
        { code: "CS103", name: "Object Oriented Programming", credits: 3 },
        { code: "HS102", name: "Economics for Engineers", credits: 2 },
        { code: "CS104", name: "Introduction to Data Science", credits: 3 },
      ],
    },
    {
      name: "Semester 3",
      courses: [
        { code: "MA201", name: "Probability and Statistics", credits: 4 },
        { code: "CS201", name: "Database Management Systems", credits: 4 },
        { code: "CS202", name: "Algorithm Design and Analysis", credits: 4 },
        { code: "CS203", name: "Computer Organization", credits: 3 },
        { code: "DS201", name: "Data Visualization", credits: 3 },
      ],
    },
    {
      name: "Semester 4",
      courses: [
        { code: "CS204", name: "Operating Systems", credits: 4 },
        { code: "CS205", name: "Computer Networks", credits: 3 },
        { code: "DS202", name: "Machine Learning Fundamentals", credits: 4 },
        { code: "DS203", name: "Big Data Technologies", credits: 3 },
        { code: "DS204", name: "Statistical Methods for Data Science", credits: 3 },
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
            Comprehensive curriculum designed to equip students with the knowledge and skills required in data science
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
              <h2 className="text-3xl font-bold text-slate-800 mb-6">B.Tech in Data Science</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  The B.Tech in Data Science program at Christ College of Engineering is a comprehensive four-year
                  undergraduate program designed to provide students with a strong foundation in computer science,
                  mathematics, and statistics, along with specialized knowledge in data science and its applications.
                </p>

                <p className="mb-4">
                  The curriculum is structured to balance theoretical knowledge with practical skills, ensuring that
                  graduates are well-equipped to tackle real-world data challenges. The program covers core areas such
                  as programming, data structures, algorithms, database systems, machine learning, artificial
                  intelligence, big data technologies, and data visualization.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Program Highlights</h3>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Comprehensive coverage of data science fundamentals and advanced topics</li>
                  <li>Strong emphasis on practical skills through laboratory work and projects</li>
                  <li>Industry-relevant curriculum developed in consultation with experts</li>
                  <li>Opportunities for specialization in areas like AI, ML, Big Data, etc.</li>
                  <li>Mandatory internship program to gain industry exposure</li>
                  <li>Capstone project in the final year to apply learned concepts</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Program Outcomes</h3>

                <p className="mb-4">Upon completion of the program, graduates will be able to:</p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Apply mathematical and statistical principles to solve data-related problems</li>
                  <li>Design and implement efficient algorithms for data processing and analysis</li>
                  <li>Develop and deploy machine learning models for various applications</li>
                  <li>Work with large-scale data using appropriate technologies and tools</li>
                  <li>Visualize and communicate data insights effectively</li>
                  <li>Understand and address ethical considerations in data science</li>
                  <li>Collaborate in multidisciplinary teams to solve complex problems</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Career Opportunities</h3>

                <p className="mb-4">
                  Graduates of the B.Tech in Data Science program can pursue careers in various roles such as:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Data Scientist</li>
                  <li>Machine Learning Engineer</li>
                  <li>Data Analyst</li>
                  <li>Business Intelligence Analyst</li>
                  <li>Data Engineer</li>
                  <li>AI Researcher</li>
                  <li>Data Visualization Specialist</li>
                  <li>Big Data Engineer</li>
                </ul>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Admission Requirements</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>10+2 with Mathematics, Physics, and Chemistry</li>
                    <li>Minimum 60% aggregate in qualifying examination</li>
                    <li>Valid score in JEE Main/State Engineering Entrance Examination</li>
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
            <div className="max-w-5xl mx-auto">
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
                      <table className="w-full">
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
                              <td className="py-3 text-slate-800 font-medium">{course.code}</td>
                              <td className="py-3 text-slate-700">{course.name}</td>
                              <td className="py-3 text-center text-slate-700">{course.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="2" className="py-3 text-right font-medium text-slate-700">
                              Total Credits:
                            </td>
                            <td className="py-3 text-center font-medium text-slate-800">
                              {semester.courses.reduce((sum, course) => sum + course.credits, 0)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
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
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Internship</h4>
                      <p className="text-slate-600">6-month mandatory internship in the 7th semester</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Capstone Project</h4>
                      <p className="text-slate-600">Two-semester project in the final year</p>
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
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Field Visits</h4>
                      <p className="text-slate-600">Industry visits and field trips throughout the program</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="syllabus" className="mt-6">
            <div className="bg-white rounded-lg shadow-sm border h-[800px]">
              <PdfViewer pdfUrl={syllabusUrl} title="B.Tech Data Science Curriculum" />
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
