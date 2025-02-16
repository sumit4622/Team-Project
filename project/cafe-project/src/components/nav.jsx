import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    navigate(`/${section}`); // Updates the URL
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-brown-600 "
            onClick={() => handleNavClick("home")}
          >
            Coffee
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              Hub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-orange-500 text-xl"
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="menu"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-orange-500 text-xl"
              onClick={() => handleNavClick("menu")}
            >
              Menu
            </Link>
            <Link
              to="orders"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-orange-500 text-xl"
              onClick={() => handleNavClick("orders")}
            >
              Orders
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-orange-500 text-xl"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 space-y-2 shadow-md">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavClick("home")}
          >
            Home
          </Link>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavClick("menu")}
          >
            Menu
          </Link>
          <Link
            to="orders"
            smooth={true}
            duration={500}
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavClick("orders")}
          >
            Orders
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Link>
          <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
