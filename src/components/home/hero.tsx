import React from "react";
import { FaArrowRight, FaBitcoin, FaMoneyBill } from "react-icons/fa6";
import Button from "../reusable/button";

const Hero = () => {
  return (
    <div className="w-full h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] text-text lg:px-[75px] xl:px-[150px] pt-[75px] pb-[125px] bg-gradient-to-b from-white via-blue-50 to-indigo-300 flex-col justify-center items-center gap-[50px] inline-flex">
      <div
        id="product"
        className="self-stretch h-fit flex-col justify-center items-center gap-[30px] flex"
      >
        <div className="text-text items-center flex flex-col xs:text-[40px] sm:text-[50px] lg:text-[80px] text-center font-medium font-circular xs:leading-[40px] sm:leading-[50px] lg:leading-[75px]">
          <div className="flex">Want to Get</div>
          <div className="flex items-center gap-2">
            {" "}
            Cash <FaMoneyBill className="text-accent" /> for Your
          </div>
          <div className="flex items-center gap-2">
            Crypto <FaBitcoin className="text-accent" />?
          </div>
        </div>
        <div className="w-fit text-center text-text2 xs:text-[20px] sm:text-[24px] lg:text-[28px] font-normal">
          Gain access to the local currency by exchanging <br /> crypto with a
          network of trusted merchants
        </div>
        <div className="justify-center lg:flex-row xs:flex-col items-center gap-[30px] inline-flex">
          <Button action={() => {}} text="Withdraw Cash" variant="primary" />
          <Button action={() => {}} text="Learn More" variant="secondary" />
        </div>
      </div>
      <div className="self-stretch lg:flex  xs:hidden px-[25px] gap-[25px] justify-between items-center">
        <div className="w-full h-[448px] widget-style bg-white rounded-[25px]" />
        <div>
          <FaArrowRight className="text-text text-3xl w-fit" />
        </div>
        <div className="w-full h-[448px] widget-style bg-white rounded-[25px]" />
        <div>
          <FaArrowRight className="text-text text-3xl w-fit" />
        </div>{" "}
        <div className="w-full h-[448px] widget-style bg-white rounded-[25px]" />
      </div>
      <div className="self-stretch lg:hidden xs:flex justify-between items-center">
        <div className="w-full h-[448px] widget-style bg-white rounded-[25px]" />
      </div>
    </div>
  );
};

export default Hero;
