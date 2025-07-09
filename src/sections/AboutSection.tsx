import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full h-screen overflow-hidden">
      <img
        src={aboutImg}
        alt="Fondo sobre nosotros"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#d5bda9]/10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
      >
        <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-athom mb-6 text-center tracking-wide drop-shadow-md">
          athom
        </h2>

        <Link to="/sobre-nosotros" className="mt-4">
          <button
            className="
              px-8 py-4
              border border-white
              text-white
              font-semibold
              text-lg sm:text-xl
              rounded-md
              hover:bg-white
              hover:text-[#5e3c2c]
              transition-colors
              cursor-pointer
            "
          >
            Conocenos
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
