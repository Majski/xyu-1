import React from "react";
import Link from "next/link";

import { BlockWrapper } from "../ui/BlockWrapper";

export const ImageButton = ({ imgSrc, children, href, ...rest }) => (
  <div {...rest}>
    <div
      css={{
        height: 60,
        backgroundImage: `url("${imgSrc}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
    <Link href={href}>
      <div
        role="link"
        css={{ height: 60, backgroundColor: "#000", cursor: "pointer" }}
      >
        <BlockWrapper
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
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
    </Link>
  </div>
);
