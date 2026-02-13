import React from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import { MdRocketLaunch } from "react-icons/md";
import { useThemeContext } from "../../context/useThemeContext";
import { MdComputer } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div
        style={{ cursor: "pointer", backfaceVisibility: "hidden" }}
        className="rounded-2xl text-left"
      >
        <div className="flex mx-auto md:mx-0 flex-col items-start md:items-center bg-[#00BC7D] rounded-2xl shadow-lg shadow-black/60 w-[16.5rem] h-[22rem] p-3 gap-3 md:w-[25rem] md:h-[29rem] md:p-4 md:gap-4">
          <div className="mx-auto mt-2 flex rounded-2xl w-[14rem] h-[11rem] select-none overflow-hidden md:mt-4 md:w-[21rem] md:h-[14rem]">
            <div className="w-full h-full rounded-2xl bg-white/7 flex items-center justify-center text-5xl text-current md:text-6xl">
              {icon}
            </div>
          </div>
          <div className="px-4 mt-2">
            <h3 className="text-lg md:text-xl font-bold font-poppins text-current text-left md:text-center mb-1 md:mb-2 select-none">
              {title}
            </h3>
            <p
              lang="pt-BR"
              style={{
                hyphens: "none",
                WebkitHyphens: "none",
                msHyphens: "none",
              }}
              className="text-sm md:text-[0.99rem] md:text-left font-semibold font-poppins select-none wrap-break-word tracking-[-0.12px] mt-4 md:mt-5 md:tracking-[-0.08px] [word-spacing:-0.06em]"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      style={{
        cursor: "pointer",
        backfaceVisibility: "hidden",
      }}
      className="rounded-2xl text-left"
    >
      <motion.div className="flex mx-auto md:mx-0 flex-col items-start md:items-center bg-[#00BC7D] rounded-2xl shadow-lg shadow-black/60 w-[16.5rem] h-[22rem] p-3 gap-3 md:w-[25rem] md:h-[29rem] md:p-4 md:gap-4">
        <div className="mx-auto mt-2 flex rounded-2xl w-[14rem] h-[11rem] select-none overflow-hidden md:mt-4 md:w-[21rem] md:h-[14rem]">
          <div className="w-full h-full rounded-2xl bg-white/7 flex items-center justify-center text-5xl text-current md:text-6xl">
            {icon}
          </div>
        </div>
        <div className="px-4 mt-2">
          <h3 className="text-lg md:text-xl font-bold font-poppins text-current text-left md:text-center mb-1 md:mb-2 select-none">
            {title}
          </h3>
          <p
            lang="pt-BR"
            style={{
              hyphens: "none",
              WebkitHyphens: "none",
              msHyphens: "none",
            }}
            className="text-sm md:text-[0.99rem] md:text-left font-semibold font-poppins select-none wrap-break-word tracking-[-0.12px] mt-4 md:mt-5 md:tracking-[-0.08px] [word-spacing:-0.06em]"
          >
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Services = () => {
  const { theme } = useThemeContext();
  return (
    <div
      id="services"
      className="justify-center grid gap-12 px-10 pt-2 md:pt-12 xl:pt-20 xl:pb-30"
    >
      <h1 className="text-3xl md:text-4xl text-center flex justify-center items-center font-semibold font-poppins">
        Como posso te ajudar?
      </h1>
      {/* cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 justify-center gap-22 xl:px-0 md:gap-16 md:px-12 md:pr-16 xl:pr-0 xl:gap-22">
        <ServiceCard
          icon={
            <PiCoffeeFill
              className={` ${theme === "dark" ? "text-[#f2f2f2]" : "text-black"} size-18`}
            />
          }
          title="UI/UX & Landing Pages"
          description="Desenvolvimento de interfaces de usuário intuitivas e responsivas, Landing pages profissionais focando na experiência do usuário."
        />
        <ServiceCard
          icon={
            <MdComputer
              className={` ${theme === "dark" ? "text-[#f2f2f2]" : "text-black"} size-18`}
            />
          } // Placeholder icon
          title="Aplicações Web"
          description="Criação de aplicações web modernas utilizando as melhores práticas e tecnologias atuais, feitas sob medida para suas necessidades."
        />
        <div className="md:col-span-2 md:flex md:justify-center xl:col-span-1">
          <ServiceCard
            icon={
              <MdRocketLaunch
                className={` ${theme === "dark" ? "text-[#f2f2f2]" : "text-black"} size-18`}
              />
            } // Placeholder icon
            title="Performance & Deploy"
            description="Otimização de performance e deploy de aplicações para produção, preocupação de quem entende a importância de um site rápido e eficiente."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
