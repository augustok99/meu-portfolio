import "../../index.css";
import { FiInstagram } from "react-icons/fi";

const Header = () => {
  return (
    <div className="md:pl-28 md:pt-12 md:mt-0 pt-6 pl-4 flex justify-center md:justify-start">
      <header>
        <div className="justify-start flex gap-2 items-center">
          <h1 className="md:text-3xl text-2xl font-semibold font-montserrat italic text-[#F2F2F2]">
            @codes.augusto
          </h1>
          <span className="text-4xl text-emerald-600">
            <FiInstagram className="md:w-8 md:h-12 w-7 h-8 text-[#F2F2F2]" />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
