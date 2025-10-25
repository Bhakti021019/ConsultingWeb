"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
  {/* Logo Image */}
  <img
    src="/Logo.jpeg" // Path to your logo
    alt="BharatCDX Logo"
    width={40}      // adjust size as needed
    height={40}
    className="rounded-full" // optional styling
  />
  {/* Text */}
  <span className="text-2xl font-bold text-blue-700">Consulting</span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="block px-6 py-3 hover:bg-gray-100">Home</Link>
          <Link href="/services" className="block px-6 py-3 hover:bg-gray-100">Services</Link>
          <Link href="/about" className="block px-6 py-3 hover:bg-gray-100">About</Link>
          <Link href="/team" className="block px-6 py-3 hover:bg-gray-100">Teams</Link>
          <Link href="/blog" className="block px-6 py-3 hover:bg-gray-100">Insights</Link>
          <Link href="/contact" className="block px-6 py-3 hover:bg-gray-100">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/" className="block px-6 py-3 hover:bg-gray-100">Home</Link>
          <Link href="/services" className="block px-6 py-3 hover:bg-gray-100">Services</Link>
          <Link href="/about" className="block px-6 py-3 hover:bg-gray-100">About</Link>
          <Link href="/team" className="block px-6 py-3 hover:bg-gray-100">Teams</Link>
          <Link href="/blog" className="block px-6 py-3 hover:bg-gray-100">Insights</Link>
          <Link href="/contact" className="block px-6 py-3 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
}
