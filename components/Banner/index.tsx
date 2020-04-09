import React from "react";

import { Interpolation } from "@emotion/core";

interface BannerProps {
  title: string;
  imageSrc: string;
  titleCss?: Interpolation;
  wrapperCss?: Interpolation;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  imageSrc,
  titleCss,
  wrapperCss,
}) => {
  return (
    <section
      css={[
        {
          height: 250,
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top, center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        wrapperCss,
      ]}
    >
      <h1 css={titleCss}>{title}</h1>
    </section>
  );
};
