import React from "react";

export const Social = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        a: {
          margin: "0 12px"
        },
        img: {
          width: 32
        }
      }}
    >
      <a href="">
        <img src="./images/facebook.png" />
      </a>
      <a href="">
        <img src="./images/spotify.png" />
      </a>
      <a href="">
        <img src="./images/youtube.png" />
      </a>
    </div>
  );
};
