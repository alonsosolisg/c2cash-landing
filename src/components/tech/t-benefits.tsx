import Image from "next/image";
import React from "react";

const TBenefits = () => {
  return (
    <div
      id="benefits"
      className="w-full -mt-10 h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] lg:px-[75px] xl:px-[150px] pt-[75px] pb-[100px] bg-white rounded-tl-[40px] rounded-tr-[40px] flex-col justify-center items-center gap-[30px] inline-flex"
    >
      <div className="w-full flex flex-col font-circular items-center xs:text-[40px] sm:text-[50px] lg:text-[70px] text-text xs:leading-[40px] sm:leading-[50px] lg:leading-[75px] text-center">
        <span className=" font-medium justify-center">Partners</span>
      </div>
      <div className="text-center text-text2 text-[28px] font-normal">
        We deliver a seamless experience with state of the art technologies from
        our partners
      </div>
      <div className="w-full border-b border-gray-200"></div>
      <div className="flex xs:flex-col lg:flex-row justify-center items-center gap-4">
        <Image
          src={"/images/swapin-logo.svg"}
          alt="swapin"
          width={150}
          height={150}
        />
        -
        <p className="text-3xl text-center">
          Ultra-fast payments between crypto and banks
        </p>
      </div>
      <div className="flex items-center xs:flex-col lg:flex-row gap-4">
        <Image src={"/images/shell.jpg"} alt="shell" width={200} height={200} />
        -
        <p className="text-3xl text-center">
          Blockchain transaction batching ecosystem
        </p>
      </div>
    </div>
  );
};

export default TBenefits;
