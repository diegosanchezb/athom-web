// components/FadeInSection.tsx
import { motion } from "framer-motion";
import React from "react";

export default function FadeInSection({
  children,
  from = "left",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
}) {
  const xOffset = from === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
