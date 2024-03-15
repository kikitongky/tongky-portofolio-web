import LinkButton from "../../Elements/Button";
import AnimatedText from "../../Elements/AnimatedText";

const HomeTitle = () => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <AnimatedText>Let's collaborate to craft stunning website</AnimatedText>
        <h3 className="text-xl text-slate-300 text-center mt-8">
          I am Tongky, Frontend Developer
        </h3>
      </div>
      <button className="flex justify-center items-center gap-6">
        <LinkButton className="bg-gradient-to-r from-gray-800 to-cyan-900 max-w-xl shadow py-2 px-4 rounded-2xl border-cyan-900 border-2 hover:border-cyan-600">
          Contact Me
        </LinkButton>
        <LinkButton className="underline">Project</LinkButton>
      </button>
    </div>
  );
};

export default HomeTitle;
