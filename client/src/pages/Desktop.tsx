import React from "react";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { OverwhelmedByWardrobeSection } from "./sections/OverwhelmedByWardrobeSection";
import { ReadyToTransformWardrobeSection } from "./sections/ReadyToTransformWardrobeSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { UnlockWardrobePotentialSection } from "./sections/UnlockWardrobePotentialSection";
import { WhyItMattersSection } from "./sections/WhyItMattersSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#fcf7f8] flex flex-col items-center w-full">
      <div className="bg-[#fcf7f8] w-full max-w-[1440px] relative">
        <TestimonialsSection />
        <FrequentlyAskedQuestionsSection />
        <UnlockWardrobePotentialSection />
        <OverwhelmedByWardrobeSection />
        <ReadyToTransformWardrobeSection />
        <WhyItMattersSection />
      </div>
    </div>
  );
};
