import React from "react";

import { BlockWrapper } from "../../ui/BlockWrapper";

export interface PhotoBoxProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const PhotoBox: React.FC<PhotoBoxProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <section css={{ backgroundColor: "white" }}>
      <BlockWrapper
        css={{
          height: "calc(100vh - 100px)",
          position: "relative",
          padding: "100px 0",
          display: "flex",
          alignItems: "center",
          maxWidth: 1200,
        }}
      >
        <div
          css={{
            height: "60vh",
            width: "100%",
            margin: "0 40px",
            position: "relative",
          }}
        >
          <div
            css={{
              width: 400,
              height: 600,
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              position: "relative",
              zIndex: 100,
              boxShadow: "20px 20px 0px #000",
            }}
          ></div>
          <div
            css={{
              backgroundColor: "#000",
              position: "absolute",
              right: 0,
              bottom: 0,
              height: "85%",
              width: "75%",
              padding: "50px 50px 50px 200px",
              p: { fontWeight: "lighter" },
            }}
          >
            <h2 css={{ fontSize: 50, marginBottom: 70 }}>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </BlockWrapper>
    </section>
  );
};
