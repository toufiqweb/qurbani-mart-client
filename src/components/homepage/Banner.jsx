import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Dynamic Background Pattern Overlays */}
      <div
        className="absolute inset-0 bg-linear-to-br from-emerald-50 via-stone-50 to-amber-50 dark:from-transparent dark:via-transparent dark:to-transparent opacity-100 dark:opacity-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark Mode Specific SVG Grid Overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236FCF97' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div
            className="inline-flex items-center space-x-2 backdrop-blur-md px-4 py-2 rounded-full mb-6 border transition-all duration-500 shadow-xs hover:shadow-md animate-bounce-slow relative overflow-hidden group/badge"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
            }}
          >
            {/* Shimmer Effect (হালকা গ্লো পাসিং অ্যানিমেশন) */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/20 dark:via-white/5 to-transparent" />

            {/* Glow Border Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 blur-md pointer-events-none -z-10"
              style={{ backgroundColor: "var(--color-primary-light)" }}
            />

            <Sparkles
              className="w-4 h-4 animate-spin-slow"
              style={{ color: "var(--color-primary-mid)" }}
            />

            <span
              className="text-sm font-medium tracking-wide relative z-10 transition-colors duration-300 group-hover/badge:text-[var(--color-primary-dark)] dark:group-hover/badge:text-[var(--color-primary-light)]"
              style={{ color: "var(--text-muted)" }}
            >
              Trusted by 10,000+ families
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight transition-colors"
            style={{ color: "var(--text-main)" }}
          >
            Find Your Perfect{" "}
            <span
              className="bg-clip-text text-transparent bg-linear-to-r select-none"
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-primary-mid), var(--color-primary-light))`,
              }}
            >
              Qurbani Animal
            </span>{" "}
            Online
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto transition-colors font-normal opacity-90"
            style={{ color: "var(--text-muted)" }}
          >
            Browse premium livestock from verified sellers. Healthy,
            well-maintained animals delivered with complete transparency and
            trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/animals"
              className="group w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/10 dark:shadow-none hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--accent)",
              }}
            >
              <span>Browse Animals</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="#why-choose"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border backdrop-blur-md transition-all duration-300 shadow-xs hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
                color: "var(--text-main)",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
