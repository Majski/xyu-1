import React from "react";

import { BlockWrapper } from "../../ui/BlockWrapper";

export interface CoverPhotoProps {
  imgSrc: string;
  title: string;
}

export const CoverPhoto: React.FC<CoverPhotoProps> = ({ imgSrc, title }) => {
  return (
    <div
      css={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        height: "calc(100vh - 100px)",
      }}
    >
      <BlockWrapper
        wrapperCss={{ height: "100%" }}
        css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          css={{
            width: 500,
            height: 800,
            backgroundColor: "#fff",
            opacity: 0.6,
            position: "absolute",
            left: 40,
            bottom: -100,
          }}
        />
        <h1
          css={{
            fontSize: 120,
            zIndex: 100,
            textShadow: "12px 5px 0px rgba(0,0,0,1)",
          }}
        >
          {title}
        </h1>
      </BlockWrapper>
    </div>
  );
};
