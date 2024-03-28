import Logo from "../../Elements/Logo";
import Navlist from "../../Elements/Navlist";

function Navbar() {
  return (
    <header className="flex justify-between w-full items-center mx-32 my-4">
      <Logo />
      <nav className="flex justify-center gap-12">
        <Navlist href="/">Home</Navlist>
        <Navlist href="/about">About</Navlist>
        <Navlist href="/project">Project</Navlist>
      </nav>
    </header>
  );
}

export default Navbar;
