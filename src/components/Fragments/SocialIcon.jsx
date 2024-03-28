const SocialIcon = (props) => {
  const { children } = props;
  return (
    <nav className="flex justify-center">
      <a
        href="#"
        target="_blank"
        className="p-[2px] bg-gradient-to-r from-gray-900 to-gray-950 border border-slate-300 rounded-full hover:-translate-y-2 transition-transform"
      >
        {children}
      </a>
    </nav>
  );
};

export default SocialIcon;
