import React from "react";
import ResizeObserver from "resize-observer-polyfill";

interface IBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function useMeasure<T extends HTMLElement>(
  defaultBounds?: Partial<IBounds>
) {
  const ref = React.useRef<T>(null);
  const [bounds, set] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ...defaultBounds
  });
  const [ro] = React.useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ro]);
  return { bind: { ref }, bounds };
}
