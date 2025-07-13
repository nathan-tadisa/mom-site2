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
        '"This wardrobe transformation course completely changed how I approach getting dressed. I went from spending 30 minutes each morning to having everything flow effortlessly."',
      name: "Sarah Chen, Marketing Director",
      image: "/attached_assets/IMG-20250710-WA0045_1752414314417.jpg",
    },
    {
      id: 2,
      quote:
        '"I finally understand what works for my body type and lifestyle. The confidence I feel now radiates into every aspect of my life - both personal and professional."',
      name: "Maria Rodriguez, Teacher",
      image: "/attached_assets/IMG-20250710-WA0041_1752414314417.jpg",
    },
    {
      id: 3,
      quote:
        '"The best investment I\'ve made in myself. I used to dread shopping, but now I know exactly what to look for and feel excited about building my wardrobe."',
      name: "Jennifer Williams, Entrepreneur",
      image: "/attached_assets/IMG-20250710-WA0043_1752414314417.jpg",
    },
    {
      id: 4,
      quote:
        '"From chaos to clarity in just 6 weeks. My closet is now organized, and every piece works together. I feel put-together and confident every single day."',
      name: "Lisa Thompson, Consultant",
      image: "/attached_assets/IMG-20250710-WA0047_1752414314417.jpg",
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
                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-[62px]">
                      <img
                        className="w-[200px] sm:w-[220px] md:w-[246px] h-[200px] sm:h-[220px] md:h-[246px] object-cover rounded-full flex-shrink-0 shadow-md"
                        alt={`${testimonial.name} testimonial portrait`}
                        src={testimonial.image}
                      />
                      
                      {/* Vertical divider - hidden on mobile */}
                      <div className="hidden md:block w-0.5 h-[263.5px] bg-gray-300"></div>
                      
                      <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 max-w-full md:max-w-[516px] text-center md:text-left">
                        <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base sm:text-lg md:text-[22px] lg:text-[25.9px] leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
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
