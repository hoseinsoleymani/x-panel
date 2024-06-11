const Span = ({ children,className }: any) => {
  return (
    <span className={` ${className}  min-w-20 text-sm md:text-base mx-2 text-center rounded-lg py-3 px-2`}>
      {children}
    </span>
  );
};

export default Span;
