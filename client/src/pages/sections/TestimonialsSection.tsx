import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content: "This wardrobe consultation completely transformed how I approach getting dressed. I now feel confident and put-together every single day.",
      avatar: "/figmaAssets/avatar-1.jpg"
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Entrepreneur",
      content: "The personalized style guidance helped me build a capsule wardrobe that saves me time and always looks professional.",
      avatar: "/figmaAssets/avatar-2.jpg"
    },
    {
      id: 3,
      name: "Jessica Rodriguez",
      role: "Teacher",
      content: "I love how my new wardrobe reflects my personality while still being practical for my busy lifestyle. Best investment I've made!",
      avatar: "/figmaAssets/avatar-3.jpg"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="flex flex-col w-full px-8 md:px-[80px] py-16 gap-12">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-black text-[48px] md:text-[54px] tracking-[0] leading-tight mb-4">
          What Our Clients Say
        </h2>
        <p className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg max-w-2xl mx-auto">
          Discover how our style consultation has transformed the confidence and wardrobes of women just like you.
        </p>
      </div>

      {/* Testimonials Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex gap-6 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`flex-shrink-0 w-full transition-all duration-300 border-none shadow-lg ${
                index === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-100 scale-95'
              }`}
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23f0f0f0'/%3E%3Ctext x='32' y='38' text-anchor='middle' font-family='Arial' font-size='24' fill='%23999'%3E${testimonial.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <h3 className="[font-family:'Literata',Helvetica] font-medium text-black text-xl mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
                <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full p-0 transition-all duration-200 ${
                index === activeTestimonial 
                  ? 'bg-black hover:bg-black' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg"
          onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
          aria-label="Previous testimonial"
        >
          ←
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg"
          onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
          aria-label="Next testimonial"
        >
          →
        </Button>
      </div>
    </section>
  );
};
