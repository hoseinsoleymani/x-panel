const Span = ({ children, className }: any) => {
  return (
    <span
      className={` ${className} mx-2  block min-w-20 break-words rounded-lg px-2 py-3 text-center text-sm md:text-base	`}
    >
      {children}
    </span>
  );
};

export default Span;
