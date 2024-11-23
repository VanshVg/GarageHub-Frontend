import Button from "@/common/components/form-fields/Button";
import { BottomSectionData } from "../types/constants";
import { btnShowType } from "@/common/types";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-800 text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{BottomSectionData.heading}</h2>
      <p className="text-lg mb-6">{BottomSectionData.subHeading}</p>
      <Button
        showType={btnShowType.Primary}
        btnName={BottomSectionData.button.name}
        onClickHandler={() => navigate(BottomSectionData.button.path)}
      />
    </section>
  );
};

export default BottomSection;
