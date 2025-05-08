import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2b2f3a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/*Socials and Logo */}
          <div className="flex flex-col items-start gap-4 lg:w-1/3">
            <div className="items-center text-center flex justify-center">
              <img src="/logo.png" alt="Logo" className="w-14" />
            </div>

            <div className="flex gap-4 flex-row sm:items-center text-3xl sm:flex-col text-center lg:text-right">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3 text-center lg:text-left">
              JOIN OUR NEWSLETTER
            </h3>
            <form className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 hover:bg-gray-800 focus:ring-blue-500 focus:outline-none w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 hover:bg-gray-800 focus:ring-blue-500 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 lg:w-1/4 text-sm sm:text-base text-center lg:text-right">
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Careers
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TannMannGaadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
