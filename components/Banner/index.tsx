import React from "react";

export const Banner = () => {
  return (
    <section
      css={{
        height: 250,
        backgroundImage: `url("/images/IMG_4112.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>XY UWIELBIENIE</h1>
    </section>
  );
};
