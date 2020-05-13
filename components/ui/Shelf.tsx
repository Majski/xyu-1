import React from "react";

import { animated, useSpring } from "react-spring";
import { RemoveScroll } from "react-remove-scroll";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { theme } from "../../Theme";

interface Shelf {
  isVisible: boolean;
  width?: string;
}

export const Shelf: React.FC<Shelf> = ({
  isVisible,
  width,
  children,
  ...rest
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const { screenSizes } = theme;

  const styles = useSpring({
    transform: `translateX(${isVisible ? 0 : "100%"})`,
  });

  React.useEffect(() => {
    width = screenWidth > screenSizes.TABLET ? "30vw" : "100vw";
  }, [screenWidth]);

  return (
    <RemoveScroll enabled={isVisible}>
      <animated.div
        style={styles}
        css={{
          width,
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
