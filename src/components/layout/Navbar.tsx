import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">MyLogo</a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
