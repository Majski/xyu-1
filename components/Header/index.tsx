import React from "react";

import { BlockWrapper } from "../ui/BlockWrapper";
import { Shelf } from "../ui/Shelf";
import { HamburgerButton } from "./HamburgerButton";
import { useAppContext } from "../../contexts/AppContext";

export const Header = () => {
  const { isMenuVisible, isShelfVisible, dispatch } = useAppContext();

  const onHamburgerClick = React.useCallback(() => {
    dispatch({ type: "menuVisible", payload: !isMenuVisible });
    dispatch({ type: "shelfVisible", payload: false });
  }, [dispatch, isMenuVisible]);

  return (
    <header
      css={{
        height: 52,
        backgroundColor: "#000",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0
      }}
    >
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
        <HamburgerButton onClick={onHamburgerClick} isActive={isMenuVisible} />
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
