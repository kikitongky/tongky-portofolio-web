const LinkButton = (props) => {
  const { className, children, href } = props;
  return (
    <div className="flex justify-center">
      <a
        href={href}
        className={`text-slate-400 hover:text-slate-100 transition-all font-semibold ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
