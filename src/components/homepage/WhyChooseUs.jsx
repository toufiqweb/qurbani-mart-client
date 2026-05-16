import { CheckCircle, Shield, Sparkles } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-stone-900 to-stone-800 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose QurbaniHat?
          </h2>
          <p className="text-lg text-stone-300">
            Your trusted partner for premium Qurbani animals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              All sellers are thoroughly vetted to ensure quality and
              reliability
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Guaranteed</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Every animal comes with health certification and vaccination
              records
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Simple online booking process with instant confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
