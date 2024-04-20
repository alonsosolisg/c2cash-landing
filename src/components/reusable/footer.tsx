import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit px-[25px] py-5 justify-between items-center inline-flex xs:flex-col-reverse gap-[25px] lg:flex-row">
      <div className="justify-center items-center gap-[5px] flex">
        <div className="text-center text-slate-900 text-3xl font-extrabold font-['Be Vietnam Pro']">
          C2Cash
        </div>
        <img className="w-10 h-10" src="/images/c2cash_logo.png" />
      </div>
      <div className="px-[15px] pt-1.5 pb-[5px] bg-blue-600 rounded-2xl justify-center items-center gap-2.5 flex">
        <div className="text-center text-white text-2xl font-bold font-['Avenir Next LT Pro']">
          Get the App
        </div>
      </div>
    </div>
  );
};

export default Footer;
