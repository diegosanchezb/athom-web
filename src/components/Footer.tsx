// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#5e3c2c] text-white w-full py-10 px-16 font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-8">
        <div className="text-center md:text-left space-y-2 md:space-y-3 md:-ml-30">
          <h4 className="text-xl font-semibold">Contacto</h4>
          <p className="text-s leading-relaxed">
            General paz 2524
            <br />
            Olavarría, provincia de Buenos Aires
            <br />
            Lun a Sáb de 8HS a 20HS
            <br />
            Dom y Feriados de 16HS a 20HS
          </p>
        </div>

        <div className="text-center">
          <p className="text-s mb-1">Seguinos en:</p>
          <a
            href="https://www.instagram.com/athomcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-8
              font-athom
              bg-gradient-to-r from-[#a08323] via-[#ba6c28] to-[#b69c77]
              text-transparent bg-clip-text cursor-pointer
            "
          >
            @athomcafe
          </a>
        </div>

        <div className="text-center md:text-right space-y-2 md:-mr-20">
          <h4 className="text-xl font-semibold">Enlaces rápidos</h4>
          <ul className="space-y-1 text-s">
            <li>
              <a href="#hero" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="hover:underline">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <a
                href="https://menu.fu.do/athomcaf%C3%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Productos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-s text-white/60">
        © 2025 Diego Sánchez. Todos los derechos reservados.
      </div>
    </footer>
  );
}
