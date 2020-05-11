import React from "react";

import { animated, useSpring } from "react-spring";
import { RemoveScroll } from "react-remove-scroll";

interface Shelf {
  isVisible: boolean;
}

export const Shelf: React.FC<Shelf> = ({ isVisible, children, ...rest }) => {
  const styles = useSpring({
    transform: `translateX(${isVisible ? 0 : "100vw"})`,
  });

  return (
    <RemoveScroll enabled={isVisible}>
      <animated.div
        style={styles}
        css={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 400,
          overflowY: "auto",
        }}
        {...rest}
      >
        {children}
      </animated.div>
    </RemoveScroll>
  );
};
