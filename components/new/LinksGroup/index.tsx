import React from "react";
import Link from "next/link";

import { BlockWrapper } from "../../ui/BlockWrapper";
import { ImageLink, ImageLinkProps } from "../ImageLink";

export interface LinksGroupProps {
  title: string;
  links: Array<ImageLinkProps>;
  link: {
    href: string;
    label: string;
  };
}

export const LinksGroup: React.FC<LinksGroupProps> = ({
  title,
  links,
  link,
}) => {
  return (
    <section
      css={{ backgroundColor: "#fff", paddingTop: 120, paddingBottom: 50 }}
    >
      <BlockWrapper>
        <div css={{ maxWidth: 1100, marginRight: "auto" }}>
          <h2
            css={{
              fontSize: 50,
              color: "#000",
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            {title}
          </h2>
          {links.map((link) => (
            <ImageLink
              title={link.title}
              subtitle={link.subtitle}
              imgSrc={link.imgSrc}
              url={link.url}
            />
          ))}
          <Link href={link.href}>
            <a
              css={{
                position: "relative",
                cursor: "pointer",
                display: "block",
                marginLeft: "auto",
                width: 200,
                marginTop: 80,
                textAlign: "right",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="100"
              >
                <path
                  fill="black"
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
                  left: -10,
                  top: 10,
                  color: "#000",
                }}
              >
                {link.label}
              </span>
            </a>
          </Link>
        </div>
      </BlockWrapper>
    </section>
  );
};
