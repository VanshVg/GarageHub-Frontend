import { BlackCheckIcon } from "@/assets/Svg";
import { HowSectionData } from "../types/constants";

const HowSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          {HowSectionData.heading}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          {HowSectionData.subHeading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {HowSectionData.cards.map((card, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {card.heading}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`${card.svgBg} text-white rounded-full p-3`}>
                    <BlackCheckIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {card.subHeading}
                    </h4>
                    <p className="text-gray-600 text-sm">{card.subText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;
