import { useState } from "react";
import Logo from "../../Elements/Logo";
import Navlist from "../../Elements/Navlist";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between w-full items-center px-10 my-4 md:px-16 relative">
      <Logo />

      <button
        className="flex flex-col justify-center items-center md:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-slate-300 block h-0.5 w-6 rounded-sm transition-all ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-slate-300 block h-0.5 w-6 rounded-sm transition-all ease-out my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-slate-300 block h-0.5 w-6 rounded-sm transition-all ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <nav className="justify-center gap-12 hidden md:flex">
        <Navlist to="/">Home</Navlist>
        <Navlist to="/about">About</Navlist>
        <Navlist to="/project">Project</Navlist>
      </nav>

      {/* mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex md:hidden flex-col min-w-[70vw] justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gray-950/90 backdrop-blur-md py-28 rounded-lg  ring-[1px] ring-white"
        >
          <nav className="justify-center gap-12 flex flex-col z-50">
            <Navlist to="/">Home</Navlist>
            <Navlist to="/about">About</Navlist>
            <Navlist to="/project">Project</Navlist>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}

export default Navbar;
