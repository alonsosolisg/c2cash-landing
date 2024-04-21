import React from "react";
import { FaArrowRight, FaBitcoin, FaMoneyBill } from "react-icons/fa6";
import Button from "../reusable/button";
import Image from "next/image";

const THero = () => {
  return (
    <div className="w-full h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] text-text lg:px-[75px] xl:px-[150px] pt-[150px] pb-[175px] bg-gradient-to-b from-white via-blue-50 to-indigo-300 flex-col justify-center items-center gap-[50px] inline-flex">
      <div className="self-stretch h-fit flex-col justify-center items-center gap-[30px] flex">
        <div className="text-text items-center flex flex-col xs:text-[40px] sm:text-[50px] lg:text-[80px] text-center font-medium font-circular xs:leading-[40px] sm:leading-[50px] lg:leading-[75px]">
          <div className="flex">The Coziest Way</div>
          <div className="flex items-center gap-2"> To Exchange Digital</div>
          <div className="flex items-center gap-2">Assets For Cash</div>
        </div>
        <div className="w-fit text-center text-text2 xs:text-[20px] sm:text-[24px] lg:text-[28px] font-normal">
          Use any of your digital assets to withdraw cash in a single
          application
        </div>
        <div className="justify-center lg:flex-row xs:flex-col items-center gap-[30px] inline-flex">
          <Button action={() => {}} text="Get Started" variant="primary" />
          <Button action={() => {}} text="Learn More" variant="secondary" />
        </div>
        <div className="self-stretch h-fit bg-secondary/10 rounded-[25px] shadow border border-zinc-400 border-opacity-30">
          <Image
            src={"/images/tech_map.jpg"}
            alt="c2c"
            width={1200}
            height={1200}
            className="w-full h-fit rounded-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default THero;
