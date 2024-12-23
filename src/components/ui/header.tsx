import { useState } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-full justify-between px-4 sm:px-16 h-40 items-center bg-white shadow-md">
      {/* Logo and Title */}
      <Link to="/home" className="flex items-center space-x-4">
        <Img src="../images/logo.png" alt="Logo" width={250} height={250} />
      </Link>
      
      {/* Hamburger Icon for mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black bg-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu (desktop) */}
      <nav className="sm:flex items-center space-x-8 hidden">
        <a href="/home" className="text-gray-900 hover:text-green-700 text-xl">
          Home
        </a>
        <a href="/about" className="text-gray-900 hover:text-gray-700 text-xl">
          About
        </a>
        <a href="/gallery" className="text-gray-900 hover:text-gray-700 text-xl">
          Gallery
        </a>
        <a href="/contact" className="text-gray-900 hover:text-gray-700 text-xl">
          Contact
        </a>
        {/* <a href="/basket" className="size-icon">
          <Img src="../images/basket.jpg" alt="Basket" width={30} height={30} />
        </a> */}
      </nav>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-2 w-full bg-white shadow-md`}>
        <nav className="flex flex-col items-start space-y-4 px-4 py-2">
          <a href="/home" className="text-gray-900 hover:text-green-700">
            Home
          </a>
          <a href="/about" className="text-gray-900 hover:text-gray-700">
            About
          </a>
          <a href="/gallery" className="text-gray-900 hover:text-gray-700">
            Gallery
          </a>
          <a href="/contact" className="text-gray-900 hover:text-gray-700">
            Contact
          </a>
          <a href="/basket" className="size-icon">
            <Img src="../images/basket.jpg" alt="Basket" width={30} height={30} />
          </a>
        </nav>
      </div>
    </div>
  );
}
