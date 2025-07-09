import React from "react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-[60px] py-12">
      <div className="flex flex-col w-full md:w-[546px] items-start gap-6">
        <h2 className="font-serif font-semibold text-4xl md:text-[54px] text-black leading-tight">
          Discover Your Confident Style
        </h2>

        <p className="font-sans font-normal text-black text-lg max-w-[395px]">
          Transform your wardrobe and boost your confidence in just 6 weeks.
          Learn how to create a wardrobe that fits your lifestyle and reflects
          your best self.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            variant="outline"
            className="h-12 px-6 rounded-md border border-solid border-black bg-transparent text-black font-normal text-lg"
          >
            Sign Up
          </Button>

          <Button
            variant="outline"
            className="h-12 px-6 rounded-md border border-solid border-black bg-transparent text-black font-normal text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          className="w-full md:w-[741px] h-auto md:h-[900px]"
          alt="Fashion style collage"
          src="/figmaAssets/frame-1.svg"
        />
      </div>
    </section>
  );
};
