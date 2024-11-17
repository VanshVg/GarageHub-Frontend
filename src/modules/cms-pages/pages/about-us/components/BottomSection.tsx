import Button from "@/common/components/form-fields/Button";
import { BottomSectionData } from "../types";
import { btnShowType } from "@/common/types";

const BottomSection = () => {
  return (
    <div className="bg-slate-800 text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{BottomSectionData.heading}</h2>
      <p className="text-lg mb-6">{BottomSectionData.subHeading}</p>
      <Button
        showType={btnShowType.Primary}
        btnName={BottomSectionData.button}
      />
    </div>
  );
};

export default BottomSection;
