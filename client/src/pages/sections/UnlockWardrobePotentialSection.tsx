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
      image: "/figmaAssets/image-1.png",
      title: "Align your wardrobe with your lifestyle.",
      description:
        "Learn to curate outfits that fit your daily routine, whether for work, play, or relaxation.",
    },
    {
      number: "02",
      image: "/figmaAssets/image-1-1.png",
      title: "Organize your closet for stress-free mornings",
      description:
        "Transform chaos into order with simple, effective organization techniques.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[74px] px-[60px] py-0">
      <h2 className="w-[621px] [font-family:'Literata',Helvetica] font-normal text-black text-[54px] tracking-[0] leading-normal">
        Unlock Your Wardrobe&#39;s Potential
      </h2>

      <div className="w-full">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {wardrobeTips.map((tip, index) => (
              <CarouselItem key={`tip-${index}`} className="pl-4 basis-auto">
                <div className="flex items-start gap-[41px] min-w-fit">
                  <img
                    className="w-[276px] h-[349px] object-cover"
                    alt={`Wardrobe tip ${tip.number} image`}
                    src={tip.image}
                  />

                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col w-[446px] items-start gap-[29px] p-0">
                      <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[80.2px] text-center tracking-[0] leading-normal">
                        {tip.number}
                      </div>

                      <div className="relative w-[446px] h-[13px]">
                        <div className="absolute w-[433px] h-[13px] top-0 left-0">
                          <Separator className="absolute w-[422px] h-0.5 top-1.5 left-[11px] bg-black" />
                          <div className="absolute w-[13px] h-[13px] top-0 left-0 rounded-[6.5px] border-2 border-solid border-black" />
                        </div>
                        <div className="absolute w-[13px] h-[13px] top-0 left-[433px] rounded-[6.5px] border-2 border-solid border-black" />
                      </div>

                      <h3 className="w-[387px] [font-family:'Literata',Helvetica] font-normal text-black text-[31px] tracking-[0] leading-normal">
                        {tip.title}
                      </h3>

                      <p className="w-[387px] h-14 [font-family:'Montserrat',Helvetica] font-normal text-black text-lg tracking-[0] leading-normal">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
