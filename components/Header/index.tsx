import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Header = () => {
  return (
    <header css={{ height: 52, backgroundColor: "#000" }}>
      <BlockWrapper
        css={{
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        {/* <div>
          <a href="">Spotify</a>
          <a href="">YouTube</a>
          <a href="">Facebook</a>
        </div> */}
        <a
          href=""
          css={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            width: 50,
            height: 50
          }}
        >
          <img src="/images/logo-white.png" css={{ width: "100%" }} />
        </a>
        <button css={{}}>menu</button>
      </BlockWrapper>
    </header>
  );
};
