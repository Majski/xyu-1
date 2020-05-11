import React from "react";
import Link from "next/link";

import { BlockWrapper } from "../ui/BlockWrapper";
import { ImageButton } from "../ImageButton";

export const Discography = () => {
  return (
    <section>
      <h2
        css={{
          color: "#000",
          fontWeight: "lighter",
          textAlign: "center",
          padding: "35px 0 25px 0",
        }}
      >
        Nasza twórczość
      </h2>
      <ImageButton imgSrc="/images/IMG_1.png" href="songs/czekam-na-ciebie">
        Czekam na Ciebie
      </ImageButton>
      <ImageButton
        imgSrc="/images/IMG_2.png"
        href="songs/grace-to-grace"
        css={{ marginTop: 5 }}
      >
        Grace to Grace
        <span css={{ fontSize: 14, display: "block", lineHeight: 1 }}>
          Łaski cud
        </span>
      </ImageButton>
      <BlockWrapper>
        <div
          css={{
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link href="/songs">
            <a
              css={{
                color: "#000",
                textDecoration: "none",
                marginRight: 15,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Cała dyskografia
            </a>
          </Link>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 490.656 490.656"
            xmlSpace="preserve"
            height="25px"
            css={{ transform: "rotate(-90deg)" }}
          >
            <path
              d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0
			c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667
			C491.696,131.368,491.696,124.605,487.536,120.445z"
            />
          </svg>
        </div>
      </BlockWrapper>
    </section>
  );
};
