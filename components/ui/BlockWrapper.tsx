import React from "react";

export const BlockWrapper = ({ children, ...rest }) => {
  return (
    <div
      css={{ maxWidth: 1024, margin: "0 auto", padding: "0 40px" }}
      {...rest}
    >
      {children}
    </div>
  );
};
