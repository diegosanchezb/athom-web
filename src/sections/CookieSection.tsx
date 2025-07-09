import { motion } from "framer-motion";
import cookiesImg from "../assets/images/cookies.jpg";

export default function CookieSection() {
  const instaLink =
    "https://www.instagram.com/stories/highlights/18127169341359516/";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.img
        src={cookiesImg}
        alt="Cookies"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-x-0 bottom-10 sm:bottom-20 px-4 sm:px-20 flex justify-between items-baseline">
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl sm:text-5xl font-medium text-white"
        >
          Cookies
        </motion.span>

        <motion.a
          href={instaLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className="px-5 cursor-pointer py-2 sm:px-10 sm:py-5 text-white text-base sm:text-3xl rounded border border-white hover:bg-white hover:text-[#ba6c18] transition-colors">
            Ver variedad
          </button>
        </motion.a>
      </div>
    </section>
  );
}
