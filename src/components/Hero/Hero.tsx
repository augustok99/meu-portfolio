import "../../index.css";
import { motion } from "framer-motion";
import { CodeXml, Home, Grid, User, Mail } from "lucide-react";
import { handleSmoothScroll } from "../../utils/smooth";
import useActiveSection from "../../hooks/useActiveSection";

const Hero = () => {
  const active = useActiveSection(["home", "projects", "about", "contact"]);

  return (
    <div
      id="home"
      className="mt-12 w-full justify-center mx-auto flex relative"
    >
      {/* COLUNA DIREITA */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col font-semibold text-center gap-2 items-center md:pl-10 md:px-10 px-8"
        >
          <h1
            style={{
              hyphens: "none",
              WebkitHyphens: "none",
              msHyphens: "none",
            }}
            className="md:text-6xl text-3xl font-poppins leading-tight md:pt-16 pt-22 text-center md:text-center md:font-[450] font-bold"
          >
            <span className="block dark:text-appTextDark">
              Transformo <span className="text-emerald-500">ideias </span>
              em{" "}
              <span className=" text-emerald-500">
                soluções <br /> digitais{" "}
              </span>
              completas
            </span>
          </h1>
          <CodeXml className="hidden md:flex md:w-20 md:h-20 w-16 h-16 pt-2 text-emerald-500" />
          <p className="font-bold text-center text-lg md:hidden pt-4 text-gray-500">
            Desenvolvimento full-stack com foco em experiência do usuário e
            performance.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM NAV MOBILE */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] md:hidden z-40">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex justify-between items-center">
          {/* make nav icons reflect active section */}
          <>
            <button
              onClick={() => handleSmoothScroll({ id: "home" })}
              className={`flex flex-col items-center ${active === "home" ? "text-emerald-500" : "text-slate-500"}`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1 font-semibold">INÍCIO</span>
            </button>

            <button
              onClick={() => handleSmoothScroll({ id: "about" })}
              className={`flex flex-col items-center ${active === "about" ? "text-emerald-500" : "text-slate-500"}`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">SOBRE</span>
            </button>
            <button
              onClick={() => handleSmoothScroll({ id: "projects" })}
              className={`flex flex-col items-center ${active === "projects" ? "text-emerald-500" : "text-slate-500"}`}
            >
              <Grid className="w-6 h-6" />
              <span className="text-xs mt-1">PROJETOS</span>
            </button>

            <button
              onClick={() => handleSmoothScroll({ id: "contact" })}
              className={`flex flex-col items-center ${active === "contact" ? "text-emerald-500" : "text-slate-500"}`}
            >
              <Mail className="w-6 h-6" />
              <span className="text-xs mt-1">EMAIL</span>
            </button>
          </>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
