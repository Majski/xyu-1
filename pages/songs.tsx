import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Song } from "../components/Song";
import { ImageButton } from "../components/ImageButton";

export const Songs = () => {
  return (
    <>
      <Header />
      <h1
        css={{
          marginTop: 50,
          color: "#000",
          textAlign: "center",
          fontWeight: "lighter",
          fontSize: 24,
          padding: "30px 0",
        }}
      >
        Teksty i akordy
      </h1>
      <Banner
        title="nowość"
        imageSrc="/images/IMG_4112.png"
        titleCss={{ fontSize: 60 }}
        wrapperCss={{ height: 300 }}
      />
      <Song
        title="Łaski cud"
        spotifyUrl=""
        youtubeUrl=""
        isExpanded={false}
        css={{ marginBottom: 100 }}
      />
      <ImageButton imageSrc="/images/IMG_1.png">Nie patrzę wstecz</ImageButton>
      <ImageButton imageSrc="/images/IMG_2.png" css={{ marginTop: 5 }}>
        Grace to Grace
        <span css={{ fontSize: 14, display: "block", lineHeight: 1 }}>
          Łaski cud
        </span>
      </ImageButton>
      <ImageButton imageSrc="/images/IMG_1.png" css={{ marginTop: 5 }}>
        Nie patrzę wstecz
      </ImageButton>
      <div css={{ marginBottom: 80 }} />
      <Footer />
    </>
  );
};

export default Songs;
