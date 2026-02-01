import { motion } from "framer-motion";
import { Zap, PhoneCall } from "lucide-react";
import { useThemeContext } from "../../context/useThemeContext";
import { handleSmoothScroll } from "../../utils/smooth";
import { buttonVariants } from "../../utils/animations";

const Button = () => {
  const { theme } = useThemeContext();

  const contactThemeClasses =
    theme === "dark" ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className="flex justify-center mt-48 md:mt-[2rem]">
      <div className="md:grid-cols-2 md:gap-5 gap-4 flex flex-row">
        <motion.button
          style={{ cursor: "pointer" }}
          {...buttonVariants}
          onClick={() => handleSmoothScroll({ id: "contact" })}
          className={`md:px-8 px-4 py-4 md:rounded-3xl rounded-xl md:w-[13rem] w-[7rem] h-12 md:h-full font-bold font-poppins uppercase tracking-tighter md:text-lg text-lg flex justify-center gap-2 items-center ${contactThemeClasses}`}
        >
          <PhoneCall className="w-8 h-8 text-current" />
          <h1 className="hidden md:flex">CONTATO</h1>
        </motion.button>

        <motion.button
          {...buttonVariants}
          style={{ cursor: "pointer" }}
          onClick={() => handleSmoothScroll({ id: "projects" })}
          className="flex justify-center items-center md:px-10 w-[7rem] md:w-[13rem] font-poppins h-12 md:h-full px-4 rounded-xl mx-auto py-4 bg-emerald-500 dark:bg-emerald-400 text-black md:text-lg text-lg uppercase tracking-tighter md:rounded-3xl font-bold gap-1"
        >
          <Zap className="w-8 h-8 text-current" />
          <h1 className="hidden md:flex">PROJETOS</h1>
        </motion.button>
      </div>
    </div>
  );
};

export default Button;
