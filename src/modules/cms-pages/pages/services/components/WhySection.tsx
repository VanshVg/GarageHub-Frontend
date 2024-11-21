import { GreenCheckIcon } from "@/assets/Svg";
import { WhySectionData } from "../types/constants";

const WhySection = () => {
  return (
    <section className="py-12 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        {WhySectionData.heading}
      </h2>
      <div className="flex justify-center gap-32">
        {WhySectionData.cards.map((card) => (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              {card.heading}
            </h3>
            <ul className="space-y-3">
              {card.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[10px] text-gray-600"
                >
                  <GreenCheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
