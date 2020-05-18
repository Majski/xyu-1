import React from "react";

import { animated, useSpring } from "react-spring";
import { RemoveScroll } from "react-remove-scroll";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { theme } from "../../Theme";
import { useIsMobile } from "../../hooks/useIsMobile";

interface Shelf {
  isVisible: boolean;
}

export const Shelf: React.FC<Shelf> = ({ isVisible, children, ...rest }) => {
  const { isMobile } = useIsMobile();

  const styles = useSpring({
    transform: `translateX(${isVisible ? 0 : "100%"})`,
  });

  return (
    <RemoveScroll enabled={isVisible}>
      <animated.div
        style={styles}
        css={{
          width: isMobile ? "100vw" : 400,
          height: "100vh",
          backgroundColor: "#000",
          position: "fixed",
          top: 0,
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
