import React from "react";
import Link from "next/link";

interface Song {
  imgSrc: string;
  title: string;
  subtitle?: string;
  url?: string;
}

export const Song: React.FC<Song> = ({ imgSrc, title, subtitle, url }) => {
  return (
    <div
      css={{
        height: 250,
        backgroundColor: "#000",
        display: "flex",
        marginBottom: 10,
      }}
    >
      <div
        css={{
          flexBasis: 450,
          height: "100%",
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
        }}
      />
      <div
        css={{
          padding: "50px 30px 10px 30px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p css={{ fontSize: 30, fontWeight: "lighter", lineHeight: "1" }}>
          {title}
          {subtitle && (
            <>
              <br />
              <span css={{ fontSize: 20 }}>{subtitle}</span>
            </>
          )}
        </p>
        {url && (
          <Link href={url}>
            <a
              css={{
                alignSelf: "flex-end",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="100"
              >
                <path
                  fill="white"
                  d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
                />
              </svg>
              <span
                css={{
                  fontSize: 20,
                  position: "absolute",
                  left: -10,
                  top: 10,
                }}
              >
                więcej
              </span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
