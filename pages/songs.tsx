import React from "react";

import { songsData } from "../data/songs";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Song } from "../components/Song";
import { SongsList } from "../components/SongsList";

export const Songs = () => {
  // const { songs, pageTitle } = songsData;
  // return (
  //   <>
  //     <Header />
  //     <h1
  //       css={{
  //         marginTop: 50,
  //         color: "#000",
  //         textAlign: "center",
  //         fontWeight: "lighter",
  //         fontSize: 24,
  //         padding: "30px 0",
  //       }}
  //     >
  //       {pageTitle}
  //     </h1>
  //     <Banner
  //       title="nowość"
  //       imageSrc="/images/IMG_4112.png"
  //       titleCss={{ fontSize: 60 }}
  //       wrapperCss={{ height: 300 }}
  //     />
  //     <Song
  //       title="Łaski cud"
  //       spotifyUrl=""
  //       youtubeUrl=""
  //       isExpanded={false}
  //       css={{ marginBottom: 100 }}
  //     />
  //     <SongsList songs={songs} />
  //     <div css={{ marginBottom: 80 }} />
  //     <Footer />
  //   </>
  // );
};

export default Songs;
