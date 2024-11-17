import Button from "@/common/components/form-fields/Button";
import { WhySectionData } from "../types";
import { btnShowType } from "@/common/types";

const WhySection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{WhySectionData.heading}</h2>
        <p className="text-lg text-gray-600 mb-12">
          {WhySectionData.subHeading}
        </p>
        <Button
          showType={btnShowType.Teal}
          btnName={WhySectionData.button}
          btnClass="bg-teal-400 text-white hover:bg-teal-600"
        />
      </div>
    </div>
  );
};

export default WhySection;
