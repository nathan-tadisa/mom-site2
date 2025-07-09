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
    <section className="w-full py-16 px-[60px] relative">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-[54px] font-normal [font-family:'Literata',Helvetica] text-black mb-12">
          Overwhelmed by Your Wardrobe?
        </h2>

        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-6">
            <Separator
              orientation="vertical"
              className="h-[698px] w-0.5 bg-black"
            />

            <div className="flex flex-col gap-[83px] max-w-[505px]">
              <h3 className="text-[37px] font-normal [font-family:'Literata',Helvetica] text-black">
                Do these sound familiar?
              </h3>

              {wardrobeChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-[39px]">
                  <div className="w-3.5 h-3.5 mt-3 bg-black rounded-[7px] flex-shrink-0" />
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-[31px] text-black">
                    {challenge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <img
                className="w-[580px] h-[693px] object-cover"
                alt="Wardrobe items"
                src="/figmaAssets/rectangle-29.svg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
