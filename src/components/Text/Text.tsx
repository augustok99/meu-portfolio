import Typewriter from "../../utils/Typewritter";

const Text = () => {
  return (
    <div className="hidden md:pl-12 md:px-32 xl:pl-28 px-auto md:flex mx-auto w-78 md:h-28 md:text-center justify-center md:justify-center md:mx-0 md:w-full">
      <Typewriter
        text={`Desenvolvo interfaces modernas, acessíveis e focadas na experiência do usuário, estas são <md/>algumas das tecnologias que já utilizei em meus projetos.`}
        speed={14}
        startOnView={true}
        style={{
          hyphens: "none",
          WebkitHyphens: "none",
          msHyphens: "none",
        }}
        className="text-current text-center md:text-2xl font-semibold text-lg font-poppins mt-42 md:mt-19 h-54 px-3 md:px-0"
      />
    </div>
  );
};

export default Text;
