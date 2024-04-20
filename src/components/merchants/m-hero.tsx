import React from "react";
import { FaArrowRight, FaBitcoin, FaMoneyBill } from "react-icons/fa6";
import Button from "../reusable/button";

const MHero = () => {
  return (
    <div className="w-full h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] text-text lg:px-[75px] xl:px-[150px] pt-[150px] pb-[175px] bg-gradient-to-b from-white via-blue-50 to-indigo-300 flex-col justify-center items-center gap-[50px] inline-flex">
      <div className="self-stretch h-fit flex-col justify-center items-center gap-[30px] flex">
        <div className="text-text items-center flex flex-col xs:text-[40px] sm:text-[50px] lg:text-[80px] text-center font-medium font-circular xs:leading-[40px] sm:leading-[50px] lg:leading-[75px]">
          <div className="flex">Diversify Your</div>
          <div className="flex items-center gap-2"> Cash Flow With</div>
          <div className="flex items-center gap-2">Web3</div>
        </div>
        <div className="w-fit text-center text-text2 xs:text-[20px] sm:text-[24px] lg:text-[28px] font-normal font-['Avenir Next LT Pro']">
          One click withdrawal services with Web3 security & zero startup cost
        </div>
        <div className="justify-center lg:flex-row xs:flex-col items-center gap-[30px] inline-flex">
          <Button
            action={() => {}}
            text="Become a Merchant"
            variant="primary"
          />
          <Button action={() => {}} text="Learn More" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default MHero;
