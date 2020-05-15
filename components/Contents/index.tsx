import React from "react";
import { Banner, BannerProps } from "../Banner";
import { ExpanderSection, ExpanderSectionProps } from "../ExpanderSection";
import { Discography } from "../Discography";
import { ShelfSection, ShelfSectionProps } from "../ShelfSection";
import { Song, SongProps } from "../Song";
import { SongsList, SongsListProps } from "../SongsList";
import { Spacer, SpacerProps } from "../Spacer";

//NEW
import { CoverPhoto, CoverPhotoProps } from "../new/CoverPhoto";
import { Billboard, BillboardProps } from "../new/Billboard";
import { LinksGroup, LinksGroupProps } from "../new/LinksGroup";
import { Collage, CollageProps } from "../new/Collage";

interface Component<Type> {
  type: string;
  data: Type;
}

const isType = <Type extends unknown>(
  element: Component<any>,
  type: string
): element is Component<Type> => {
  return element.type === type;
};

// @ts-ignore
export const Contents: React.FC<{ components: any }> = ({ components }) => {
  return components.map((component) => {
    if (isType<BannerProps>(component, "Banner")) {
      return <Banner {...component.data} />;
    }

    if (isType<ExpanderSectionProps>(component, "ExpanderSection")) {
      return <ExpanderSection {...component.data} />;
    }

    if (isType<null>(component, "Discography")) {
      return <Discography {...component.data} />;
    }

    if (isType<ShelfSectionProps>(component, "ShelfSection")) {
      return <ShelfSection {...component.data} />;
    }

    if (isType<SongProps>(component, "Song")) {
      return <Song {...component.data} />;
    }

    if (isType<SongsListProps>(component, "SongsList")) {
      return <SongsList {...component.data} />;
    }

    if (isType<SpacerProps>(component, "Spacer")) {
      return <Spacer {...component.data} />;
    }

    // NEW

    if (isType<CoverPhotoProps>(component, "CoverPhoto")) {
      return <CoverPhoto {...component.data} />;
    }

    if (isType<BillboardProps>(component, "Billboard")) {
      return <Billboard {...component.data} />;
    }

    if (isType<LinksGroupProps>(component, "LinksGroup")) {
      return <LinksGroup {...component.data} />;
    }

    if (isType<CollageProps>(component, "Collage")) {
      return <Collage {...component.data} />;
    }
  });
};
