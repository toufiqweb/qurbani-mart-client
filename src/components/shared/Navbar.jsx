"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
            Q
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">QurbaniHat</h1>
            <p className="text-xs text-gray-500">
              Trusted Livestock Marketplace
            </p>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-emerald-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="font-medium text-gray-700 hover:text-emerald-600"
              >
                All Animals
              </Link>
            </li>
          </ul>
          <Button variant="light" className="font-medium text-gray-700">
            Login
          </Button>

          <Button variant="solid" className="bg-emerald-600 p-2 rounded-full px-4 font-medium text-white hover:bg-emerald-700">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>

          <svg
            className="h-7 w-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            <li>
              <Link href="#" className="block rounded-lg py-3 text-gray-700">
                Home
              </Link>
            </li>

            <li>
              <Link href="#" className="block rounded-lg py-3 text-gray-700">
                All Animals
              </Link>
            </li>

            <li>
              <Link href="#" className="block rounded-lg py-3 text-gray-700">
                Categories
              </Link>
            </li>

            <li>
              <Link href="#" className="block rounded-lg py-3 text-gray-700">
                About
              </Link>
            </li>

            <div className="mt-4 flex flex-col gap-3">
              <Button variant="bordered" className="w-full border-gray-300">
                Login
              </Button>

              <Button className="w-full bg-emerald-600 text-white">
                Register
              </Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default App;
