import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero6.jpg";

const backgrounds = [hero1, hero2, hero3, hero4, hero5];
const CHANGE_INTERVAL = 7000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % backgrounds.length),
      CHANGE_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[120vh] overflow-hidden"
    >
      {backgrounds.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Fondo ${idx + 1}`}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{
            scale: idx === current ? 1 : 1.05,
            opacity: idx === current ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 gap-4">
        <motion.h1
          className="text-[6rem] md:text-[16rem] lg:text-[26rem] mt-68 text-white text-center leading-none drop-shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          athom
        </motion.h1>

        <motion.p
          className="mt-4 font-sans text-2xl md:text-3xl text-white/90 tracking-widest drop-shadow-md"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          pet friendly coffee
        </motion.p>
      </div>
    </section>
  );
}
