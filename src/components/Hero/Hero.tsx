import "../../index.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-8 ">
      {/* COLUNA ESQUERDA */}
      <div className="pt-22 pl-28 flex flex-col gap-12 ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl font-playfair leading-tight pt-16"
        >
          Transformo <span className="italic text-emerald-700">ideias</span> em{" "}
          <span className="italic text-emerald-700">experiências</span> de
          <br /> interfaces{" "}
          <span className="italic text-emerald-700">memoráveis.</span>
        </motion.h1>
      </div>

      {/* COLUNA DIREITA */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="rounded-2xl border-white/10 ml-72 w-[24rem] h-128"
      >
        <img
          src="/img.png"
          className="rounded-2xl w-full h-full object-cover "
          alt="Model"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
