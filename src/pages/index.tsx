import Benefits from "@/components/home/benefits";
import Fees from "@/components/home/fees";
import Hero from "@/components/home/hero";
import Footer from "@/components/reusable/footer";
import MobileMenu from "@/components/reusable/mobile-menu";
import Navbar from "@/components/reusable/navbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
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
        <Hero />
        <Benefits />
        <Fees />
        <Footer />
      </main>
    </>
  );
}
