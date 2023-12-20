import React from "react";
import PNGPhoto from "../../assets/images/image 48.png";

import { advantagesData } from "../../constants/constants";

export const Advantages = () => {
  return (
    <div className="h-[25rem] bg-[#FBF6EF] relative flex">
      <img
        className=" z-[2rem] mb-[-8rem] mt-[-2rem]"
        src={PNGPhoto}
        alt="pngphoto"
      />
      <div className="w-[100%] justify-center h-[25rem] flex items-center flex-col">
        <div className="flex gap-4 items-center justify-center mb-[4rem]">
          <p className="text-[2.25rem] font-[700] pl-[4.5rem]">
            Наши преимущества
          </p>
          <p className="bg-[#002B45] w-[45rem] h-[0.0725rem] " />
        </div>
        <div className="flex gap-20">
          {advantagesData.map((advantage, index) => (
            <div key={index} className="flex gap-4 leading-[2rem]">
              <img
                className="w-[4.375rem] h-[4.375rem]"
                src={advantage.icon}
                alt={`icon-${index}`}
              />
              <div className="text-[1.3rem]">
                <p className="font-[700]">{advantage.title}</p>
                <p>{advantage.description}</p>
                <p>{advantage.descriptionTwo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
