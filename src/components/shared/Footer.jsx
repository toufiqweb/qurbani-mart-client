import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-stone-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>

              <span className="text-xl font-semibold">QurbaniHat</span>
            </Link>

            <p className="text-stone-300 text-sm leading-relaxed">
              Your trusted platform for booking premium Qurbani animals online.
              We connect you with verified sellers offering healthy,
              well-maintained livestock.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-stone-300 text-sm">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>toufiqalahe.dev@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 text-stone-300 text-sm">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+880 1798-800096</span>
              </div>

              <div className="flex items-center space-x-3 text-stone-300 text-sm">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Chuadanga , Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-stone-700 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              >
                <LuFacebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-stone-700 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              >
                <LuTwitter className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-stone-700 hover:bg-emerald-600 flex items-center justify-center transition-colors"
              >
                <LuInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400 text-sm">
          <p>
            &copy; 2026 QurbaniMart. All rights reserved. | Made with dedication
            for the Muslim community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
