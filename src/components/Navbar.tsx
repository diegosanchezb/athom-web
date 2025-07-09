import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      const target = document.getElementById("hero");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("hero");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:hidden justify-between items-center py-4 relative">
          {/* Botón hamburguesa */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[#5e3c2c] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </motion.button>

          {/* Logo centrado */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            onClick={handleLogoClick}
            className="text-xl font-athom bg-gradient-to-r from-[#a08323] via-[#ba6c28] to-[#b69c77] text-transparent bg-clip-text"
          >
            athom coffee
          </motion.button>

          {/* Relleno invisible para simetría */}
          <div className="w-6" />
        </div>

        <div className="hidden md:grid grid-cols-3 items-center py-4">
          <div className="flex justify-start">
            <button
              onClick={handleLogoClick}
              className="text-2xl md:text-3xl lg:text-4xl font-athom bg-gradient-to-r from-[#a08323] via-[#ba6c28] to-[#b69c77] text-transparent bg-clip-text"
            >
              athom coffee
            </button>
          </div>

          <nav className="flex justify-center gap-8 text-[#5e3c2c] text-base font-medium">
            <a
              href="https://menu.fu.do/athomcaf%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Menu
            </a>
            <a
              href="https://wa.me/5492284687526"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Realizar pedidos
            </a>
            <a href="#about" className="hover:underline">
              Sobre nosotros
            </a>
          </nav>

          {/* Instagram */}
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/athomcoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-[#5e3c2c] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-sm shadow-md"
        >
          <ul className="flex flex-col space-y-4 py-5 px-6 text-[#5e3c2c] text-base font-medium">
            <li>
              <a
                href="https://menu.fu.do/athomcaf%C3%A9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5492284687526"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Realizar pedidos
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                Sobre nosotros
              </a>
            </li>
            <li className="pt-2 border-t border-[#5e3c2c]/20">
              <a
                href="https://www.instagram.com/athomcoffee"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <AiFillInstagram className="w-5 h-5 text-[#5e3c2c]" />
                Instagram
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
