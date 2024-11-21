import { VisionSectionData } from "../types/constants";

const VisionSection = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{VisionSectionData.heading}</h2>
        <p className="text-lg text-gray-600 mt-4">
          {VisionSectionData.subHeading}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
