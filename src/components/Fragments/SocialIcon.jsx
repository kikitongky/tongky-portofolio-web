const SocialIcon = (props) => {
  const { children } = props;
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        target="_blank"
        className="p-[2px] bg-gradient-to-b from-gray-800 to-cyan-900 border border-slate-300 rounded-full hover:-translate-y-2 transition-transform"
      >
        {children}
      </a>
    </nav>
  );
};

export default SocialIcon;
