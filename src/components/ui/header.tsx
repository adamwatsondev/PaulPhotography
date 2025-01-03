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
    <div className="flex w-full justify-between px-4 sm:px-24 h-28 items-center bg-white shadow-md">
      {/* Logo and Title */}
      <Link to="/" className="hidden sm:block items-center space-x-4">
        <Img
          src="../images/Assets/logo.png"
          alt="Logo"
          width={250}
          height={250}
        />
      </Link>

      {/* Hamburger Icon for mobile */}
      <div className="sm:hidden flex w-full justify-center items-center">
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
      <nav className="sm:flex items-center space-x-16 hidden">
        <a
          href="/"
          className="text-black hover:underline hover:underline-offset-4 font-old-standard font-bold hover:text-gray-400 text-2xl"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400 text-2xl"
        >
          About
        </a>
        <a
          href="/galleries"
          className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400 text-2xl"
        >
          Galleries
        </a>
        <a
          href="/contact"
          className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400 text-2xl"
        >
          Contact
        </a>
        {/* <a href="/basket" className="size-icon">
          <Img src="../images/basket.jpg" alt="Basket" width={30} height={30} />
        </a> */}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-2 w-full bg-white shadow-md`}
      >
        <nav className="flex flex-col items-start space-y-4 px-4 py-2">
          <a
            href="/"
            className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400"
          >
            About
          </a>
          <a
            href="/galleries"
            className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400"
          >
            Galleries
          </a>
          <a
            href="/contact"
            className="text-black font-old-standard hover:underline hover:underline-offset-4 font-bold hover:text-gray-400"
          >
            Contact
          </a>
          {/* <a href="/basket" className="size-icon">
            <Img src="../images/basket.jpg" alt="Basket" width={30} height={30} />
          </a> */}
        </nav>
      </div>
    </div>
  );
}
