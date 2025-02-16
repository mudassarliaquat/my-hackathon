"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-[91px] px-6 sm:px-6 md:px-8 lg:px-10 relative">
      <nav className="w-full h-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Avion
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="font-semibold text-sm text-[#737373]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-sm text-[#737373]">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="font-semibold text-sm text-[#737373]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-sm text-[#737373]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-8 mt-4">
          <Link href="/login" className="font-semibold text-sm text-[#23A6F0]">
            Login
          </Link>
          <Link
            href="/learn-more"
            className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]"
          >
            Become a Member
            <svg
              className="w-[12px] h-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 10"
              fill="none"
              stroke="#FFFFFF"
            >
              <path d="M2 5h8M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#252B42]"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 p-4 z-50"
        >
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={closeMenu}
              className="bg-[#252B42] text-white rounded-full p-2"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="font-semibold text-sm text-[#737373]"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-semibold text-sm text-[#737373]"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="font-semibold text-sm text-[#737373]"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-sm text-[#737373]"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="font-semibold text-sm text-[#23A6F0]"
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/learn-more"
                className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]"
                onClick={closeMenu}
              >
                Become a Member
                <svg
                  className="w-[12px] h-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="#FFFFFF"
                >
                  <path d="M2 5h8M5 2l3 3-3 3" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}














