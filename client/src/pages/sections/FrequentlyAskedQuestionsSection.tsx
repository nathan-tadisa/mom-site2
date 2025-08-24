import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  // Data for the common wardrobe challenges
  const wardrobeChallenges = [
    {
      text: "Struggling to find outfits in the morning",
    },
    {
      text: "Feeling less confident because your wardrobe doesn't reflect you",
    },
    {
      text: "Frustrated with shopping and ending up with clothes that don't suit you",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-[60px] relative">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-normal [font-family:'Literata',Helvetica] text-black mb-8 sm:mb-10 md:mb-12 text-center lg:text-left leading-tight">
          Overwhelmed by Your Wardrobe?
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full lg:w-auto">
            <Separator
              orientation="vertical"
              className="hidden lg:block h-[698px] w-0.5 bg-black"
            />
            
            {/* Horizontal separator for mobile */}
            <Separator
              orientation="horizontal"
              className="lg:hidden w-full h-0.5 bg-black"
            />

            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[83px] max-w-full lg:max-w-[505px]">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[37px] font-normal [font-family:'Literata',Helvetica] text-black text-center lg:text-left">
                Do these sound familiar?
              </h3>

              {wardrobeChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6 lg:gap-[39px]">
                  <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 mt-2 sm:mt-3 bg-black rounded-[7px] flex-shrink-0" />
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-base sm:text-lg md:text-xl lg:text-[31px] text-black leading-relaxed">
                    {challenge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-none shadow-none w-full lg:w-auto flex justify-center">
            <CardContent className="p-0">
              <img
                className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[580px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg shadow-lg"
                alt="Wardrobe items"
                src="/figmaAssets/image-1-1.png"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
