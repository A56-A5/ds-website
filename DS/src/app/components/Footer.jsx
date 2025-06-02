import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 text-center relative z-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-lg tracking-widest font-semibold uppercase">CHRIST COLLEGE OF ENGINEERING</div>
        <div className="text-2xl font-bold italic mb-2">DEPARTMENT OF DATA SCIENCE</div>
        <div className="w-16 border-t-2 border-purple-300 my-2" />
        <div className="mt-2 mb-3 text-base">Connect with us:</div>
        <div className="flex space-x-4 justify-center mb-2">
          <a href="#" aria-label="Facebook" className="bg-white text-purple-900 rounded-full p-2 hover:bg-purple-700 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={22} />
          </a>
          <a href="#" aria-label="Twitter" className="bg-white text-purple-900 rounded-full p-2 hover:bg-purple-700 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="bg-white text-purple-900 rounded-full p-2 hover:bg-purple-700 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} />
          </a>
          <a href="#" aria-label="YouTube" className="bg-white text-purple-900 rounded-full p-2 hover:bg-purple-700 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} />
          </a>
          <a href="#" aria-label="LinkedIn" className="bg-white text-purple-900 rounded-full p-2 hover:bg-purple-700 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={22} />
          </a>
        </div>
        <div className="text-xs text-purple-200 mt-2">© {new Date().getFullYear()} Department of Data Science. All rights reserved.</div>
      </div>
    </footer>
  );
} 