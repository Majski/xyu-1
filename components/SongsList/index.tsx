import React from "react";
import { ImageButton } from "../ImageButton";

interface SongsListProps {
  songs: Array<{
    title: string;
    subtitle: string;
    author: string;
    imgSrc: string;
  }>;
}

export const SongsList: React.FC<SongsListProps> = ({ songs, ...rest }) => (
  <div {...rest}>
    {songs.map((song) => (
      <ImageButton imgSrc={song.imgSrc} css={{ marginTop: 5 }}>
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
