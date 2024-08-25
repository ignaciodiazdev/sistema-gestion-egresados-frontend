import React from "react";

export const TextArea = React.forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="block w-full rounded-md border border-gray-300 py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm sm:leading-6 outline-0"
      {...props}
    />
  );
});
