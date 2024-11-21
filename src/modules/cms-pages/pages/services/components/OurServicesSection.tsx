import { OurServicesSectionData } from "../types/constants";

const OurServicesSection = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
        {OurServicesSectionData.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OurServicesSectionData.cards.map((service, index) => (
          <div
            key={index}
            className="text-center border rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-default"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
