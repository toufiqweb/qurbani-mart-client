import { testimonials } from "@/lib/data/homepageData";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text-main)]">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl bg-[var(--bg-secondary)] border-[var(--border-color)]"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[var(--text-main)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;