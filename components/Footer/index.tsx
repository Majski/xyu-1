import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Social } from "./Social";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Footer = ({ ...rest }) => {
  const { isMobile } = useIsMobile();

  return (
    <footer css={{ backgroundColor: "#000", padding: "40px 0" }} {...rest}>
      {isMobile && (
        <BlockWrapper>
          <div>
            <img
              src="./images/logo-white.png"
              css={{ width: 130, margin: "0 auto 25px auto" }}
            />
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                a: {
                  fontSize: 20,
                  textDecoration: "none",
                  marginBottom: 15,
                  fontWeight: "lighter",
                },
              }}
            >
              <a href="">Kim jesteśmy?</a>
              <a href="">Gdzie nas znajdziesz?</a>
              <a href="">Jak nas wesprzeć?</a>
              <a href="">Biblioteka</a>
              <a href="">Akordy</a>
              <a href="">Kontakt</a>
            </div>
            <Social />
            <img
              src="/images/logo-colour.png"
              css={{ width: 100, height: 100, margin: "75px auto 0 auto" }}
            />
            <p
              css={{
                fontWeight: "lighter",
                textAlign: "center",
                fontSize: 14,
                marginTop: 25,
              }}
            >
              Społeczność Chrześcijańska Południe ul. Mińska 65, 03-828 Warszawa
            </p>
          </div>
        </BlockWrapper>
      )}
      {!isMobile && (
        <>
          <BlockWrapper
            css={{
              maxWidth: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/logo-white.png"
              css={{ width: 120, marginRight: 100 }}
            />
            <div
              css={{
                display: "flex",
                flexWrap: "wrap",
                a: {
                  flexBasis: "33.3%",
                  margin: "5px 0",
                  fontSize: 17,
                  fontWeight: "lighter",
                },
              }}
            >
              <a href="">Facebook</a>
              <a href="">Kim jesteśmy?</a>
              <a href="">Gdzie nas znajdziesz?</a>
              <a href="">Spotify</a>
              <a href="">Jak nas wesprzeć?</a>
              <a href="">Biblioteka</a>
              <a href="">YouTube</a>
              <a href="">Akordy</a>
              <a href="">Kontakt</a>
            </div>
          </BlockWrapper>
          <BlockWrapper
            css={{
              display: "flex",
              maxWidth: 600,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              marginBottom: 20,
            }}
          >
            <img
              src="/images/logo-colour.png"
              css={{ width: 70, height: 70, marginRight: 20 }}
            />
            <p
              css={{
                fontWeight: "lighter",
                textAlign: "center",
                marginTop: 25,
                margin: 0,
                fontSize: 18,
                lineHeight: 1.8,
              }}
            >
              Społeczność Chrześcijańska Południe
              <br />
              ul. Mińska 65, 03-828 Warszawa
            </p>
          </BlockWrapper>
        </>
      )}
    </footer>
  );
};
