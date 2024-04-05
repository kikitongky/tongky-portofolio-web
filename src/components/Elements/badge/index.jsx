const Badge = (props) => {
  const { children, className } = props;
  return (
    <span
      className={`flex items-center text-sm sm:text-base gap-1 rounded px-2 font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
