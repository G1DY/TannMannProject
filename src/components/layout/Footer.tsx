const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3">
          <div className="font-bold">JOIN OUR NEWS LETTER</div>
          <nav className="flex justify-center gap-6 text-sm">
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
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
