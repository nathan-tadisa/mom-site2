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
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What if I don't have time?",
      answer: "The course is flexible and fits your schedule.",
      defaultOpen: true,
    },
    {
      question: "I hate shopping. Will this help?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "What if I don't know my style?",
      answer: "",
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
      <div className="flex flex-col md:flex-row justify-between px-[60px] py-12 gap-8">
        <h2 className="text-[54px] font-normal [font-family:'Literata',Helvetica] text-black max-w-[458px]">
          Frequently Asked Questions
        </h2>

        <div className="w-full md:w-[728px]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-t border-b border-black py-[30px] px-5"
              >
                <AccordionTrigger className="flex justify-between">
                  <span className="text-[31px] font-normal [font-family:'Montserrat',Helvetica] text-black">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal [font-family:'Montserrat',Helvetica] text-black">
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
        <div className="flex flex-col gap-[37px] px-[60px] py-8">
          <h2 className="text-[54px] font-normal [font-family:'Literata',Helvetica] text-black">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-[31px] font-normal [font-family:'Montserrat',Helvetica] text-black">
            This course is flexible and practical, designed for busy women.
            Start from scratch or refine your style—you'll gain tools and
            confidence to shine.
          </p>
        </div>

        {/* Form and Image */}
        <div className="flex flex-col md:flex-row justify-between px-[60px] py-8 gap-8">
          <Card className="w-full md:w-[600px] border-none shadow-none">
            <CardContent className="p-0 space-y-[38px]">
              {/* Name and Surname row */}
              <div className="flex flex-col md:flex-row gap-[62px]">
                {formFields.slice(0, 2).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col gap-[15px] w-full md:w-[269px]"
                  >
                    <label
                      htmlFor={field.id}
                      className="text-lg font-normal [font-family:'Montserrat',Helvetica] text-black"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      className="h-12 rounded-md border border-solid border-black"
                    />
                  </div>
                ))}
              </div>

              {/* Email and Phone fields */}
              {formFields.slice(2).map((field) => (
                <div key={field.id} className="flex flex-col gap-[15px] w-full">
                  <label
                    htmlFor={field.id}
                    className="text-lg font-normal [font-family:'Montserrat',Helvetica] text-black"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    type={field.type}
                    className="h-12 rounded-md border border-solid border-black"
                  />
                </div>
              ))}

              {/* Sign Up Button */}
              <Button className="w-[148px] h-12 rounded-md border border-solid border-black bg-transparent text-black hover:bg-black hover:text-white transition-colors">
                <span className="text-lg font-normal [font-family:'Montserrat',Helvetica]">
                  Sign Up
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Image */}
          <img
            className="w-full md:w-[532px] h-auto md:h-[491px] object-cover"
            alt="People shopping"
            src="/figmaAssets/rectangle-32.svg"
          />
        </div>
      </div>
    </section>
  );
};
