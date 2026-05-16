import { testimonials } from "@/lib/data/homepageData";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-stone-600">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-linear-to-br from-white to-stone-50 rounded-2xl p-6 border border-stone-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-stone-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-stone-600">
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
