import React from "react";

export interface CollageProps {
  images: Array<{
    imgSrc: string;
    alt?: string;
  }>;
}

export const Collage: React.FC<CollageProps> = ({ images }) => {
  return (
    <section
      css={{
        height: 500,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          title={image.alt || undefined}
          css={{
            backgroundImage: `url(${image.imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexBasis: "25%",
          }}
        />
      ))}
    </section>
  );
};
