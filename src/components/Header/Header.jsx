import React from "react";
import FirstScreenImage from "../../assets/images/первый экран.png";
import { Navbar } from "../Navbar/Navbar";
import Carman from "../../assets/icons/Vector (4).svg";
import Cursor from "../../assets/icons/cтрелка.svg";
import Group from "../../assets/icons/Group 336711.svg";

export const Header = () => {
  return (
    <div
      className="bg-cover w-full h-[100vh] flex relative"
      style={{
        backgroundImage: `url("${FirstScreenImage}")`,
      }}
    >
      <Navbar />
      <div className="z-10 flex items-center text-[white] pl-[10rem] ">
        <div>
          <p className="font-[Lora] text-[3.5rem] w-[45rem] h-[9.3rem] font-[400] mt-[10rem] leading-[5.12rem]">
            Изготовим роскошную  дизайнерскую кухню
          </p>
          <div className="flex items-center gap-4 mt-12 mb-12">
            <img className="w-[4.3rem] h-[4.3rem]" src={Carman} alt="carman" />
            <div className="flex flex-col h-[4.6rem]">
              <p className="text-[1.75rem] font-[700]">Цена на 12-24% ниже,</p>
              <p className="text-[1.75rem] font-[400]"> чем у посредников</p>
            </div>
          </div>
          <div className="flex relative">
            <p className="text-[0.875rem] w-[15rem] h-[1.125rem]">
              Рассчитаем стоимость кухни-мечты
            </p>
            <img
              className="top-3 left-[14.5rem] absolute w-[2rem] h-[4rem]"
              src={Cursor}
              alt="cursor"
            />
          </div>
          <button className="hover:text-[#C07A13]  mt-[1rem] w-[13.375rem] h-[3.625rem] border-[1px] border-[#FFFFFF] flex justify-center items-center hover:border-[#C07A13]">
            <p>Заказать расчёт</p>
          </button>
        </div>
        <div className="absolute left-[30rem] top-[10rem]">
          <p className="w-[14rem] h-[5.375rem] items-center pl-[2.5rem] bg-[#002B45E5] rounded-[0.9375rem] flex justify-center">
            <span>Огромный выбор  бытовой техники</span>
            <img
              className="absolute right-[-0.8rem] top-[1.7rem]"
              src={Group}
              alt="Group"
            />
          </p>
        </div>
        <div className="relative  bottom-[4.5rem]">
          <p className="w-[16rem] h-[5.375rem] items-center px-[2.5rem] bg-[#002B45E5] rounded-[0.9375rem] flex justify-center">
            <span>Изысканный гарнитур  любого размера</span>
            <img
              className="absolute right-[-0.8rem] top-[1.7rem]"
              src={Group}
              alt="Group"
            />
          </p>
        </div>
        <div className="relative top-[9rem] right-[20rem]">
          <p className="w-[12rem] h-[5.375rem] items-center px-[2rem] bg-[#002B45E5] rounded-[0.9375rem] flex justify-center">
            <span>Выдающиеся  сорта древесины</span>
            <img
              className="absolute right-[-0.8rem] top-[1.7rem]"
              src={Group}
              alt="Group"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
