import { VisionSectionData } from "../types";

const VisionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{VisionSectionData.heading}</h2>
        <p className="text-lg text-gray-600 mt-4">
          {VisionSectionData.subHeading}
        </p>
      </div>
    </div>
  );
};

export default VisionSection;
