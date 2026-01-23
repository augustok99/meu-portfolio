import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import Typewriter from "../../utils/Typewritter";

const About = () => {
  const { ref, controls } = useInViewAnimation({
    once: false,
    duration: 0.8,
    ease: "easeOut",
    leaveGrace: 3000,
  });

  // Control Typewriter start from this component so we can guarantee the
  // same 3s leave grace and avoid conflicting observers.
  const typeRef = useRef<HTMLDivElement | null>(null);
  const [showType, setShowType] = useState(false);

  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;
    let leaveTimeout: number | null = null;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (leaveTimeout) {
              clearTimeout(leaveTimeout);
              leaveTimeout = null;
            }
            setShowType(true);
          } else {
            if (leaveTimeout) clearTimeout(leaveTimeout);
            leaveTimeout = window.setTimeout(() => {
              leaveTimeout = null;
              setShowType(false);
            }, 3000);
          }
        });
      },
      { threshold: [0], rootMargin: "0px 0px -10px 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, []);

  useEffect(() => {}, [controls]);

  return (
    <div className="justify-center grid gap-14 mt-[15rem]">
      <h1 className="text-white text-4xl flex justify-center items-center font-semibold font-poppins mt-12 ">
        Sobre mim
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-12">
        <div>
          <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="rounded-2xl border-white/10 md:w-92 md:h-128 justify-center w-[18rem] h-[27rem]"
          >
            <img
              src="/imgs/img_perfil.png"
              className="rounded-2xl w-full h-full object-cover"
              alt="Model"
            />
          </motion.div>
        </div>
        <div className="w-[20rem] h-[27rem] md:w-[22rem]" ref={typeRef}>
          <Typewriter
            text={
              "Me chamo Carlos Augusto, atuo como desenvolvedor Full Stack, com foco em JavaScript/TypeScript e construção de aplicações web modernas. Ao longo da minha formação, atuei tanto no backend (autenticação, CRUD, estruturação de banco de dados) quanto no frontend, criando interfaces funcionais e bem estruturadas."
            }
            speed={14}
            startOnView={showType}
            className="text-[1.13rem] text-justify leading-relaxed font-semibold font-poppins text-white max-w-[23rem] tracking-[-0.25px] md:tracking-[-0.15px] lg:tracking-[-0.08px] [word-spacing:-0.14rem] md:[word-spacing:-0.12rem] lg:[word-spacing:-0.12rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
