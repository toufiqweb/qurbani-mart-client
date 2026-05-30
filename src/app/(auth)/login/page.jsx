"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here with your backend/auth provider
    console.log("Submitting login info:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 p-8 rounded-2xl border bg-[var(--bg-secondary)] border-[var(--border-color)] shadow-xl">
        
        {/* Header / Brand Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 group mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)] font-bold text-xl">Q</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">QurbaniHat</span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-main)]">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Log in to manage your bookings or livestock listings
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-[var(--text-main)]">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[var(--text-muted)]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-main)] placeholder-stone-400 focus:ring-[var(--accent)] focus:border-transparent"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text-main)]">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium transition-colors text-[var(--accent)] hover:text-[var(--accent-hover)]"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--text-muted)]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-main)] placeholder-stone-400 focus:ring-[var(--accent)] focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full flex justify-center items-center py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)]"
          >
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-[var(--text-muted)]">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="font-semibold transition-colors text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;