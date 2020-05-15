import React from "react";

import { BlockWrapper } from "../../ui/BlockWrapper";

export interface BillboardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export const Billboard: React.FC<BillboardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <BlockWrapper css={{ height: "70vh", display: "flex", paddingTop: 120 }}>
      <div
        css={{
          flexBasis: "70%",
          marginRight: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 css={{ fontSize: 50, marginBottom: 40 }}>{title}</h2>
        <p css={{ fontWeight: "lighter", lineHeight: 1.6 }}>{description}</p>
      </div>
      <div
        css={{
          flexBasis: 500,
          height: 600,
          position: "relative",
          top: 170,
          boxShadow: "20px 20px 0px #000",
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
        }}
      ></div>
    </BlockWrapper>
  );
};
