import { motion } from "framer-motion";

export function MarqueeBanner2() {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span
      key={i}
      className="mx-8 text-xl font-athom text-neutral-500 whitespace-nowrap shrink-0"
    >
      athom coffee
    </span>
  ));

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="overflow-hidden bg-neutral-300 py-3 px-3"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite reverse" }}
        >
          {items}
          {items}
        </div>
      </motion.div>
    </>
  );
}
