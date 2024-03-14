import LinkButton from "../../Elements/Button";

const HeroTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-7xl font-bold text-white text-center flex-wrap max-[380px]:text-left">
        <span>I'am</span> Tongky
      </h1>
      <h5 className="text-xl text-slate-300 text-center font-semibold mt-5">
        Frontend Developer
      </h5>
      <p className="inline-block text-slate-300 mt-2 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi odit
        sapiente officiis, atque neque eaque.
      </p>
      <div className="mt-5">
        <LinkButton>Contact Me</LinkButton>
      </div>
    </div>
  );
};

export default HeroTitle;
