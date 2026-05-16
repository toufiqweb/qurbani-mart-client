import { qurbaniTips } from "@/lib/data/homepageData";
import { Calendar, Clock, Heart, Users } from "lucide-react";
import React from "react";

const QurbaniGuidlines = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Essential Qurbani Guidelines
          </h2>
          <p className="text-lg text-stone-600">
            Important information to help you make the right choice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qurbaniTips.map((tip) => {
            const Icon =
              tip.icon === "Calendar"
                ? Calendar
                : tip.icon === "Heart"
                  ? Heart
                  : tip.icon === "Users"
                    ? Users
                    : Clock;
            return (
              <div
                key={tip.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-stone-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QurbaniGuidlines;
