import React from "react";
import MARKO from "../../assets/icons/Group.svg";
import Location from "../../assets/icons/image 2.svg";
import Stars from "../../assets/icons/Group 336607.svg";
import Telegram from "../../assets/icons/telegram.svg";
import WhatSapp from "../../assets/icons/whatsapp.svg";

export const Navbar = () => {
  return (
    <div className="w-full h-[7.8125rem] bg-[#002b45e5] fixed flex justify-around items-center z-20">
      <div className="flex text-white gap-4">
        <div>
          <p className="w-[11.0506rem] tracking-[0.24rem]">СТУДИЯ КУХНИ</p>
          <img className="w-[10rem] cursor-pointer" src={MARKO} alt="marko" />
        </div>
        <div className="flex gap-2">
          <img src={Location} alt="" />
          <div>
            <p className="text-[0.8644rem] font-[600]">Яндекс Карты</p>
            <div className="flex items-center">
              <img
                className="w-[5.4rem] h-[1.1769rem] mt-1"
                src={Stars}
                alt=""
              />
              <p className="text-[#827F7F] font-[700] text-[1.3125rem]">5,0</p>
            </div>
            <p className="text-[0.5469rem] ">81 отзыв • 100 оценок</p>
          </div>
        </div>
      </div>
      <div className="flex text-white items-center gap-12">
        <div>
          <p className="text-[0.875rem] font-[600] leading-[1.1919rem]">
            Производство кухонь на заказ
          </p>
          <p className="text-[0.875rem] font-[400] leading-[1.1919rem]">
            Анапа, ул. Крылова, д. 27
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img className="cursor-pointer" src={WhatSapp} alt="whatsapp" />
          <img className="cursor-pointer" src={Telegram} alt="telegram" />
          <p className="cursor-pointer hover:text-[#F2A22E]">
            +7 (988)-311-77-88
          </p>
          <button className=" w-[13.375rem] h-[3.625rem] border-[1px] border-[#FFFFFF] flex justify-center items-center hover:text-[#F2A22E]">
            <p>Заказать звонок</p>
          </button>
        </div>
      </div>
    </div>
  );
};
