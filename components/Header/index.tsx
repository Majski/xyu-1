import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";

import { animated, useSpring } from "react-spring";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const menuStyles = useSpring({
    transform: `translateX(${isMenuVisible ? 0 : "100vw"})`
  });

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
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          css={{
            zIndex: 500,
            width: 30,
            height: 20,
            padding: 0,
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch"
          }}
        >
          <div css={{ height: 3, backgroundColor: "#fff" }} />
          <div css={{ height: 3, backgroundColor: "#fff" }} />
          <div css={{ height: 3, backgroundColor: "#fff" }} />
        </button>
      </BlockWrapper>
      <animated.div
        style={menuStyles}
        css={{
          width: "100vh",
          height: "100vh",
          backgroundColor: "#000",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 400
        }}
      ></animated.div>
    </header>
  );
};
