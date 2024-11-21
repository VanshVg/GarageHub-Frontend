import Button from "@/common/components/form-fields/Button";
import { CategoriesSectionData } from "../types/constants";
import { btnShowType } from "@/common/types";

const CategoriesSection = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
        {CategoriesSectionData.heading}
      </h2>
      <div className="flex flex-wrap gap-6 justify-between">
        {CategoriesSectionData.cards.map((category, index) => (
          <div
            key={index}
            className="text-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-default w-[30%]"
          >
            <div className="text-3xl mb-4">{category.icon}</div>
            <h4 className="font-bold text-slate-800">{category.name}</h4>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          showType={btnShowType.Teal}
          btnName={CategoriesSectionData.button}
          btnClass="bg-teal-400 text-white hover:bg-teal-600"
        />
      </div>
    </section>
  );
};

export default CategoriesSection;
