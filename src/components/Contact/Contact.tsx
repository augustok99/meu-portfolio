const Contact = () => {
  return (
    <div className="flex flex-col gap-1 mt-[18rem]">
      <h1 className="text-white text-4xl flex justify-center items-center font-semibold font-poppins">
        Contato
      </h1>
      <div className=" grid gap-14 mt-4">
        <div className="flex justify-end mx-55 rounded-xl mt-5 h-[38rem] py-9 pr-9 bg-gradient-to-r from-[#189c70] via-[#219b72] to-[#1f855c] mb-33">
          <div className="flex justify-start text-start items-start px-12">
            <h1 className="font-poppins font-bold text-3xl w-[30rem]">
              Vamos discutir as suas ideias e transforma-las em{" "}
              <span className="text-[#13094e] font-bold">realidade </span>
              juntos!
            </h1>
          </div>
          <div className="h-full w-1/2 rounded-xl bg-[#0e0930] via-[#0a001e] to-[#343485]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
