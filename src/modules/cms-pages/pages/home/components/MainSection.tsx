import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import { mainSectionData } from "../types/constants";

const MainSection = () => {
  return (
    <div className="bg-slate-600 text-white py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        {mainSectionData.header}
      </h1>
      <p className="text-lg md:text-xl mb-12 max-w-lg">
        {mainSectionData.subHeading}
      </p>
      <div className="flex gap-4">
        <Button
          showType={btnShowType.Teal}
          btnName={mainSectionData.tealButton}
        />
        <Button
          showType={btnShowType.Gray}
          btnName={mainSectionData.grayButton}
        />
      </div>
    </div>
  );
};

export default MainSection;
