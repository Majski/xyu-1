import React from "react";

import { animated, useSpring } from "react-spring";

export const HamburgerButton = ({ onClick, isActive }) => {
  const div1style = useSpring({
    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
    transformOrigin: 0,
  });
  const div2style = useSpring({
    opacity: isActive ? 0 : 1,
    transform: `scaleX(${isActive ? 0 : 1})`,
  });
  const div3style = useSpring({
    transform: isActive ? "rotate(-45deg)" : "rotate(0deg)",
    transformOrigin: "5px 4px",
  });
  const divStyles = {
    height: 3,
    backgroundColor: "#fff",
  };

  return (
    <button
      onClick={onClick}
      css={{
        outline: "none",
        zIndex: 500,
        width: 30,
        height: 20,
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        cursor: "pointer",
      }}
    >
      <animated.div style={div1style} css={divStyles} />
      <animated.div style={div2style} css={divStyles} />
      <animated.div style={div3style} css={divStyles} />
    </button>
  );
};
