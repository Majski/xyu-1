import React from "react";

import { BlockWrapper } from "../ui/BlockWrapper";
import { Shelf } from "../ui/Shelf";
import { HamburgerButton } from "./HamburgerButton";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  return (
    <header css={{ height: 52, backgroundColor: "#000" }}>
      <BlockWrapper
        css={{
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        {/* <div>
          <a href="">Spotify</a>
          <a href="">YouTube</a>
          <a href="">Facebook</a>
        </div> */}
        <a
          href=""
          css={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            width: 50,
            height: 50
          }}
        >
          <img src="/images/logo-white.png" css={{ width: "100%" }} />
        </a>
        <HamburgerButton
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          isActive={isMenuVisible}
        />
      </BlockWrapper>
      <Shelf isVisible={isMenuVisible}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            padding: "50px 35px",
            minHeight: "100%",
            justifyContent: "center",
            a: {
              fontSize: 20,
              textDecoration: "none",
              marginBottom: 15,
              fontWeight: "lighter"
            }
          }}
        >
          <a href="">Kim jesteśmy?</a>
          <a href="">Gdzie nas znajdziesz?</a>
          <a href="">Jak nas wesprzeć?</a>
          <a href="">Biblioteka</a>
          <a href="">Akordy</a>
          <a href="">Kontakt</a>
        </div>
      </Shelf>
    </header>
  );
};
