import Image from "next/image";
import React from "react";
import { FaBolt } from "react-icons/fa6";

const Benefits = () => {
  return (
    <div
      id="benefits"
      className="w-full -mt-10 h-fit xs:px-[25px] sm:px-[50px] md:px-[75px] lg:px-[75px] xl:px-[150px] pt-[75px] pb-[100px] bg-white rounded-tl-[40px] rounded-tr-[40px] flex-col justify-center items-center gap-[30px] inline-flex"
    >
      <div className="w-full flex flex-col font-circular items-center xs:text-[40px] sm:text-[50px] lg:text-[70px] text-text xs:leading-[40px] sm:leading-[50px] lg:leading-[75px] text-center">
        <span className=" font-medium justify-center">Withdraw Cash</span>
        <span className=" flex flex-wrap font-medium justify-center gap-4 items-center">
          Faster <FaBolt className="text-accent" /> & Safely
        </span>
      </div>
      <div className="text-center text-text2 text-[28px] font-normal">
        Go to the closest merchant and get cash in a matter of seconds
      </div>
      <div className="self-stretch h-fit bg-secondary/10 rounded-[25px] shadow border border-zinc-400 border-opacity-30">
        <Image
          src="/images/sketch_c2c.png"
          width={1200}
          height={1200}
          alt="c2c"
          className="w-full py-10 lg:px-64 xs:px-4"
        />
      </div>
    </div>
  );
};

export default Benefits;
