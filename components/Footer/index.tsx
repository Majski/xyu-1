import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer css={{ backgroundColor: "#000", padding: "40px 0" }}>
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
              marginTop: 25
            }}
          >
            Społeczność Chrześcijańska Południe ul. Mińska 65, 03-828 Warszawa
          </p>
        </div>
      </BlockWrapper>
    </footer>
  );
};
