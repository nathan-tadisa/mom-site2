import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export const ReadyToTransformWardrobeSection = (): JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Enhanced testimonial data with diverse content
  const testimonials = [
    {
      id: 1,
      quote:
        `"It started with an inner transformation - I began to feel good about myself, my worth, and my appearance. This newfound confidence inspired me to take care of my looks and discover my personal style! I learned what to wear, what colors and styles suited my body type, and how to own my look! The result? A complete demeanor overhaul! I've been helped to  uncover my true identity in style  and I'm forever grateful!"`,
      name: "Nyasha, 27",
    },
    {
      id: 2,
      quote:
        `"Before I took the Ultimate Wardrobe Management course, I didn't know my body had a shape and I had to dress it accordingly. I didn't know that I too could be stylish as I always thought that style was for a select few. Through what I learnt in the course I am enjoying the process of learning about my type and what works and doesn't work for my body type. I am not yet fully there but I am striving to build a wardrobe that works for me. I recommend the course a 100%, you won't regret it."`,
      name: "Dr Nomutsa, 40yrs",
    },
    {
      id: 3,
      quote:
        '"The best investment I\'ve made in myself. I used to dread shopping, but now I know exactly what to look for and feel excited about building my wardrobe."',
      name: "Jennifer Williams, Entrepreneur",
    },
    {
      id: 4,
      quote:
        '"From chaos to clarity in just 6 weeks. My closet is now organized, and every piece works together. I feel put-together and confident every single day."',
      name: "Lisa Thompson, Consultant",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-[60px] relative">
      {/* Testimonials Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-[54px] tracking-[0] leading-tight mb-4 sm:mb-6">
          What Our Students Say
        </h2>
        <p className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
          Real transformations from women who took control of their style and confidence
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-6xl mx-auto">
        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center">
                      
                      <div className="text-center md:text-left p-6">
                        <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base sm:text-lg md:text-[22px] lg:text-[25.9px] leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                        <br />
                        <cite className="[font-family:'Montserrat',Helvetica] font-medium text-black text-base sm:text-lg md:text-[22px] lg:text-[25.9px] leading-normal not-italic">
                          — {testimonial.name}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="left-2 sm:left-4 md:left-0" />
          <CarouselNext className="right-2 sm:right-4 md:right-0" />
        </Carousel>

        {/* Enhanced Pagination */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-200 ${
                  index === current - 1 
                    ? "bg-black scale-110" 
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Current position indicator */}
          <div className="text-xs sm:text-sm [font-family:'Montserrat',Helvetica] text-gray-600">
            {current} of {count}
          </div>
        </div>
      </div>
    </section>
  );
};
