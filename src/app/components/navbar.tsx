"use client";
import Image from "next/image";
import Link from "next/link";
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
  ]);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle the search bar
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Toggle the cart dropdown
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Toggle the user dropdown
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setIsSearchOpen(false); // Close search bar after submission
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-6 lg:px-16 h-16">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Avion</h3>

        {/* Menu Links */}
        <ul className="flex space-x-6 font-Montserrat text-sm text-gray-600">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon and Input */}
          <div className="relative">
            <button onClick={toggleSearch} className="focus:outline-none">
              <Image src={search} alt="search" width={16} height={16} />
            </button>
            {isSearchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute top-10 right-0 bg-white p-2 shadow-md rounded-md"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="p-1 border border-gray-300 rounded-md"
                />
                <button type="submit" className="ml-2 text-sm text-blue-600">
                  Go
                </button>
              </form>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button onClick={toggleUserMenu} className="focus:outline-none">
              <Image src={user} alt="user" width={16} height={16} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute top-10 right-0 bg-white p-2 shadow-md rounded-md">
                <ul className="space-y-2">
                  <li>
                    <Link href="/profile" className="text-sm text-gray-600">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button className="text-sm text-gray-600">Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon and Dropdown */}
          <div className="relative">
            <button onClick={toggleCart} className="focus:outline-none">
              <div className="relative">
                <Image src={cart} alt="cart" width={16} height={16} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </button>
            {isCartOpen && (
              <div className="absolute top-10 right-0 bg-white p-4 shadow-md rounded-md w-64">
                <h3 className="font-semibold text-lg mb-4">Cart</h3>
                {cartItems.length > 0 ? (
                  <ul className="space-y-2">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">Your cart is empty.</p>
                )}
              </div>
            )}
          </div>

          {/* Mail Notification */}
          <div className="relative">
            <button className="focus:outline-none">
              <div className="relative">
                <Image src={mail} alt="mail" width={16} height={16} />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

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
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="bg-[#bebebe] text-white flex flex-col items-center py-4 space-y-3"
        >
          <ul className="space-y-2 font-Montserrat text-base text-black">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="text-sm text-black font-Montserrat"
            aria-label="Close mobile menu"
          >
            - Close Menu -
          </button>
        </div>
      )}
    </nav>
  );
}
