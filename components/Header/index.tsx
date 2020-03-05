import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Header = () => {
  return (
    <header css={{ height: 80, backgroundColor: "#000" }}>
      <BlockWrapper css={{ height: "100%" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%"
          }}
        >
          <div>
            <a href="">Spotify</a>
            <a href="">YouTube</a>
            <a href="">Facebook</a>
          </div>
          <a href="">Logo</a>
          <button>menu</button>
        </div>
      </BlockWrapper>
    </header>
  );
};
