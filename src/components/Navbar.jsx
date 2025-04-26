import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">My Portfolio</h1>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Services
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Services
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
