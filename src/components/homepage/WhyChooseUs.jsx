import { CheckCircle, Shield, Sparkles } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] text-[var(--text-main)] border-y border-[var(--border-color)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text-main)]">
            Why Choose QurbaniHat?
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Your trusted partner for premium Qurbani animals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--accent)] transition-all duration-300 group-hover:scale-105">
              <CheckCircle className="w-8 h-8 text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-main)]">Verified Sellers</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              All sellers are thoroughly vetted to ensure quality and
              reliability
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--accent)] transition-all duration-300 group-hover:scale-105">
              <Shield className="w-8 h-8 text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-main)]">Health Guaranteed</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Every animal comes with health certification and vaccination
              records
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[var(--accent)] transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-8 h-8 text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-main)]">Easy Booking</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Simple online booking process with instant confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;