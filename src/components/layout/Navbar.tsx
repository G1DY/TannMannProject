const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#2b2f3a] text-white py-3 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="#" alt="Logo" className="w-12 h-12" />{' '}
          </div>

          {/* Navigation Links */}
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

          {/* Sign Out Button */}
          <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded hover:bg-gray-200">
            SIGN OUT
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
