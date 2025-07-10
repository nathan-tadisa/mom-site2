import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OverwhelmedByWardrobeSection = (): JSX.Element => {
  // Data for the benefit cards
  const benefitCards = [
    {
      title: "Boost your confidence",
      imageSrc: "/figmaAssets/vector.svg",
      imageAlt: "Vector",
      imageClassName: "w-[231px] h-[229px] mx-auto",
    },
    {
      title: "Help you connect with others",
      imageSrc: "/figmaAssets/teenagers-in-circle.svg",
      imageAlt: "Teenagers in circle",
      imageClassName: "w-[257px] h-[257px] mx-auto",
      isCentered: true,
    },
    {
      title: "Open new opportunities",
      imageContent: true,
    },
  ];

  return (
    <section id="why-it-matters" className="flex flex-col w-full py-16 px-[60px] gap-12">
      <h2 className="font-serif text-[54px] text-black font-normal tracking-normal leading-normal">
        Why does it matter?
      </h2>

      <div className="flex items-center justify-between gap-[108px] w-full">
        {benefitCards.map((card, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 flex flex-col items-center">
              {card.imageContent ? (
                <div className="relative w-[261px] h-[261px] mb-4">
                  <div className="relative w-[180px] h-[171px] top-[46px] left-[41px] bg-[url(/figmaAssets/group.png)] bg-[100%_100%]">
                    <div className="absolute w-44 h-[157px] top-0.5 left-0.5">
                      <div className="absolute w-[74px] h-[103px] top-0 left-[51px]">
                        <img
                          className="absolute w-[50px] h-[69px] top-[17px] left-2"
                          alt="Group"
                          src="/figmaAssets/group-1.png"
                        />
                        <img
                          className="absolute w-[33px] h-[18px] top-[85px] left-[18px]"
                          alt="Group"
                          src="/figmaAssets/group-4.png"
                        />
                        <img
                          className="absolute w-[63px] h-[38px] top-0 left-[11px]"
                          alt="Group"
                          src="/figmaAssets/group-5.png"
                        />
                        <img
                          className="absolute w-[9px] h-[18px] top-11 left-[58px]"
                          alt="Group"
                          src="/figmaAssets/group-7.png"
                        />
                        <img
                          className="absolute w-2 h-[17px] top-[46px] left-0"
                          alt="Group"
                          src="/figmaAssets/group-9.png"
                        />
                        <img
                          className="absolute w-2.5 h-[41px] top-[62px] left-[60px]"
                          alt="Group"
                          src="/figmaAssets/group-12.png"
                        />
                        <img
                          className="absolute w-4 h-1.5 top-[34px] left-[37px]"
                          alt="Group"
                          src="/figmaAssets/group-13.png"
                        />
                        <img
                          className="absolute w-4 h-1.5 top-[35px] left-[11px]"
                          alt="Group"
                          src="/figmaAssets/group-14.png"
                        />
                        <img
                          className="absolute w-[7px] h-[23px] top-[41px] left-7"
                          alt="Group"
                          src="/figmaAssets/group-15.png"
                        />
                        <img
                          className="absolute w-3.5 h-1.5 top-6 left-[54px]"
                          alt="Group"
                          src="/figmaAssets/group-16.png"
                        />
                        <img
                          className="absolute w-3.5 h-1.5 top-[46px] left-[13px]"
                          alt="Group"
                          src="/figmaAssets/group-17.png"
                        />
                        <img
                          className="absolute w-[7px] h-[9px] top-16 left-14"
                          alt="Group"
                          src="/figmaAssets/group-18.png"
                        />
                        <img
                          className="absolute w-[7px] h-[9px] top-16 left-[3px]"
                          alt="Group"
                          src="/figmaAssets/group-19.png"
                        />
                        <img
                          className="absolute w-[17px] h-5 top-3.5 left-0"
                          alt="Group"
                          src="/figmaAssets/group-20.png"
                        />
                        <img
                          className="absolute w-[17px] h-1.5 top-[67px] left-6"
                          alt="Group"
                          src="/figmaAssets/group-21.png"
                        />
                        <img
                          className="absolute w-1 h-1 top-[68px] left-[58px]"
                          alt="Group"
                          src="/figmaAssets/group-25.png"
                        />
                        <img
                          className="absolute w-1 h-1 top-[68px] left-1"
                          alt="Group"
                          src="/figmaAssets/group-26.png"
                        />
                        <img
                          className="absolute w-4 h-1 top-[30px] left-[47px]"
                          alt="Group"
                          src="/figmaAssets/group-29.png"
                        />
                        <img
                          className="absolute w-1.5 h-px top-[34px] left-[57px]"
                          alt="Group"
                          src="/figmaAssets/group-38.png"
                        />
                        <img
                          className="absolute w-[3px] h-0.5 top-[30px] left-[47px]"
                          alt="Group"
                          src="/figmaAssets/group-40.png"
                        />
                        <img
                          className="absolute w-[3px] h-px top-[33px] left-[55px]"
                          alt="Group"
                          src="/figmaAssets/group-42.png"
                        />
                        <img
                          className="absolute w-0.5 h-px top-[9px] left-[11px]"
                          alt="Group"
                          src="/figmaAssets/group-43.png"
                        />
                      </div>
                      <div className="absolute w-16 h-[84px] top-[73px] left-28">
                        <img
                          className="absolute w-16 h-[53px] top-8 left-0"
                          alt="Group"
                          src="/figmaAssets/group-2.png"
                        />
                        <img
                          className="absolute w-3 h-[13px] top-8 left-1"
                          alt="Group"
                          src="/figmaAssets/group-6.png"
                        />
                        <img
                          className="absolute w-[17px] h-[35px] top-0 left-3"
                          alt="Group"
                          src="/figmaAssets/group-10.png"
                        />
                        <img
                          className="absolute w-1.5 h-1.5 top-[38px] left-[21px]"
                          alt="Group"
                          src="/figmaAssets/group-23.png"
                        />
                        <img
                          className="absolute w-[3px] h-[3px] top-[39px] left-[25px]"
                          alt="Group"
                          src="/figmaAssets/group-39.png"
                        />
                        <img
                          className="absolute w-[3px] h-0.5 top-[51px] left-[39px]"
                          alt="Group"
                          src="/figmaAssets/group-41.png"
                        />
                      </div>
                      <div className="absolute w-[67px] h-[83px] top-[74px] left-0">
                        <img
                          className="absolute w-14 h-[51px] top-8 left-2.5"
                          alt="Group"
                          src="/figmaAssets/group-3.png"
                        />
                        <img
                          className="absolute w-[25px] h-[21px] top-[30px] left-0"
                          alt="Group"
                          src="/figmaAssets/group-8.png"
                        />
                        <img
                          className="absolute w-[17px] h-8 top-0 left-10"
                          alt="Group"
                          src="/figmaAssets/group-11.png"
                        />
                      </div>
                    </div>
                    <div className="absolute w-2 h-2.5 top-8 left-[9px] bg-[url(/figmaAssets/group-22.png)] bg-[100%_100%]">
                      <img
                        className="absolute w-[3px] h-1.5 top-0 left-1"
                        alt="Group"
                        src="/figmaAssets/group-31.png"
                      />
                    </div>
                    <img
                      className="absolute w-[7px] h-1 top-10 left-40"
                      alt="Group"
                      src="/figmaAssets/group-24.png"
                    />
                    <img
                      className="absolute w-[5px] h-1.5 top-[35px] left-5"
                      alt="Group"
                      src="/figmaAssets/group-27.png"
                    />
                    <img
                      className="absolute w-1 h-1.5 top-9 left-[152px]"
                      alt="Group"
                      src="/figmaAssets/group-28.png"
                    />
                    <img
                      className="absolute w-[3px] h-1.5 top-[33px] left-[159px]"
                      alt="Group"
                      src="/figmaAssets/group-30.png"
                    />
                    <img
                      className="absolute w-1.5 h-0.5 top-[43px] left-[9px]"
                      alt="Group"
                      src="/figmaAssets/group-32.png"
                    />
                    <div className="absolute w-2 h-1.5 top-[57px] left-[21px]">
                      <img
                        className="absolute w-1.5 h-1 top-0 left-0"
                        alt="Group"
                        src="/figmaAssets/group-33.png"
                      />
                      <img
                        className="absolute w-[7px] h-1 top-0.5 left-px"
                        alt="Group"
                        src="/figmaAssets/group-34.png"
                      />
                      <img
                        className="absolute w-1 h-0.5 top-px left-[3px]"
                        alt="Group"
                        src="/figmaAssets/group-37.png"
                      />
                    </div>
                    <div className="absolute w-[7px] h-1.5 top-[58px] left-[151px]">
                      <img
                        className="absolute w-1.5 h-1 top-0.5 left-0"
                        alt="Group"
                        src="/figmaAssets/group-35.png"
                      />
                      <img
                        className="absolute w-[7px] h-1 top-0 left-px"
                        alt="Group"
                        src="/figmaAssets/group-36.png"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className={card.imageClassName}
                />
              )}
              <h3
                className={`font-sans text-[30.7px] text-black font-normal tracking-normal leading-normal mt-4 ${card.isCentered ? "text-center w-[330px]" : ""}`}
              >
                {card.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
