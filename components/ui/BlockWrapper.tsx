import React from "react";
import { Interpolation } from "@emotion/core";

interface BlockWrapperProps {
  wrapperCss?: Interpolation;
}

export const BlockWrapper: React.FC<
  BlockWrapperProps & JSX.IntrinsicElements["div"]
> = ({ children, wrapperCss, ...rest }) => {
  return (
    <section css={wrapperCss}>
      <div
        css={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}
        {...rest}
      >
        {children}
      </div>
    </section>
  );
};
