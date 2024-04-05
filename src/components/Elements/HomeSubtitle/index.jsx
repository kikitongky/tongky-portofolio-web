const HomeSubtitle = () => {
  return (
    <div className="flex-1 text-lg text-slate-300 text-left font-extralight self-end ml-4 leading-6 relative">
      <h3>
        <span className="font-semibold text-white">Frontend</span>
        <br />
        Web Developer &#x1F680;
      </h3>
      <a
        href="mailto:tongkytongky@gmail.com"
        className="mt-4 flex gap-2 hover:text-white text-sm underline transition-all"
      >
        Contact Me
      </a>
      <div className="absolute h-28 w-28 bg-cyan-500 bottom-10 left-8 blur-3xl rounded-full -z-1 opacity-50" />
    </div>
  );
};

export default HomeSubtitle;
