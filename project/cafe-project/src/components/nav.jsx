import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-brown-600">
            Coffee<span className="text-orange-500">Hub</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <a href="#" className="text-gray-800 hover:text-orange-500 text-xl">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 text-xl">
              Menu
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 text-xl">
              Orders
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 text-xl">
              Contact
            </a>
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
          <a
            href="#"
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Menu
          </a>
          <a
            href="#"
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Orders
          </a>
          <a
            href="#"
            className="block text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Contact
          </a>
          <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
