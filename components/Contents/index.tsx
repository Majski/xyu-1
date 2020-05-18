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
import { SimpleBox, SimpleBoxProps } from "../new/SimpleBox";
import { Photo, PhotoProps } from "../new/Photo";
import { PhotoBox, PhotoBoxProps } from "../new/PhotoBox";

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
  return components.map((component, index) => {
    if (isType<BannerProps>(component, "Banner")) {
      return <Banner key={index} {...component.data} />;
    }

    if (isType<ExpanderSectionProps>(component, "ExpanderSection")) {
      return <ExpanderSection {...component.data} />;
    }

    if (isType<null>(component, "Discography")) {
      return <Discography key={index} {...component.data} />;
    }

    if (isType<ShelfSectionProps>(component, "ShelfSection")) {
      return <ShelfSection key={index} {...component.data} />;
    }

    if (isType<SongProps>(component, "Song")) {
      return <Song key={index} {...component.data} />;
    }

    if (isType<SongsListProps>(component, "SongsList")) {
      return <SongsList key={index} {...component.data} />;
    }

    if (isType<SpacerProps>(component, "Spacer")) {
      return <Spacer key={index} {...component.data} />;
    }

    // NEW

    if (isType<CoverPhotoProps>(component, "CoverPhoto")) {
      return <CoverPhoto key={index} {...component.data} />;
    }

    if (isType<BillboardProps>(component, "Billboard")) {
      return <Billboard key={index} {...component.data} />;
    }

    if (isType<LinksGroupProps>(component, "LinksGroup")) {
      return <LinksGroup key={index} {...component.data} />;
    }

    if (isType<CollageProps>(component, "Collage")) {
      return <Collage key={index} {...component.data} />;
    }

    if (isType<SimpleBoxProps>(component, "SimpleBox")) {
      return <SimpleBox key={index} {...component.data} />;
    }

    if (isType<PhotoProps>(component, "Photo")) {
      return <Photo key={index} {...component.data} />;
    }

    if (isType<PhotoBoxProps>(component, "PhotoBox")) {
      return <PhotoBox key={index} {...component.data} />;
    }
  });
};
