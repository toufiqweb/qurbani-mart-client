import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                <span className="text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)] font-bold text-xl">Q</span>
              </div>
              <span className="text-xl font-semibold text-[var(--text-main)]">QurbaniHat</span>
            </Link>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Your trusted platform for booking premium Qurbani animals online.
              We connect you with verified sellers offering healthy,
              well-maintained livestock.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-main)]">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                <Mail className="w-5 h-5 text-[var(--accent)]" />
                <span>toufiqalahe.dev@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                <Phone className="w-5 h-5 text-[var(--accent)]" />
                <span>+880 1798-800096</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)]">
                <MapPin className="w-5 h-5 text-[var(--accent)]" />
                <span>Chuadanga, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-main)]">Follow Us</h3>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--bg-secondary)] dark:hover:text-[var(--color-neutral-light)]"
              >
                <LuFacebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--bg-secondary)] dark:hover:text-[var(--color-neutral-light)]"
              >
                <LuTwitter className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--bg-secondary)] dark:hover:text-[var(--color-neutral-light)]"
              >
                <LuInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t text-center text-sm border-[var(--border-color)] text-[var(--text-muted)]">
          <p>
            &copy; 2026 QurbaniHat. All rights reserved. | Made with dedication
            for the Muslim community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;