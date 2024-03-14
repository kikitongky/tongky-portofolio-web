const LinkButton = (props) => {
  return (
    <div className="flex justify-center">
      <a
        href="#"
        className=" bg-gradient-to-r from-gray-800 to-cyan-900 max-w-xl shadow font-bold py-2 px-4 rounded-2xl text-slate-400 hover:text-slate-100 border-cyan-900 border-2 hover:border-cyan-600 transition-all"
      >
        {props.children}
      </a>
    </div>
  );
};

export default LinkButton;
