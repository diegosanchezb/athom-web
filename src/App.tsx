import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { MarqueeBanner1 } from "./components/MarqueeBanner1";
import CookieSection from "./sections/CookieSection";
import { MarqueeBanner2 } from "./components/MarqueeBanner2";
import DulceSection from "./sections/DulceSection";
import SaladoSection from "./sections/SaladoSection";
import AboutSection from "./sections/AboutSection";
import SobreNosotros from "./assets/pages/SobreNosotros";
import OpinionesSection from "./sections/OpinionesSection";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="font-sans text-coffeeBrown bg-backgroundSoft">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <HeroSection />
                <MarqueeBanner1 />
                <CookieSection />
                <MarqueeBanner2 />
                <DulceSection />
                <SaladoSection />
                <MarqueeBanner1 />
                <AboutSection />
                <MarqueeBanner2 />
                <OpinionesSection />
                <MarqueeBanner1 />
                <Footer />
              </>
            }
          />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
        </Route>
      </Routes>
    </>
  );
}
