import { Link } from "react-router-dom";
import { BottomSectionData } from "../types/constants";

const BottomSection = () => {
  return (
    <div className="bg-slate-800 text-white py-12 text-center flex justify-between px-20">
      <p className="flex flex-col">
        <span className="text-xl font-semibold text-[#f9a826]">
          {BottomSectionData.phoneNo.label}
        </span>
        <span>{BottomSectionData.phoneNo.value}</span>
      </p>
      <p className="flex flex-col">
        <span className="text-xl font-semibold text-[#f9a826]">
          {BottomSectionData.github.label}
        </span>
        <Link
          to={BottomSectionData.github.value}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-[#f9a826]"
        >
          {BottomSectionData.github.value}
        </Link>
      </p>
      <p className="flex flex-col">
        <span className="text-xl font-semibold text-[#f9a826]">
          {BottomSectionData.email.label}
        </span>
        <span>{BottomSectionData.email.value}</span>
      </p>
    </div>
  );
};

export default BottomSection;
