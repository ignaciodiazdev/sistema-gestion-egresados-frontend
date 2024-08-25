import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
      {...props}
    />
  );
});
