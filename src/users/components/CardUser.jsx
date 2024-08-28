import React from "react";

export const CardUser = ({ children }) => {
  return (
    <article className="rounded-lg border border-stroke bg-white p-3 md:p-6 shadow-sm">
      {children}
    </article>
  );
};
