import React from "react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
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
        <img
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[741px] h-auto lg:h-[900px] object-cover"
          alt="Fashion style collage"
          src="/figmaAssets/frame-1.svg"
        />
      </div>
    </section>
  );
};
