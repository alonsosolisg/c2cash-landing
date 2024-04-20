import React from "react";
import {
  FaArrowUpRightDots,
  FaBuildingColumns,
  FaHandshake,
} from "react-icons/fa6";
import Button from "../reusable/button";

const Fees = () => {
  return (
    <div
      id="fees"
      className="w-full gap-[25px] h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] text-text lg:px-[75px] xl:px-[150px] py-[100px] bg-gradient-to-br from-blue-400 to-indigo-300 justify-between xs:flex-col lg:flex-row items-center flex"
    >
      <div className="flex-col justify-center items-start gap-[30px] inline-flex">
        <div className="w-fit flex xs:text-[40px] sm:text-[50px] lg:text-[70px] xs:leading-[40px] sm:leading-[50px] lg:leading-[75px] font-circular text-white flex-col">
          <span className=" flex font-medium w-max">Lower Fees, Less</span>
          <span className=" gap-4 flex font-medium">
            Hassle <FaArrowUpRightDots className="text-accent" /> Just
          </span>
          <span className="flex font-medium">Go to the Closest</span>
          <span className="gap-4 flex font-medium">
            Merchant <FaHandshake className="text-accent" />
          </span>
        </div>
        <div className="w-fit text-white text-[28px] font-normal">
          Take advantage of competitive rates and save money in the process
        </div>
        <Button action={() => {}} text="Start Now" variant="primary" />
      </div>
    </div>
  );
};

export default Fees;
