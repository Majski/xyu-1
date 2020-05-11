import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { songs } from "../../../data/songs";
import { Header } from "../../../components/Header";
import { Spacer } from "../../../components/Spacer";
import { BlockWrapper } from "../../../components/ui/BlockWrapper";
import { Banner } from "../../../components/Banner";
import { Song } from "../../../components/Song";

const SongPage = ({ id }) => {
  const router = useRouter();
  const song = songs.find((el) => el.id === id);

  if (!song) {
    return null;
  }

  const { imgSrc, title } = song;

  return (
    <div>
      <Header />
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
