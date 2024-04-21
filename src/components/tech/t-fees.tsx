import React from "react";
import {
  FaArrowUpRightDots,
  FaBuildingColumns,
  FaHandshake,
} from "react-icons/fa6";
import Button from "../reusable/button";

const TFees = () => {
  return (
    <div className="w-full gap-[25px] h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] text-text lg:px-[75px] xl:px-[150px] py-[100px] bg-gradient-to-br from-blue-400 to-indigo-300 justify-between xs:flex-col lg:flex-row items-center flex">
      <div className="flex-col justify-center items-start gap-[30px] inline-flex">
        <div className="w-fit flex xs:text-[40px] sm:text-[50px] lg:text-[70px] xs:leading-[40px] sm:leading-[50px] lg:leading-[75px] font-circular text-white flex-col">
          <span className=" flex font-medium w-max">Onboard New</span>
          <span className=" flex font-medium w-max">Web3 Customers</span>
          <span className="flex font-medium w-max">Into Your Business</span>
        </div>
        <div className="w-fit text-white text-[28px] font-normal">
          Expand your customer and supplier network with emerging technology
        </div>
        <Button action={() => {}} text="Become a Merchant" variant="primary" />
      </div>
    </div>
  );
};

export default TFees;
