export const ButtonItem = ({ children, ...props }) => {
  return (
    <button
      className="bg-primary rounded-md text-white p-3 font-semibold w-full"
      {...props}
    >
      {children}
    </button>
  );
};
