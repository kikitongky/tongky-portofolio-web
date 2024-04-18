import AnimatedTextH1 from "../../Elements/AnimatedText";
import HomeSubtitle from "../../Elements/HomeSubtitle";

const HomeTitle = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 self-center sm:self-start">
        <AnimatedTextH1 className="text-7xl sm:text-8xl text-wrap sm:text-right leading-[5rem] sm:leading-[6.75rem] flex-wrap">
          I am Tongky
        </AnimatedTextH1>
      </div>
      <div className="w-full h-[2px] sm:h-[18rem] sm:w-[2px] bg-gray-300 my-4 sm:my-0"></div>
      <HomeSubtitle />
    </div>
  );
};

export default HomeTitle;
