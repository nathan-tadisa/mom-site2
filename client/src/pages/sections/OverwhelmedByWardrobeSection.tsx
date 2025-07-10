import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ShoppingBag, Mirror, Frown } from "lucide-react";

export const OverwhelmedByWardrobeSection = (): JSX.Element => {
  // Data representing common wardrobe struggles
  const wardrobeStruggles = [
    {
      icon: Clock,
      title: "30 Minutes Every Morning",
      description: "Standing in front of a full closet with nothing to wear",
      problem: "Time Wasted",
      animation: "animate-pulse",
    },
    {
      icon: ShoppingBag,
      title: "Impulse Shopping Regrets",
      description: "Buying clothes that never get worn or don't match anything",
      problem: "Money Wasted",
      animation: "animate-bounce",
    },
    {
      icon: Mirror,
      title: "Mirror Frustration",
      description: "Trying on outfit after outfit, feeling nothing looks right",
      problem: "Confidence Lost",
      animation: "animate-pulse",
    },
    {
      icon: Frown,
      title: "Closet Full of 'Nothing'",
      description: "Tons of clothes but constantly feeling underdressed",
      problem: "Style Confusion",
      animation: "animate-bounce",
    },
  ];

  return (
    <section className="flex flex-col w-full py-20 px-[60px] bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-red-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-orange-100 rounded-full opacity-40 animate-float-delayed"></div>
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-black text-[48px] md:text-[54px] leading-tight mb-6">
          Overwhelmed by Your Wardrobe?
        </h2>
        <p className="[font-family:'Montserrat',Helvetica] font-normal text-gray-700 text-xl max-w-3xl mx-auto">
          You're not alone. These daily struggles drain your energy and confidence—but they don't have to.
        </p>
      </div>

      {/* Struggles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {wardrobeStruggles.map((struggle, index) => {
          const IconComponent = struggle.icon;
          return (
            <Card 
              key={index} 
              className="group border-2 border-red-200 hover:border-red-300 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Animated background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                    <IconComponent className={`w-8 h-8 text-red-600 ${struggle.animation}`} />
                  </div>
                  
                  {/* Problem label */}
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-4">
                    {struggle.problem}
                  </div>
                  
                  {/* Title */}
                  <h3 className="[font-family:'Literata',Helvetica] font-semibold text-black text-[28px] leading-tight mb-4">
                    {struggle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-gray-600 text-lg leading-relaxed">
                    {struggle.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="inline-block px-8 py-4 bg-white border-2 border-black rounded-lg shadow-md">
          <p className="[font-family:'Montserrat',Helvetica] font-medium text-black text-lg">
            Ready to break free from these struggles? 
            <span className="text-red-600 font-semibold ml-2">Transform your wardrobe today.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
