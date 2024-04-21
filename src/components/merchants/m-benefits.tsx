import Image from "next/image";
import React from "react";

const MBenefits = () => {
  return (
    <div
      id="benefits"
      className="w-full -mt-10 h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] lg:px-[75px] xl:px-[150px] pt-[75px] pb-[100px] bg-white rounded-tl-[40px] rounded-tr-[40px] flex-col justify-center items-center gap-[30px] inline-flex"
    >
      <div className="w-full flex flex-col font-circular items-center xs:text-[40px] sm:text-[50px] lg:text-[70px] text-text xs:leading-[40px] sm:leading-[50px] lg:leading-[75px] text-center">
        <span className=" font-medium justify-center">Get Paid in</span>
        <span className=" flex flex-wrap font-medium justify-center gap-4 items-center">
          Fiat Currency
        </span>
      </div>
      <div className="text-center text-text2 text-[28px] font-normal">
        With the help of our partner Swapin you can instantly get paid in fiat
      </div>
      <div className="self-stretch h-fit py-10 px-4 bg-secondary/10 rounded-[25px] shadow border border-zinc-400 border-opacity-30">
        <Image
          src={"/images/sketchm_c2c.png"}
          alt="c2c"
          width={1200}
          height={1200}
          className="w-full h-fit"
        />
      </div>
    </div>
  );
};

export default MBenefits;
