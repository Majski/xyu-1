import React from "react";
import { ImageButton } from "../ImageButton";

export interface SongsListProps {
  songs: Array<{
    id: string;
    title: string;
    subtitle: string;
    author: string;
    imgSrc: string;
  }>;
}

export const SongsList: React.FC<SongsListProps> = ({ songs, ...rest }) => (
  <div {...rest}>
    {songs.map((song) => (
      <ImageButton
        imgSrc={song.imgSrc}
        css={{ marginTop: 5 }}
        href={`songs/${song.id}`}
      >
        {song.title}
        {song.subtitle && (
          <span css={{ fontSize: 14, display: "block", lineHeight: 1 }}>
            {song.subtitle}
          </span>
        )}
      </ImageButton>
    ))}
  </div>
);
