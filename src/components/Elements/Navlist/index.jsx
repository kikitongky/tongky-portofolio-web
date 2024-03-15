const Navlist = (props) => {
  const { href, children, className } = props;
  return (
    <nav className="flex justify-center">
      <a
        href={href}
        className={
          "{className} relative text-slate-300 hover:text-white transition-all group"
        }
      >
        {children}
        <span className="h-[2px] inline-block bg-white w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-all duration-300">
          &nbsp;
        </span>
      </a>
    </nav>
  );
};

export default Navlist;
