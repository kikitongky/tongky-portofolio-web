import { Link } from "react-router-dom";

const Navlist = (props) => {
  const { to, children, className } = props;
  const router = window.location;
  return (
    <nav className="flex justify-center">
      <Link
        to={to}
        className={`${className} relative text-slate-300 hover:text-white transition-all group`}
      >
        {children}
        <span
          className={`
          h-[2px] inline-block bg-white w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-all duration-300 
          ${router.pathname === to ? "w-full" : "w-0"}
          `}
        >
          &nbsp;
        </span>
      </Link>
    </nav>
  );
};

export default Navlist;
