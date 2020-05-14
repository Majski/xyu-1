import React from "react";

import { songsData } from "../../data/songs";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Song } from "../../components/Song";
import { SongsList } from "../../components/SongsList";
import { Contents } from "../../components/Contents";
import { useIsMobile } from "../../hooks/useIsMobile";

import { Songs as Desktop } from "../../components/Desktop/songs";

export const Songs = () => {
  const { components } = songsData;
  const { isMobile } = useIsMobile();

  return (
    <>
      <Header />
      {isMobile && (
        <>
          <div css={{ height: 50 }} />
          <h1
            css={{
              color: "#000",
              textAlign: "center",
              fontWeight: "lighter",
              fontSize: 24,
              padding: "30px 0",
            }}
          >
            Teksty i akordy
          </h1>
          <Contents components={components} />
        </>
      )}
      {!isMobile && (
        <>
          <div css={{ height: 100 }} />
          <Desktop />
        </>
      )}
      <Footer />
    </>
  );
};

export default Songs;
