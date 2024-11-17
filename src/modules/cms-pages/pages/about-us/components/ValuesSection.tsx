import { ValuesSectionData } from "../types";

const ValuesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{ValuesSectionData.heading}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ValuesSectionData.cards.map((card) => (
          <div className="text-center">
            <div className="bg-slate-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <card.icon />
            </div>
            <h3 className="text-xl font-bold">{card.heading}</h3>
            <p className="text-gray-600 mt-2">{card.subHeading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
