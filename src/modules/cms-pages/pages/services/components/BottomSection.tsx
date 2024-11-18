import Button from "@/common/components/form-fields/Button";
import { BottomSectionData } from "../types/constants";
import { btnShowType } from "@/common/types";

const BottomSection = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">{BottomSectionData.heading}</h2>
      <p className="text-lg mb-6">{BottomSectionData.subHeading}</p>
      <div className="flex justify-center gap-6">
        <Button
          showType={btnShowType.Primary}
          btnName={BottomSectionData.primaryButton}
          btnClass="font-semibold"
        />
        <Button
          btnName={BottomSectionData.secondaryButton}
          btnClass="font-semibold bg-[#f9a826] text-black hover:bg-[#c47d17] px-6 py-3 rounded-md"
        />
      </div>
    </section>
  );
};

export default BottomSection;
