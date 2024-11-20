import { ValuesSectionData } from "../types/constants";

const ValuesSection = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">
          {ValuesSectionData.heading}
        </h2>
      </div>
      <div className="flex justify-between gap-8">
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
    </section>
  );
};

export default ValuesSection;
