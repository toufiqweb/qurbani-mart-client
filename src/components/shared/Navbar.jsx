"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>

            <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              QurbaniMart
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-stone-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/animals"
              className="text-stone-700 hover:text-emerald-600 transition-colors"
            >
              All Animals
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg transition-all"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-700" />
            ) : (
              <Menu className="w-6 h-6 text-stone-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
              >
                Home
              </Link>

              <Link
                href="/animals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
              >
                All Animals
              </Link>

              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
