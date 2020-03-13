import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useMeasure } from "../../hooks/useMeasure";

const SmoothHeightResizerComponent: React.FC<JSX.IntrinsicElements["div"] & {
  onRest?: () => void;
}> = React.memo(({ children, onRest, ...rest }) => {
  const { bind, bounds } = useMeasure<HTMLDivElement>();
  const styles = useSpring({
    height: bounds.height,
    config: { ...config.default, clamp: true },
    onRest
  });
  return (
    <animated.div style={styles} css={{ overflow: "hidden" }}>
      <div css={{ minHeight: 0 }} {...bind} {...rest}>
        {children}
      </div>
    </animated.div>
  );
});

export const SmoothHeightResizer: React.FC<JSX.IntrinsicElements["div"]> = props => (
  <SmoothHeightResizerComponent {...props} />
);
