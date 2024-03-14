function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-cyan-900 px-5 py-2 max-w-xl rounded-full flex justify-center mt-5 shadow-xl border-cyan-900 border-2 hover:border-cyan-600 transition-all">
      <ul className="flex gap-7 text-slate-300 font-semibold transition-all">
        <li>
          <a href="#" className="hover:text-slate-100">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-100">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-100">
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
