import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { songs } from "../../../data/songs";
import { Header } from "../../../components/Header";
import { Spacer } from "../../../components/Spacer";
import { BlockWrapper } from "../../../components/ui/BlockWrapper";
import { Banner } from "../../../components/Banner";
import { Song } from "../../../components/Song";
import { Song as DesktopSong } from "../../../components/Desktop/components/Song";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { Footer } from "../../../components/Footer";

const SongPage = ({ id }) => {
  const router = useRouter();
  const song = songs.find((el) => el.id === id);
  const { isMobile } = useIsMobile();

  if (!song) {
    return null;
  }

  const { imgSrc, title, author } = song;

  console.log(song);

  return (
    <div>
      <Header />
      {isMobile && (
        <>
          <Spacer height={70} />
          <BlockWrapper>
            <Link href="/songs">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50"
                  css={{ transform: "rotate(180deg)" }}
                >
                  <path
                    fill="black"
                    d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
                  />
                </svg>
              </a>
            </Link>
          </BlockWrapper>
          <Banner imgSrc={imgSrc} />
          <Song title={title} isExpanded={true} id={id} />
        </>
      )}
      {!isMobile && (
        <>
          <section css={{ backgroundColor: "#fff", paddingBottom: 100 }}>
            <Spacer height={100} />
            <BlockWrapper css={{ paddingTop: 50 }}>
              <Link href="/songs">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="100"
                    css={{
                      transform: "rotate(180deg)",
                      position: "relative",
                      left: -20,
                    }}
                  >
                    <path
                      fill="black"
                      d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
                    />
                  </svg>
                </a>
              </Link>

              <h1
                css={{
                  fontSize: 50,
                  color: "#000",
                  fontWeight: "bold",
                  margin: "20px 0 20px 0",
                }}
              >
                {title}
              </h1>
            </BlockWrapper>
            <div
              css={{
                maxWidth: 1160,
                margin: "0 auto 140px",
                height: 500,
                backgroundImage: `url(https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)`,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
                backgroundPosition: "center",
              }}
            >
              <div
                css={{
                  backgroundColor: "#000",
                  height: 200,
                  width: "100%",
                  padding: 40,
                  position: "relative",
                  a: {
                    fontSize: 24,
                    marginRight: 50,
                    fontWeight: "lighter",
                  },
                }}
              >
                <p css={{ fontWeight: "lighter", marginBottom: 20 }}>
                  Teskt i muzyka: Tymoteusz Stokatski
                </p>
                <a href="">Spotify</a>
                <a href="">YouTube</a>
                <a
                  href=""
                  download
                  css={{
                    position: "absolute",
                    cursor: "pointer",
                    right: 0,
                    bottom: 0,
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
                      left: -15,
                      top: 10,
                    }}
                  >
                    pobierz
                  </span>
                </a>
              </div>
            </div>
            <BlockWrapper>
              <DesktopSong
                title="Sinking deep"
                imgSrc="https://images.unsplash.com/photo-1588547347393-7c40217437b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                url="songs/sinking-deep"
              />
              <DesktopSong
                title="Only wanna sing"
                subtitle="Tylko śpiewać chcę"
                imgSrc="https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                url="songs/laski-cud"
              />
            </BlockWrapper>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

SongPage.getInitialProps = async ({ query }) => {
  const { id } = query;

  return {
    id,
  };
};

export default SongPage;
