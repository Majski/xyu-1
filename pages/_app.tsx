import { ParallaxProvider } from "react-scroll-parallax";

import "./globalStyles.css";
import { AppContextProvider } from "../contexts/AppContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </AppContextProvider>
  );
}
