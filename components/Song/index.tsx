import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Song = ({
  title,
  spotifyUrl,
  youtubeUrl,
  isExpanded,
  ...rest
}) => {
  //   const [isExpanded, setIsExpanded] = React.useState(false);

  //   const onExpandClick = React.useCallback(() => {
  //     setIsExpanded(!isExpanded);
  //   }, [isExpanded]);

  return (
    <section
      css={{ height: isExpanded ? 255 : 185, backgroundColor: "#000" }}
      {...rest}
    >
      <BlockWrapper
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <span css={{ fontSize: 20 }}>{title}</span>
        {isExpanded && (
          <div css={{ paddingTop: 25, paddingBottom: 50 }}>
            <p>tekst i muzyka:</p>
            <p>Tymoteusz Stokatski</p>
          </div>
        )}
        <div
          css={{
            display: "flex",
            alignItems: "center",
            img: {
              width: 32,
              marginRight: 20,
            },
          }}
        >
          <a href={spotifyUrl}>
            <img src="./images/spotify.png" />
          </a>
          <a href={youtubeUrl}>
            <img src="./images/youtube.png" />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="50"
            css={{ marginLeft: "auto" }}
          >
            <path
              fill="white"
              d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
            />
          </svg>
        </div>
      </BlockWrapper>
    </section>
  );
};
