import BottomSection from "./components/BottomSection";
import MainSection from "./components/MainSection";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import VisionSection from "./components/VisionSection";
import WhySection from "./components/WhySection";

const AboutUsPage = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      <MainSection />
      <VisionSection />
      <StorySection />
      <ValuesSection />
      <WhySection />
      <BottomSection />
    </section>
  );
};

export default AboutUsPage;
