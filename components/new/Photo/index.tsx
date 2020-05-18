import React from "react";

import { ParallaxBanner } from "react-scroll-parallax";

export interface PhotoProps {
  imgSrc: string;
  imgAlt: string;
  position?: string;
  withParallax?: boolean;
}

export const Photo: React.FC<PhotoProps> = ({
  imgSrc,
  imgAlt,
  position = "center",
  withParallax = true,
}) => {
  return (
    <section title={imgAlt} role="img">
      <div
        css={{
          ".parallax-banner-layer-0": {
            backgroundPositionY: `${position} !important`,
          },
        }}
      >
        <ParallaxBanner
          disabled={!withParallax}
          layers={[
            {
              image: imgSrc,
              amount: 0.3,
              children: null,
            },
          ]}
          style={{
            height: 350,
          }}
        ></ParallaxBanner>
      </div>
    </section>
  );
};
