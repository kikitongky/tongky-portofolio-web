import Logo from "../../Elements/Logo";
import Navlist from "../../Elements/Navlist";

function Navbar() {
  return (
    <header className="flex justify-between w-full items-center mx-32 my-4 text-center">
      <Logo />
      <nav className="justify-center gap-12 flex">
        <Navlist to="/">Home</Navlist>
        <Navlist to="/about">About</Navlist>
        <Navlist to="/project">Project</Navlist>
      </nav>
    </header>
  );
}

export default Navbar;
