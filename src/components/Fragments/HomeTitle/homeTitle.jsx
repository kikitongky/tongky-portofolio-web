import LinkButton from "../../Elements/Button";
import AnimatedText from "../../Elements/AnimatedText";

const HomeTitle = () => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <AnimatedText>Let's collaborate!</AnimatedText>
        <h3 className="text-lg text-slate-300 text-center mt-8 font-extralight">
          I am <span className="font-semibold text-white">Tongky</span>,
          Frontend Developer
        </h3>
      </div>
      <button className="flex justify-center items-center gap-6">
        <LinkButton className="bg-gradient-to-r from-gray-800 to-cyan-900 max-w-xl shadow py-2 px-4 rounded-2xl border-cyan-900 border-2 hover:border-cyan-600 align-center flex gap-2">
          Look my project{" "}
          <box-icon name="right-arrow-alt" color="white"></box-icon>
        </LinkButton>
      </button>
    </div>
  );
};

export default HomeTitle;
