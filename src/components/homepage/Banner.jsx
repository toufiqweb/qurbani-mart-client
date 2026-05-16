import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-linear-to-br from-emerald-50 via-stone-50 to-amber-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-200/50">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-stone-700">
              Trusted by 10,000+ families
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="bg-linear-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Qurbani Animal
            </span>{" "}
            Online
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-stone-600 mb-8 leading-relaxed">
            Browse premium livestock from verified sellers. Healthy,
            well-maintained animals delivered with complete transparency and
            trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/animals"
              className="group px-8 py-4 rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Browse Animals</span>

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#why-choose"
              className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-stone-700 border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
