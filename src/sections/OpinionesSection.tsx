import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const opiniones = [
  {
    nombre: "Hugo Alonso",
    texto:
      "Lindo lugar para ir a tomar un café. Lugar pequeño y cálido. Muy buena atención.",
    rating: 5,
    fecha: "2025-06-21",
  },
  {
    nombre: "Belen Solís",
    texto: "Muy ricos los alfajores de harina de almendras!!!",
    rating: 5,
    fecha: "2025-06-22",
  },
  {
    nombre: "Natacha Vázquez",
    texto: "Muy rico todo, buen servicio.",
    rating: 5,
    fecha: "2025-06-04",
  },
];

function tiempoDesde(fechaString: string) {
  const fecha = new Date(fechaString);
  const hoy = new Date();
  const diferenciaMs = hoy.getTime() - fecha.getTime();
  const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  if (dias < 7) return `hace ${dias} día${dias !== 1 ? "s" : ""}`;
  const semanas = Math.floor(dias / 7);
  return `hace ${semanas} semana${semanas !== 1 ? "s" : ""}`;
}

export default function OpinionesSection() {
  return (
    <section className="bg-[#f9f4f0] w-full py-20 px-6 font-serif">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl text-[#5e3c2c] font-semibold tracking-wide mb-4"
        >
          nuestros clientes
        </motion.h2>
        <p className="text-[#5e3c2c] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          valoraciones reales de quienes ya compartieron una experiencia en
          Athom
          <br />
          si todavía no viniste, te esperamos en nuestro café favorito
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-md p-6 space-y-6 flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl text-[#5e3c2c] font-semibold mb-4">
              Opiniones destacadas
            </h3>
            {opiniones.map((op, idx) => (
              <div
                key={idx}
                className="border border-[#d5bda9]/40 rounded-md p-4 bg-white/90 mb-4"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: op.rating }).map((_, i) => (
                    <FaStar key={i} className="text-[#ba6c28] w-4 h-4" />
                  ))}
                </div>
                <p className="text-[#5e3c2c] text-base sm:text-lg font-light leading-relaxed mb-2">
                  “{op.texto}”
                </p>
                <p className="text-[#5e3c2c] font-semibold text-sm sm:text-base mt-1">
                  — {op.nombre}
                </p>
                <p className="text-[#5e3c2c] text-sm italic mt-1">
                  {tiempoDesde(op.fecha)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://www.google.com/search?q=athom+cafe&oq=at&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGEMYrwEYxwEYgAQYigUyBggCEEUYQDIGCAMQRRg5MgYIBBAjGCcyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc1NzVqMGoxqAIIsAIB8QURBTuS54IkFg&sourceid=chrome&ie=UTF-8#lrd=0x95944594497a2be9:0xac2007d44e0a6546,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="
                  px-8 py-4
                  border border-[#5e3c2c]
                  text-[#5e3c2c]
                  font-semibold
                  text-lg sm:text-xl
                  rounded-md
                  hover:bg-[#5e3c2c]
                  hover:text-white
                  transition-colors
                  cursor-pointer
                "
              >
                Ver todas las opiniones
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-md p-6 flex flex-col justify-start h-full"
        >
          <h3 className="text-2xl sm:text-3xl text-[#5e3c2c] font-semibold mb-4">
            ¿Dónde estamos?
          </h3>
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10518.10579637203!2d-60.3280552!3d-36.8928183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95944594497a2be9%3A0xac2007d44e0a6546!2sAthom%20Caf%C3%A9!5e0!3m2!1ses!2sar!4v1712234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Athom Coffee"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
