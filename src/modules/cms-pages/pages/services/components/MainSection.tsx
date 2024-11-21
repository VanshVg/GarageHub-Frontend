import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import { MainSectionData } from "../types/constants";

const MainSection = () => {
  return (
    <section className="bg-slate-600 text-white py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        {MainSectionData.heading}
      </h1>
      <p className="mt-4 text-lg max-w-5xl mb-12">
        {MainSectionData.subHeading}
      </p>
      <Button showType={btnShowType.Teal} btnName={MainSectionData.button} />
    </section>
  );
};

export default MainSection;
