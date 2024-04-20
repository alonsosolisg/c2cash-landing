import React from "react";
import Button from "./button";

const Footer = () => {
  return (
    <div className="w-full h-fit px-[25px] py-5 justify-between items-center inline-flex xs:flex-col-reverse gap-[25px] lg:flex-row">
      <div className="justify-center items-center gap-[5px] flex">
        <div className="text-center text-slate-900 text-3xl font-extrabold font-['Be Vietnam Pro']">
          C2Cash
        </div>
        <img className="w-10 h-10" src="/images/c2cash_logo.png" />
      </div>
      <Button action={() => {}} text="Get the App" variant="primary" />
    </div>
  );
};

export default Footer;
