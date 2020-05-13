import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Contents } from "../components/Contents";

import { indexData } from "../data/index";
import { theme } from "../Theme";

const Index = () => {
  const { components } = indexData;

  const { bp } = theme;

  return (
    <>
      <Header />
      <div css={{ height: 50, [bp.FROM_TABLET]: { height: 100 } }} />
      <Contents components={components} />
      <Footer />
    </>
  );
};

export default Index;
