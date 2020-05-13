import React from "react";

import { animated, useSpring } from "react-spring";

export const Sandbox = () => {
  const [isActive, setIsActive] = React.useState(false);

  const styles = useSpring({
    transform: `translateX(${isActive ? "0" : "100%"})`,
  });

  const onClick = React.useCallback(() => {
    setIsActive(!isActive);
  }, [isActive, setIsActive]);

  return (
    <div>
      <div onClick={onClick} css={{ width: 500, height: 500, color: "white" }}>
        click me
      </div>
      <animated.div
        style={styles}
        css={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          width: 800,
          position: "fixed",
          top: 0,
          right: 0,
        }}
      ></animated.div>
    </div>
  );
};

export default Sandbox;
