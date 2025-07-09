import { motion } from "framer-motion";
import tortasImg from "../assets/images/tortas.jpg";

export default function DulceSection() {
  const pedidoLink =
    "https://linktr.ee/athomcafe?fbclid=PAZXh0bgNhZW0CMTEAAadBVmOUYSQ1rbtT5zSOnmwk3GQsIHvvz-n2KiYi0fZI27BJfG7zqKdBolM0FQ_aem_4yo_CUxthZWcG1UctUcTLw";

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 bg-[#B92222]/50 p-8 flex flex-col justify-center h-[85vh]"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-athom text-[#5e3c2c] mb-4 text-center">
            tortas
          </h2>

          <div className="h-[1px] bg-[#5e3c2c] w-[70%] my-4 mx-auto" />

          <p className="text-xl sm:text-2xl text-[#5e3c2c] mb-1 leading-relaxed text-center">
            blondie del bosque, marquise choco-blanco y oreo, brownie ferrero,
            <br />
            lemoncheese, franui by athom, key lime pie, cheesecake frutos rojos,
            <br />
            brownie bomba, crumble de manzana, carrot cake, matilda 2.0
          </p>

          <div className="h-[1px] bg-[#5e3c2c] w-[70%] my-4 mx-auto" />

          <div className="mt-8 flex justify-center">
            <a href={pedidoLink} target="_blank" rel="noopener noreferrer">
              <button
                className="
                  px-8 py-4
                  border border-[#5e3c2c]
                  text-[#5e3c2c]
                  font-semibold
                  text-lg sm:text-xl
                  rounded-md
                  hover:bg-[#A01A1A]
                  hover:text-white
                  transition-colors
                  cursor-pointer
                "
              >
                Realizar un pedido
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 h-[85vh]"
        >
          <img
            src={tortasImg}
            alt="Variedad de tortas"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
