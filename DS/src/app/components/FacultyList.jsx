export default function FacultyList() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Head of Department</h2>
      <div className="mb-12 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center bg-purple-100 rounded-2xl p-8 shadow-lg w-full max-w-xl">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Dr. Priya Sharma"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-300 mb-4"
          />
          <div className="text-center">
            <strong className="text-xl">Dr. Priya Sharma</strong> – Professor & Head of Department
            <p className="mt-2">Expert in machine learning, data mining, and AI ethics.</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Faculty Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Dr. Rahul Mehta"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Rahul Mehta</strong> – Associate Professor
            <p>Focus: Big data analytics, cloud computing.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Dr. Ananya Singh"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Ananya Singh</strong> – Assistant Professor
            <p>Focus: Natural language processing, data visualization.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Dr. Vikram Patel"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Vikram Patel</strong> – Assistant Professor
            <p>Focus: Deep learning, computer vision.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/women/22.jpg"
            alt="Dr. Meera Kapoor"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Meera Kapoor</strong> – Assistant Professor
            <p>Focus: Statistical learning, time series analysis.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/men/67.jpg"
            alt="Dr. Arjun Reddy"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Arjun Reddy</strong> – Assistant Professor
            <p>Focus: Reinforcement learning, robotics.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
          <img
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt="Dr. Sneha Gupta"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <strong>Dr. Sneha Gupta</strong> – Assistant Professor
            <p>Focus: Data mining, pattern recognition.</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Students (Previous Batches)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-green-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Batch 2024–2028</h3>
          <p className="mb-2">First batch of Data Science undergraduates. Known for their pioneering projects and strong community spirit.</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Aarav Patel - ML Research Intern at Google</li>
            <li>Sneha Reddy - Data Analyst at Microsoft</li>
            <li>Vikram Joshi - AI Engineer at Amazon</li>
            <li>Priya Desai - Research Assistant at IIT</li>
            <li>Rohan Gupta - Data Scientist at IBM</li>
          </ul>
        </div>
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Batch 2023–2027</h3>
          <p className="mb-2">Innovative thinkers and active participants in national hackathons.</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Meera Nair - AI Research Intern at Meta</li>
            <li>Rohan Gupta - Data Engineer at Flipkart</li>
            <li>Priya Desai - ML Engineer at Adobe</li>
            <li>Arjun Singh - Research Scholar at Stanford</li>
            <li>Ananya Sharma - Data Analyst at Paytm</li>
          </ul>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Batch 2022–2026</h3>
          <p className="mb-2">Known for their exceptional research papers and industry collaborations.</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Rahul Verma - Senior Data Scientist at Uber</li>
            <li>Neha Kapoor - AI Research Lead at Intel</li>
            <li>Aditya Sharma - ML Engineer at Twitter</li>
            <li>Pooja Patel - Data Science Lead at Swiggy</li>
            <li>Karan Malhotra - Research Scientist at NVIDIA</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 