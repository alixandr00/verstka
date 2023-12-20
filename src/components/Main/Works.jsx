import React from "react";
import Slayder from "../../assets/images/слайдер и меню.png";
import Rectangle from "../../assets/images/Rectangle 4381.png";
import { worksData } from "../../constants/constants";
import { Select } from "./Select";

export const Works = () => {
  return (
    <div>
      <div className="mt-[13rem] flex items-center gap-8 ">
        <p className="bg-[#002B45] w-[11.9rem] h-[0.0725rem]" />
        <p className="font-[700] text-[2.25rem]">Посмотрите наши работы</p>
      </div>
      <Select />
      <div className="flex flex-wrap gap-12 justify-center mt-[3rem]">
        {worksData.map((work, index) => (
          <div key={index} className="w-[49.125rem] h-[27.25rem] flex relative">
            <div>
              <img
                className="w-[18rem] h-[18rem] mt-8 absolute z-10"
                src={Rectangle}
                alt="rectangle"
              />
              <div className="w-[18rem] h-[5rem] bg-[#001623] absolute p-4 z-10 bottom-9">
                <img src={Slayder} alt="slayder" />
              </div>
            </div>
            <div className="w-[35.74rem] h-[27.25rem] bg-[#FBF6EF] absolute right-[0] top-0 flex justify-center items-center flex-col border-[1px] border-[#000] gap-4">
              <div className=" gap-2 items-center">
                <p className="font-[700] text-[1.5rem] ">{work.title}</p>
                <p className="py-4">{work.description}</p>
              </div>
              <p className="absolute bg-[#D9D9D9] w-[0.06rem] h-12 left-[13.5rem] top-[11rem] " />
              <p className="absolute bg-[#D9D9D9] w-[0.06rem] h-12 left-[22rem] top-[11rem] " />
              <div className="flex w-[25rem] h-[3.93rem] items-center justify-center gap-[2rem] ml-7 relative">
                {work.priceOptions.map((option, optionIndex) => (
                  <div key={optionIndex} className=" h-[3.3125rem] pr-[2rem]">
                    <p className="font-[700] pb-2">{option.type}</p>
                    <p>{option.price}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#7C7C7C] pr-[11rem] pt-4">
                <span className="font-[700]">Длина кухни:</span> {work.length}
              </p>
              <div className="flex gap-4 pl-12 mt-6">
                <button className="bg-[#002B45] w-[10.0625rem] h-[3.625rem] hover:bg-[#015B91] active:bg-[#011A2A]">
                  <p className="text-[white]">Подробнее</p>
                </button>
                <button className="hover:border-[#F2A22E] hover:text-[#F2A22E] active:border-[#011A2A] active:text-[#011A2A] w-[14.3rem] border-[1px] border-[#002B45] h-[3.625rem]">
                  Расчет стоимости
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
