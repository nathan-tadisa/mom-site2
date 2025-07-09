import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ReadyToTransformWardrobeSection = (): JSX.Element => {
  // Testimonial data for carousel
  const testimonials = [
    {
      id: 1,
      quote:
        '"Rejoice\'s course changed my life. I feel confident every morning now."',
      name: "Rutendo, Real Estate Agent",
      image: "/figmaAssets/rectangle-31.svg",
      active: true,
    },
    {
      id: 2,
      quote:
        '"Rejoice\'s course changed my life. I feel confident every morning now."',
      name: "Rutendo, Real Estate Agent",
      image: "/figmaAssets/rectangle-31.svg",
      active: false,
    },
    {
      id: 3,
      quote:
        '"Rejoice\'s course changed my life. I feel confident every morning now."',
      name: "Rutendo, Real Estate Agent",
      image: "/figmaAssets/rectangle-31.svg",
      active: false,
    },
  ];

  return (
    <section className="w-full py-12 relative">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className={testimonial.active ? "" : "opacity-25"}
            >
              <Card className="border-none">
                <CardContent className="p-0">
                  <div className="flex items-center gap-[62px]">
                    <img
                      className="w-[246px] h-[321px] object-cover"
                      alt="Testimonial portrait"
                      src={testimonial.image}
                    />
                    <img
                      className="w-0.5 h-[263.5px]"
                      alt="Divider"
                      src="/figmaAssets/vector-4.svg"
                    />
                    <div className="flex flex-col items-start gap-[53px]">
                      <div className="w-[516px] font-['Montserrat',Helvetica] font-normal text-black text-[25.9px] leading-normal">
                        {testimonial.quote}
                      </div>
                      <div className="w-[512px] font-['Montserrat',Helvetica] font-medium text-black text-[25.9px] leading-normal">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-[23px] mb-2.5">
          <div className="flex gap-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-[7px] h-[7px] rounded-[3.68px] ${index === 1 ? "bg-black" : "bg-[#767676]"}`}
              />
            ))}
          </div>
        </div>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
};
