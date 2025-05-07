import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Social Icons */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-lg flex flex-col align-middle font-semibold">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4 items-center text-center text-2xl">
              <a
                href="#"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Logo">
                <FaReact />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-2">JOIN OUR NEWSLETTER</h3>
            <form className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 w-64 rounded border border-gray-500 bg-gray-900 text-white placeholder-gray-400
                  hover:border-white focus:border-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-64 rounded border border-gray-500 bg-gray-900 text-white placeholder-gray-400
                  hover:border-white focus:border-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Nav Links */}
          <div>
            <ul className="flex flex-col items-end gap-2 text-sm md:text-base">
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
