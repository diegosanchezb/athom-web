import { motion } from "framer-motion";
import portadaImg from "../images/portada.jpg";
import img1 from "../images/historia1.jpg";
import img2 from "../images/historia2.jpg";
import img3 from "../images/historia3.jpg";

export default function SobreNosotros() {
  const sections = [
    {
      image: img1,
      text: `Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      image: img2,
      text: `Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      image: img3,
      text: `Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ];

  return (
    <section id="sobre-nosotros" className="w-full font-serif bg-[#f9f4f0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[100vh] overflow-hidden"
      >
        <img
          src={portadaImg}
          alt="Portada Athom"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="text-center py-16 px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#5e3c2c] font-semibold tracking-wide mb-4">
          nuestra historia
        </h2>
        <div className="h-[2px] w-24 bg-[#5e3c2c] mx-auto mb-6" />
        <p className="text-[#5e3c2c] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Un recorrido por los momentos que nos formaron, nos inspiraron y nos
          conectaron con vos.
        </p>
      </div>

      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <section
            key={idx}
            className={`flex flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } w-full py-12 md:py-10 px-6 md:px-20 items-center gap-4`}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full md:w-1/2"
            >
              <p className="text-[#5e3c2c] text-xl sm:text-2xl leading-relaxed font-light tracking-wide">
                {sec.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isEven ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full md:w-1/2 h-[75vh]"
            >
              <img
                src={sec.image}
                alt={`Historia ${idx + 1}`}
                className="object-cover w-full h-full rounded-md shadow-md"
              />
            </motion.div>
          </section>
        );
      })}
    </section>
  );
}
