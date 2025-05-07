const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 py-y">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Newsletter Section */}
          <div className="flex-1 flex flex-col">
            <div className="font-bold text-center justify-center mb-2">
              JOIN OUR NEWS LETTER
            </div>
            <form className="flex flex-col items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 w-80 rounded border border-gray-500 bg-gray-900 text-white placeholder-gray-400
                 hover:border-white focus:border-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-80 rounded border border-gray-500 bg-gray-900 text-white placeholder-gray-400
                 hover:border-white focus:border-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="">
            <nav>
              <ul className="flex flex-col items-end gap-4 text-lg">
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
