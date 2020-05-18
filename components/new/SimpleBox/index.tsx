import React from "react";

import { BlockWrapper } from "../../ui/BlockWrapper";

export interface SimpleBoxProps {
  title: string;
  description: string;
  subtitle: string;
  imgSrc: string;
}

export const SimpleBox: React.FC<SimpleBoxProps> = ({
  title,
  description,
  subtitle,
  imgSrc,
}) => {
  return (
    <section css={{ backgroundColor: "#fff" }}>
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
            height: "50vh",
            width: "100%",
            margin: "0 40px",
            position: "relative",
          }}
        >
          <div
            css={{
              width: 400,
              height: 400,
              backgroundColor: "#000",
              position: "relative",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="100"
              css={{
                position: "absolute",
                right: 40,
                bottom: 40,
                zIndex: 100,
              }}
            >
              <path
                fill="white"
                d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
              />
            </svg>
          </div>
          <div
            css={{
              backgroundColor: "#000",
              position: "absolute",
              right: 0,
              bottom: 0,
              height: "85%",
              width: "75%",
              padding: "50px 50px 50px 200px",
            }}
          >
            <h2 css={{ fontSize: 50 }}>{title}</h2>
            <p css={{ fontWeight: "lighter" }}>{description}</p>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <img
                src={imgSrc}
                css={{
                  width: 80,
                  height: 80,
                  marginRight: 30,
                }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: subtitle }}
                css={{
                  color: "#fff",
                  lineHeight: 1.2,
                  fontWeight: "lighter",
                  fontSize: 16,
                }}
              ></p>
            </div>
          </div>
        </div>
      </BlockWrapper>
    </section>
  );
};
