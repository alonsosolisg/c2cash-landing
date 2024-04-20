import React from "react";
import { motion } from "framer-motion";
import Button from "./button";
import { FaX } from "react-icons/fa6";
import { useRouter } from "next/router";

const MobileMenu = ({
  setToggleMobileMenu,
}: {
  setToggleMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ x: -1024 }}
      animate={{ x: 0 }}
      exit={{ x: -1024 }}
      transition={{ duration: 0.4, stiffness: 80 }}
      className="fixed overflow-y-scroll font-alegreya max-h-screen h-screen px-6 bg-background xs:flex lg:hidden flex-col z-[20] w-full "
    >
      <div className="py-[25px] text-text text-2xl justify-center items-center gap-[25px] flex flex-col">
        <div className="flex w-full">
          <FaX
            className="text-text"
            onClick={() => {
              setToggleMobileMenu((prev) => !prev);
            }}
          />
        </div>
        <button
          onClick={() => {
            setToggleMobileMenu((prev) => !prev);
            router.push("/");
          }}
          className="hover:underline font-medium"
        >
          Product
        </button>
        <button
          onClick={() => {
            setToggleMobileMenu((prev) => !prev);
            router.push("#benefits");
          }}
          className="hover:underline font-medium"
        >
          Benefits
        </button>
        <button
          onClick={() => {
            setToggleMobileMenu((prev) => !prev);
            router.push("#insights");
          }}
          className="hover:underline font-medium"
        >
          Merchants
        </button>
        <button
          onClick={() => {
            setToggleMobileMenu((prev) => !prev);
            router.push("#demo");
          }}
          className="hover:underline font-medium"
        >
          Fees
        </button>
      </div>
      <Button action={() => {}} text={"Get the App"} variant={"primary"} />
    </motion.div>
  );
};

export default MobileMenu;
