import Hero from "@/components/home/hero";
import MBenefits from "@/components/merchants/m-benefits";
import MFees from "@/components/merchants/m-fees";
import MHero from "@/components/merchants/m-hero";
import Footer from "@/components/reusable/footer";
import MobileMenu from "@/components/reusable/mobile-menu";
import Navbar from "@/components/reusable/navbar";
import TBenefits from "@/components/tech/t-benefits";
import TFees from "@/components/tech/t-fees";
import THero from "@/components/tech/t-hero";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Technologies() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <>
      <AnimatePresence>
        {toggleMobileMenu && (
          <MobileMenu setToggleMobileMenu={setToggleMobileMenu} />
        )}
      </AnimatePresence>
      <main
        className={`bg-white relative top-0 font-avenir ${
          toggleMobileMenu && "fixed overflow-hidden h-screen w-screen"
        }`}
      >
        <Navbar
          setToggleMobileMenu={setToggleMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />
        <THero />
        <TBenefits />
        <Footer />
      </main>
      ;
    </>
  );
}
