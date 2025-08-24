import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const UnlockWardrobePotentialSection = (): JSX.Element => {
  const wardrobeTips = [
    {
      number: "01",
      image: "/figmaAssets/lifestyle.jpg",
      title: "Align your wardrobe with your lifestyle.",
      description:
        "Learn to curate outfits that fit your daily routine, whether for work, play, or relaxation.",
    },
    {
      number: "02",
      image: "/figmaAssets/organise.jpg",
      title: "Organize your closet for stress-free mornings",
      description:
        "Transform chaos into order with simple, effective organization techniques.",
    },
    {
      number: "03",
      image: "/figmaAssets/master.jpg",
      title: "Master the art of mixing and matching",
      description:
        "Create endless outfit combinations with fewer pieces by understanding color coordination and style compatibility.",
    },
    {
      number: "04",
      image: "/figmaAssets/capsule.jpg",
      title: "Build a capsule wardrobe that works",
      description:
        "Invest in versatile, high-quality pieces that can be styled multiple ways for maximum impact and value.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-8 sm:gap-12 md:gap-16 lg:gap-[74px] px-4 sm:px-6 md:px-8 lg:px-[60px] py-8 sm:py-12 md:py-16">
      <h2 className="w-full max-w-[621px] [font-family:'Literata',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-[54px] tracking-[0] leading-tight">
        Unlock Your Wardrobe's Potential
      </h2>

      <div className="w-full">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 sm:-ml-4">
            {wardrobeTips.map((tip, index) => (
              <CarouselItem key={`tip-${index}`} className="pl-2 sm:pl-4 basis-full sm:basis-auto">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-[41px] min-w-fit">
                  <img
                    className="w-full sm:w-[200px] md:w-[240px] lg:w-[276px] h-[200px] sm:h-[200px] md:h-[240px] lg:h-[276px] object-cover rounded-lg shadow-md"
                    alt={`Wardrobe tip ${tip.number} image`}
                    src={tip.image}
                  />

                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col w-full sm:w-[300px] md:w-[380px] lg:w-[446px] items-start gap-4 sm:gap-5 md:gap-6 lg:gap-[29px] p-0">
                      <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-4xl sm:text-5xl md:text-6xl lg:text-[80.2px] text-center tracking-[0] leading-normal">
                        {tip.number}
                      </div>

                      <div className="relative w-full sm:w-[300px] md:w-[380px] lg:w-[446px] h-[13px]">
                        <div className="absolute w-[calc(100%-13px)] h-[13px] top-0 left-0">
                          <Separator className="absolute w-[calc(100%-22px)] h-0.5 top-1.5 left-[11px] bg-black" />
                          <div className="absolute w-[13px] h-[13px] top-0 left-0 rounded-[6.5px] border-2 border-solid border-black" />
                        </div>
                        <div className="absolute w-[13px] h-[13px] top-0 right-0 rounded-[6.5px] border-2 border-solid border-black" />
                      </div>

                      <h3 className="w-full sm:w-[300px] md:w-[360px] lg:w-[387px] [font-family:'Literata',Helvetica] font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-[31px] tracking-[0] leading-normal">
                        {tip.title}
                      </h3>

                      <p className="w-full sm:w-[300px] md:w-[360px] lg:w-[387px] [font-family:'Montserrat',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-normal">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4" />
          <CarouselNext className="right-2 sm:right-4" />
        </Carousel>
      </div>
    </section>
  );
};
