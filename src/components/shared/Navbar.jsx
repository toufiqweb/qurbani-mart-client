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
        isScrolled
          ? "border-b backdrop-blur-md shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--bg-secondary)" : "transparent",
        opacity: isScrolled ? 0.95 : 1,
        borderColor: isScrolled ? "var(--border-color)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span className="text-white font-bold text-xl">Q</span>
            </div>

            <span 
              className="text-xl font-bold tracking-wide transition-colors"
              style={{ color: "var(--accent)" }}
            >
              QurbaniMart
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium transition-colors"
              style={{ color: "var(--text-main)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-primary-mid)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-main)")}
            >
              Home
            </Link>

            <Link
              href="/animals"
              className="font-medium transition-colors"
              style={{ color: "var(--text-main)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-primary-mid)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-main)")}
            >
              All Animals
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="font-medium transition-colors"
                style={{ color: "var(--text-main)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-primary-mid)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-main)")}
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-6 py-2 rounded-full font-medium text-white shadow-xs hover:shadow-md transition-all duration-200"
                style={{ backgroundColor: "var(--accent)" }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--accent-hover)")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--accent)")}
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-main)" }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 rounded-2xl mt-2 shadow-xl border transition-all"
            style={{ 
              backgroundColor: "var(--bg-secondary)", 
              borderColor: "var(--border-color)" 
            }}
          >
            <div className="flex flex-col space-y-3 px-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium transition-colors py-2 border-b"
                style={{ color: "var(--text-main)", borderColor: "var(--border-color)" }}
              >
                Home
              </Link>

              <Link
                href="/animals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium transition-colors py-2 border-b"
                style={{ color: "var(--text-main)", borderColor: "var(--border-color)" }}
              >
                All Animals
              </Link>

              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium transition-colors py-2"
                style={{ color: "var(--text-main)" }}
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 rounded-full font-medium text-white text-center transition-colors"
                style={{ backgroundColor: "var(--accent)" }}
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