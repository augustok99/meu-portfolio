import "../../index.css";
import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";

const Hero = () => {
  return (
    <div className="mt-12 justify-center flex">
      {/* COLUNA DIREITA */}
      <div className="flex flex-col gap-2 items-center justify-center pl-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:text-6xl text-4xl italic font-playfair leading-tight pt-16 text-start md:text-center"
        >
          <span className="block text-[#F2F2F2]">
            Transformo <span className=" text-[#10b981]">ideias </span>
            em <span className=" text-[#10b981]">soluções digitais </span>
            completas
          </span>
          <span className="block text-[#F2F2F2]">do front ao back-end.</span>
        </motion.h1>
        <CodeXml className="md:w-17 font-semibold md:h-20 w-12 h-12 text-[#10b981]" />
      </div>
    </div>
  );
};

export default Hero;
