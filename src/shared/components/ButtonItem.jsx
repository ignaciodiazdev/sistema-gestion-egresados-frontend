export const ButtonItem = ({ children, ...props }) => {
  return (
    <button
      className="bg-primary rounded-primary text-white p-3 font-semibold w-full"
      {...props}
    >
      {children}
    </button>
  );
};
