import { StorySectionData } from "../types";

const StorySection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{StorySectionData.heading}</h2>
        </div>
        <p className="text-lg text-gray-700">{StorySectionData.subHeading}</p>
      </div>
    </div>
  );
};

export default StorySection;
