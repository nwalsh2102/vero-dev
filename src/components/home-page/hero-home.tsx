"use client";

import { useEffect } from "react";
import { exampleImages } from "@/lib/demo-images";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const HomeHero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  const scrollToAbout = () => {
    const heroSection = document.querySelector(".hero-section");
    const navbar = document.querySelector("nav");
    if (heroSection && navbar) {
      const heroHeight = heroSection.getBoundingClientRect().height;
      const navbarHeight = navbar.getBoundingClientRect().height;
      const scrollPosition = heroHeight - navbarHeight + 5;

      // Dispatch event to show navbar
      window.dispatchEvent(new Event("showNavbar"));

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex w-dvw h-dvh justify-center items-center bg-background overflow-hidden hero-section"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-[clamp(1rem,3vh,2rem)] items-center flex flex-col px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-[clamp(2.5rem,8vw,4.5rem)] z-50 text-foreground font-calendas italic">
          Vero Design
        </p>
        <button
          onClick={scrollToAbout}
          className="text-[clamp(0.75rem,1.5vw,1rem)] z-50 hover:scale-110 transition-transform bg-accent text-white rounded-none py-[clamp(0.5rem,1vh,0.75rem)] px-[clamp(1.5rem,3vw,2rem)] cursor-pointer"
        >
          <div className="flex gap-1 items-center">
            Learn More <ChevronDown size={20} />
          </div>
        </button>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        {/* Top Row */}
        <FloatingElement
          depth={0.5}
          className="top-[8%] left-[11%] md:left-[11%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-[clamp(3rem,8vw,6rem)] h-[clamp(3rem,8vw,6rem)] md:w-[clamp(4rem,8vw,6rem)] md:h-[clamp(4rem,8vw,6rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={1}
          className="top-[10%] left-[32%] md:left-[32%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-[clamp(4rem,10vw,7rem)] h-[clamp(4rem,10vw,7rem)] md:w-[clamp(5rem,10vw,7rem)] md:h-[clamp(5rem,10vw,7rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={2}
          className="top-[2%] left-[53%] md:left-[53%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-[clamp(5rem,12vw,10rem)] h-[clamp(8rem,20vw,13rem)] md:w-[clamp(7rem,12vw,10rem)] md:h-[clamp(10rem,20vw,13rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={1}
          className="top-[0%] left-[83%] md:left-[83%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-[clamp(4rem,10vw,8rem)] h-[clamp(4rem,10vw,8rem)] md:w-[clamp(6rem,10vw,8rem)] md:h-[clamp(6rem,10vw,8rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        {/* Middle Row */}
        <FloatingElement depth={1} className="top-[40%] left-[2%] md:left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-[clamp(5rem,12vw,9rem)] h-[clamp(5rem,12vw,9rem)] md:w-[clamp(7rem,12vw,9rem)] md:h-[clamp(7rem,12vw,9rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={2}
          className="top-[70%] left-[77%] md:left-[77%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-[clamp(5rem,12vw,9rem)] h-[clamp(5rem,16vw,12rem)] md:w-[clamp(7rem,12vw,9rem)] md:h-[clamp(7rem,16vw,12rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        {/* Bottom Row */}
        <FloatingElement
          depth={4}
          className="top-[73%] left-[15%] md:left-[15%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-[clamp(8rem,16vw,13rem)] h-full md:w-[clamp(10rem,16vw,13rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={1}
          className="top-[80%] left-[50%] md:left-[50%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-[clamp(4rem,10vw,8rem)] h-[clamp(4rem,10vw,8rem)] md:w-[clamp(6rem,10vw,8rem)] md:h-[clamp(6rem,10vw,8rem)] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default HomeHero;
