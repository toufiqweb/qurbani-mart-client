import { qurbaniTips } from "@/lib/data/homepageData";
import { Calendar, Clock, Heart, Users } from "lucide-react";
import React from "react";

const QurbaniGuidelines = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-(--bg-primary) transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-(--text-main)">
            Essential Qurbani Guidelines
          </h2>
          <p className="text-lg text-(--text-muted)">
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
                className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl bg-(--bg-secondary) border-(--border-color)"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-(--accent)">
                  {/* Icon color is set to primary light in dark mode to stay readable on dark backgrounds */}
                  <Icon className="w-6 h-6 text-[var(--bg-secondary)] dark:text-[var(--color-neutral-light)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-(--text-main)">
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed text-(--text-muted)">
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

export default QurbaniGuidelines;