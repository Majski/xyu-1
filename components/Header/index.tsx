import React from "react";
import Link from "next/link";

import { BlockWrapper } from "../ui/BlockWrapper";
import { Shelf } from "../ui/Shelf";
import { HamburgerButton } from "./HamburgerButton";
import { useAppContext } from "../../contexts/AppContext";
import { Footer } from "../Footer";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { theme } from "../../Theme";

export const Header = () => {
  const { isMenuVisible, isShelfVisible, dispatch } = useAppContext();
  const { width } = useWindowDimensions();

  const onHamburgerClick = React.useCallback(() => {
    dispatch({ type: "menuVisible", payload: !isMenuVisible });
    dispatch({ type: "shelfVisible", payload: false });
  }, [dispatch, isMenuVisible]);

  const { bp } = theme;

  return (
    <header
      css={{
        height: 52,
        backgroundColor: "#000",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        right: 0,
        [bp.FROM_TABLET]: {
          height: 100,
        },
      }}
    >
      <BlockWrapper
        wrapperCss={{
          height: "100%",
        }}
        css={{
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          [bp.FROM_TABLET]: {
            justifyContent: "space-between",
          },
        }}
      >
        <div
          css={{
            display: "none",
            a: { marginRight: 30, fontWeight: "lighter" },
            [bp.FROM_TABLET]: {
              display: "inline-block",
            },
          }}
        >
          <a href="">Spotify</a>
          <a href="">YouTube</a>
          <a href="">Facebook</a>
        </div>
        <Link href="/">
          <a
            href=""
            css={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              width: 50,
              height: 50,
              [bp.FROM_TABLET]: {
                width: 80,
                height: 80,
              },
            }}
          >
            <img src="/images/logo-white.png" css={{ width: "100%" }} />
          </a>
        </Link>
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
              fontWeight: "lighter",
              [bp.FROM_TABLET]: {
                marginBottom: 30,
              },
            },
            [bp.FROM_TABLET]: {
              paddingTop: 150,
              justifyContent: "flex-start",
            },
          }}
        >
          <a href="">Kim jesteśmy?</a>
          <a href="">Gdzie nas znajdziesz?</a>
          <a href="">Jak nas wesprzeć?</a>
          <a href="">Biblioteka</a>
          <a href="">Akordy</a>
          <a href="">Kontakt</a>
          <img
            src="/images/logo-colour.png"
            css={{
              display: "none",
              [bp.FROM_TABLET]: {
                display: "block",
                width: 50,
                height: 50,
                alignSelf: "flex-end",
                justifySelf: "flex-end",
                marginTop: "auto",
              },
            }}
          />
          <Footer css={{ [bp.FROM_TABLET]: { display: "none" } }} />
        </div>
      </Shelf>
    </header>
  );
};
