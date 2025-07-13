import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Hero images array with your uploaded photos
  const heroImages = [
    {
      src: "/attached_assets/IMG-20250710-WA0038_1752414314417.jpg",
      alt: "Professional style consultation - elegant portrait"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0039_1752414314417.jpg",
      alt: "Style confidence - elegant black and white portrait"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0040_1752414314417.jpg",
      alt: "Confident styling - natural beauty portrait"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0041_1752414314417.jpg",
      alt: "Style transformation - green professional outfit"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0042_1752414314417.jpg",
      alt: "Wardrobe confidence - outdoor casual style"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0043_1752414314417.jpg",
      alt: "Personal style journey - elegant modern look"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0044_1752414314417.jpg",
      alt: "Professional styling - denim fashion confidence"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0045_1752414314417.jpg",
      alt: "Style consultation success - café setting"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0046_1752414314417.jpg",
      alt: "Confident fashion choices - sunglasses style"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0047_1752414314417.jpg",
      alt: "Wardrobe transformation - blue patterned outfit"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0048_1752414314417.jpg",
      alt: "Professional style - car interior portrait"
    },
    {
      src: "/attached_assets/IMG-20250710-WA0049_1752414314417.jpg",
      alt: "Style confidence - professional braided hairstyle"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-[60px] py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col w-full lg:w-[546px] items-start gap-4 sm:gap-6 text-center lg:text-left">
        <h2 className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-black leading-tight">
          Discover Your Confident Style
        </h2>

        <p className="font-sans font-normal text-black text-base sm:text-lg max-w-full lg:max-w-[395px]">
          Transform your wardrobe and boost your confidence in just 6 weeks.
          Learn how to create a wardrobe that fits your lifestyle and reflects
          your best self.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            variant="outline"
            className="h-10 sm:h-12 px-4 sm:px-6 rounded-md border border-solid border-black bg-transparent text-black font-normal text-base sm:text-lg hover:bg-black hover:text-white transition-colors"
            onClick={() => {
              const signUpSection = document.getElementById('sign-up-form');
              signUpSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Sign Up
          </Button>

          <Button
            variant="outline"
            className="h-10 sm:h-12 px-4 sm:px-6 rounded-md border border-solid border-black bg-transparent text-black font-normal text-base sm:text-lg hover:bg-black hover:text-white transition-colors"
            onClick={() => {
              const overwhelmedSection = document.getElementById('why-it-matters');
              overwhelmedSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="mt-8 lg:mt-0 w-full lg:w-auto flex justify-center">
        <Carousel 
          setApi={setApi}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[741px]"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  className="w-full h-[350px] sm:h-[450px] md:h-[650px] lg:h-[800px] object-cover rounded-lg shadow-lg"
                  alt={image.alt}
                  src={image.src}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};
