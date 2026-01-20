import "../../index.css";
import { CodeXml } from "lucide-react";

const Header = () => {
  return (
    <div className="pl-28 pt-12">
      <header>
        <div className="justify-start flex gap-2 items-center">
          <h1 className="text-4xl font-semibold font-montserrat italic text-white">
            @codes.augusto
          </h1>
          <span className="text-4xl text-emerald-600">
            <CodeXml className="w-12 h-12 text-emerald-600" />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
