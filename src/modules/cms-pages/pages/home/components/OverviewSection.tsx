import { GreenCheckIcon } from "@/assets/Svg";
import { OverviewSectionData } from "../types/constants";
import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";

const OverviewSection = () => {
  return (
    <div className="bg-gray-100 py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          {OverviewSectionData.header}
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {OverviewSectionData.subHeading}
        </p>

        <div className="flex justify-between gap-8 mt-12">
          {OverviewSectionData.cards.map((card, index) => (
            <div
              className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition cursor-default w-[30%]"
              key={index}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {card.heading}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {card.benefits.map((benefit, index) => (
                  <li className="flex gap-[10px]" key={index}>
                    <GreenCheckIcon /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            showType={btnShowType.Teal}
            btnName={OverviewSectionData.tealButton}
            btnClass="bg-teal-400 text-white hover:bg-teal-600"
          />
          <Button
            btnName={OverviewSectionData.slateButton}
            btnClass="bg-slate-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
