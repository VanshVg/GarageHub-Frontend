import Button from "@/common/components/form-fields/Button";
import { MainSectionData } from "../types";
import { btnShowType } from "@/common/types";

const MainSection = () => {
  return (
    <div className="bg-slate-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">{MainSectionData.heading}</h1>
        <p className="text-lg mb-12">{MainSectionData.subHeading}</p>
        <Button showType={btnShowType.Teal} btnName={MainSectionData.button} />
      </div>
    </div>
  );
};

export default MainSection;
