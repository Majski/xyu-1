import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer css={{ backgroundColor: "#000", marginTop: 300 }}>
      <BlockWrapper>
        <div>
          <div>logo</div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <a href="">Kim jesteśmy?</a>
            <a href="">Gdzie nas znajdziesz?</a>
            <a href="">Jak nas wesprzeć?</a>
            <a href="">Biblioteka</a>
            <a href="">Akordy</a>
            <a href="">Kontakt</a>
          </div>
          <Social />
        </div>
      </BlockWrapper>
    </footer>
  );
};
