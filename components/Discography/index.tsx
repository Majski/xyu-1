import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";

const ImageButton = ({ imageSrc, children, ...rest }) => (
  <>
    <div
      css={{
        height: 60,
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      {...rest}
    />
    <div
      role="button"
      css={{ height: 60, backgroundColor: "#000", cursor: "pointer" }}
    >
      <BlockWrapper
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%"
        }}
      >
        <span css={{ fontWeight: "lighter" }}>{children}</span>
        <svg
          height="25px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.002 512.002"
        >
          <path
            fill="#fff"
            d="M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074 0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z"
          />
        </svg>
      </BlockWrapper>
    </div>
  </>
);

export const Discography = () => {
  return (
    <section>
      <h2
        css={{
          color: "#000",
          fontWeight: "lighter",
          textAlign: "center",
          padding: "35px 0 25px 0"
        }}
      >
        Nasza twórczość
      </h2>
      <ImageButton imageSrc="/images/IMG_1.png">Czekam na Ciebie</ImageButton>
      <ImageButton imageSrc="/images/IMG_2.png" css={{ marginTop: 5 }}>
        Grace to Grace
        <span css={{ fontSize: 14, display: "block", lineHeight: 1 }}>
          Łaski cud
        </span>
      </ImageButton>
      <BlockWrapper>
        <div
          css={{
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <a
            href=""
            css={{
              color: "#000",
              textDecoration: "none",
              marginRight: 15,
              fontSize: 14
            }}
          >
            Cała dyskografia
          </a>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 490.656 490.656"
            xmlSpace="preserve"
            height="25px"
            css={{ transform: "rotate(-90deg)" }}
          >
            <path
              d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0
			c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667
			C491.696,131.368,491.696,124.605,487.536,120.445z"
            />
          </svg>
        </div>
      </BlockWrapper>
    </section>
  );
};
