import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-[#2b2f3a] text-white py-3 px-6 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="#" alt="Logo" className="w-12 h-12" />
          </div>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Profile
              </a>
            </li>
          </ul>

          {/* Sign Out */}
          <button className="hidden md:block bg-white text-black text-xs font-bold px-4 py-2 rounded hover:bg-gray-200">
            SIGN OUT
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-4">
            <a href="#" className="block hover:text-red-400">
              Home
            </a>
            <a href="#" className="block hover:text-red-400">
              Cart
            </a>
            <a href="#" className="block hover:text-red-400">
              Profile
            </a>
            <button className="w-full bg-white text-black text-xs font-bold px-4 py-2 rounded hover:bg-gray-200 mt-2">
              SIGN OUT
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
