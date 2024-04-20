import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Button from "./button";

const Navbar = ({
  toggleMobileMenu,
  setToggleMobileMenu,
}: {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (prevScrollPos < currentScrollPos) {
        navbar!.style.top = "-100px";
      } else {
        navbar!.style.top = "0px";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "tween" }}
        id="navbar"
        style={{
          backdropFilter: "blur(12px)",
          boxShadow: "0px 4px 20px 0px rgba(46, 46, 46, 0.08)",
        }}
        className="z-[10] bg-background/85 w-full sticky lg:flex xs:hidden top-0 transition-top duration-500 ease-in-out  h-fit text-text lg:px-[30px] xl:px-[50px] py-[25px] justify-between items-center inline-flex"
      >
        <Link href={"/"} className="justify-center items-center gap-2.5 flex">
          <div className="text-[28px] font-bold font-circular">C2Cash</div>
          <img className="w-[37px] h-[37px]" src="/images/c2cash_logo.png" />
        </Link>
        <div className="px-[50px] lg:text-xl xl:text-2xl justify-center items-center gap-[50px] flex">
          <Link href={"#product"} className="hover:underline font-medium">
            Product
          </Link>
          <Link href={"#benefits"} className="hover:underline font-medium">
            Benefits
          </Link>
          <Link href={"/merchants"} className="hover:underline font-medium">
            Merchants
          </Link>
          <Link href={"#fees"} className="hover:underline font-medium">
            Fees
          </Link>
        </div>
        <Button action={() => {}} text={"Get the App"} variant={"primary"} />
      </motion.div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "tween" }}
        id="navbar"
        style={{
          backdropFilter: "blur(12px)",
          boxShadow: "0px 4px 20px 0px rgba(46, 46, 46, 0.08)",
        }}
        className="w-full z-[10] px-[25px] bg-background/85 sticky lg:hidden top-0 transition-top duration-500 ease-in-out  h-fit text-text lg:px-[30px] xl:px-[50px] py-[25px] justify-between items-center inline-flex"
      >
        <Link href={"/"} className="justify-center items-center gap-2.5 flex">
          <div className="text-[28px] font-bold font-circular">C2Cash</div>
          <img className="w-[37px] h-[37px]" src="/images/c2cash_logo.png" />
        </Link>
        <div
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          className="px-[20px] lg:text-xl xl:text-2xl justify-center items-center gap-[50px] flex"
        >
          <FaBars />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
