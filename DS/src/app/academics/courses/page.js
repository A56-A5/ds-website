export default function CoursesOffered() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-[#00293f]">Courses Offered</h1>
      <table className="w-full border-2 border-[#97d655] rounded-xl overflow-hidden shadow-lg">
        <thead className="bg-[#97d655] text-[#00293f]">
          <tr>
            <th className="p-3 text-left">Course Code</th>
            <th className="p-3 text-left">Course Name</th>
            <th className="p-3 text-left">Semester</th>
          </tr>
        </thead>
        <tbody className="bg-white text-[#00293f]">
          <tr>
            <td className="p-3">DS101</td>
            <td className="p-3">Introduction to Data Science</td>
            <td className="p-3">1</td>
          </tr>
          <tr>
            <td className="p-3">DS201</td>
            <td className="p-3">Statistics for Data Science</td>
            <td className="p-3">2</td>
          </tr>
          {/* Add more courses as needed */}
        </tbody>
      </table>
    </div>
  );
} 