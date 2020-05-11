import React from "react";

import { Interpolation } from "@emotion/core";

export interface BannerProps {
  title: string;
  imgSrc: string;
  titleCss?: Interpolation;
  wrapperCss?: Interpolation;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  imgSrc,
  // titleCss,
  // wrapperCss,
}) => {
  return (
    <section
      css={[
        {
          height: 250,
          backgroundImage: `url("${imgSrc}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top, center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        // wrapperCss,
      ]}
    >
      <h1>{title}</h1>
    </section>
  );
};
