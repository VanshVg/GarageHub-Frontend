import { StorySectionData } from "../types/constants";

const StorySection = () => {
  return (
    <section className="bg-gray-100 py-16 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{StorySectionData.heading}</h2>
        </div>
        <p className="text-lg text-gray-700 text-center">
          {StorySectionData.subHeading}
        </p>
      </div>
    </section>
  );
};

export default StorySection;
