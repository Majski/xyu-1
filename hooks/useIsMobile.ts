import React from "react";

import { theme } from "../Theme";
import { useWindowDimensions } from "./useWindowDimensions";

export const useIsMobile = () => {
  const { width } = useWindowDimensions();
  const { screenSizes } = theme;
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsMobile(width < screenSizes.TABLET);
  }, [width]);

  return { isMobile };
};
