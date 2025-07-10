import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const WhyItMattersSection = (): JSX.Element => {
  // Enhanced FAQ data with comprehensive answers
  const faqItems = [
    {
      question: "What if I don't have time?",
      answer: "The course is designed for busy women with flexible modules that take just 15-30 minutes each. You can complete lessons at your own pace, whether that's during lunch breaks, weekend mornings, or whenever fits your schedule. Many students finish the entire program in just 6 weeks by dedicating small pockets of time.",
      defaultOpen: true,
    },
    {
      question: "I hate shopping. Will this help?",
      answer: "Absolutely! This course is perfect for shopping-averse women. You'll learn how to shop strategically and efficiently, spending less time in stores while making better choices. We teach you how to identify key pieces, shop with a plan, and even explore online alternatives. Many students who previously dreaded shopping now find it enjoyable and purposeful.",
      defaultOpen: false,
    },
    {
      question: "What if I don't know my style?",
      answer: "That's exactly what this course is for! We start from the very beginning with style discovery exercises to help you identify what you love, what works for your lifestyle, and what makes you feel confident. You'll explore different style personalities, learn about your body type, and discover how to create a signature look that's uniquely you. No prior style knowledge required!",
      defaultOpen: false,
    },
  ];

  // Form field data
  const formFields = [
    { id: "name", label: "Name", type: "text", halfWidth: true },
    { id: "surname", label: "Surname", type: "text", halfWidth: true },
    { id: "email", label: "Email", type: "email", halfWidth: false },
    { id: "phone", label: "Phone Number", type: "tel", halfWidth: false },
  ];

  return (
    <section className="w-full flex flex-col justify-between">
      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-6 md:px-8 lg:px-[60px] py-8 sm:py-12 md:py-16 gap-8 sm:gap-10 md:gap-12">
        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[54px] font-normal [font-family:'Literata',Helvetica] text-black max-w-full lg:max-w-[458px] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg [font-family:'Montserrat',Helvetica] text-gray-600 mt-4 max-w-full lg:max-w-[400px]">
            Get answers to common questions about our wardrobe transformation course
          </p>
        </div>

        <div className="w-full lg:w-[728px]">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 px-4 sm:px-6 py-2"
              >
                <AccordionTrigger className="flex justify-between items-center py-4 sm:py-6 hover:no-underline">
                  <span className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-medium [font-family:'Montserrat',Helvetica] text-black text-left pr-4 leading-relaxed">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg font-normal [font-family:'Montserrat',Helvetica] text-gray-700 leading-relaxed pb-4 sm:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="flex flex-col w-full">
        {/* Heading and Description */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-[37px] px-4 sm:px-6 md:px-8 lg:px-[60px] py-6 sm:py-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-normal [font-family:'Literata',Helvetica] text-black leading-tight">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[31px] font-normal [font-family:'Montserrat',Helvetica] text-black leading-relaxed">
            This course is flexible and practical, designed for busy women.
            Start from scratch or refine your style—you'll gain tools and
            confidence to shine.
          </p>
        </div>

        {/* Form and Image */}
        <div id="sign-up-form" className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-[60px] py-6 sm:py-8 gap-6 sm:gap-8">
          <Card className="w-full lg:w-[600px] border-none shadow-none">
            <CardContent className="p-0 space-y-6 sm:space-y-8 lg:space-y-[38px]">
              {/* Name and Surname row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[62px]">
                {formFields.slice(0, 2).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col gap-3 sm:gap-[15px] w-full sm:w-[269px]"
                  >
                    <label
                      htmlFor={field.id}
                      className="text-base sm:text-lg font-normal [font-family:'Montserrat',Helvetica] text-black"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      className="h-10 sm:h-12 rounded-md border border-solid border-black"
                    />
                  </div>
                ))}
              </div>

              {/* Email and Phone fields */}
              {formFields.slice(2).map((field) => (
                <div key={field.id} className="flex flex-col gap-3 sm:gap-[15px] w-full">
                  <label
                    htmlFor={field.id}
                    className="text-base sm:text-lg font-normal [font-family:'Montserrat',Helvetica] text-black"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    type={field.type}
                    className="h-10 sm:h-12 rounded-md border border-solid border-black"
                  />
                </div>
              ))}

              {/* Sign Up Button */}
              <Button className="w-full sm:w-[148px] h-10 sm:h-12 rounded-md border border-solid border-black bg-transparent text-black hover:bg-black hover:text-white transition-colors">
                <span className="text-base sm:text-lg font-normal [font-family:'Montserrat',Helvetica]">
                  Sign Up
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Image */}
          <img
            className="w-full lg:w-[532px] h-[300px] sm:h-[400px] lg:h-[491px] object-cover rounded-lg"
            alt="People shopping"
            src="/figmaAssets/rectangle-32.svg"
          />
        </div>
      </div>
    </section>
  );
};
