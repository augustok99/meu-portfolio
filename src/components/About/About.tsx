import { motion } from "framer-motion";
import React, { useEffect } from "react";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const About = () => {
  const { ref, controls } = useInViewAnimation({
    once: false,
    duration: 0.8,
    ease: "easeOut",
  });

  // optional: keep a local effect for any additional logic
  useEffect(() => {}, [controls]);

  return (
    <div>
      {/* COLUNA ESQUERDA */}
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        className="rounded-2xl border-white/10 w-[34rem] h-128"
      >
        <img
          src="/imgs/img_perfil.png"
          className="rounded-2xl w-full h-full object-cover"
          alt="Model"
        />
      </motion.div>
    </div>
  );
};

export default About;
