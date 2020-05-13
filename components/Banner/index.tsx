import React from "react";

import { Interpolation } from "@emotion/core";
import { theme } from "../../Theme";
import { BlockWrapper } from "../ui/BlockWrapper";

export interface BannerProps {
  title?: string;
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
  const { bp } = theme;

  return (
    <BlockWrapper
      wrapperCss={{
        backgroundImage: `url("${imgSrc}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top, center",
      }}
      css={[
        {
          height: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [bp.FROM_TABLET]: {
            height: "calc(100vh - 100px)",
            position: "relative",
          },
        },
        // wrapperCss,
      ]}
    >
      <div
        css={{
          display: "none",
          [bp.FROM_TABLET]: {
            display: "block",
            position: "absolute",
            bottom: "-100px",
            left: 40,
            width: 500,
            height: 800,
            backgroundColor: "#fff",
            opacity: 0.7,
            zIndex: 1,
          },
        }}
      ></div>
      {title && (
        <h1
          css={{
            fontSize: 30,
            textShadow: "12px 5px 0px rgba(0, 0, 0, 1)",
            fontWeight: "bold",
            zIndex: 10,
            [bp.FROM_TABLET]: {
              fontSize: 150,
            },
          }}
        >
          {title}
        </h1>
      )}
    </BlockWrapper>
  );
};
