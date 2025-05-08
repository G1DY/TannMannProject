import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2b2f3a] text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo + Social */}
          <div className="flex flex-col items-start gap-6">
            <img src="#" alt="Logo" className="w-12" /> {/* Optional logo */}
            <div>
              <h3 className="text-md font-semibold mb-3">Follow Us</h3>
              <div className="flex flex-col gap-3 text-xl">
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Center: Newsletter */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">JOIN OUR NEWSLETTER</h3>
            <form className="flex flex-col gap-3 w-full max-w-xs">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right: Navigation */}
          <div className="text-right">
            <ul className="flex flex-col gap-2 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
