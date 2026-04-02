import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { propertyData } from '../mock';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Guest
            <span className="text-sky-600"> Reviews</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hear what our guests have to say about their unforgettable experiences
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-slate-600 font-semibold">5.0 Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {propertyData.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-sky-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Decorative Quote */}
              <div className="absolute -top-4 -right-4 text-sky-100 group-hover:text-sky-200 transition-colors">
                <Quote size={120} fill="currentColor" />
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Reviewer Name */}
                <div className="pt-4 border-t border-sky-100">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-sky-600">Verified Guest</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg">
            Join our growing list of happy guests and create your own memories!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
