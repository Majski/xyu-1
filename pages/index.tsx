import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Contents } from "../components/Contents";

import { indexData } from "../data/index";
import { Desktop } from "../components/Desktop";
import { useIsMobile } from "../hooks/useIsMobile";

const Index = () => {
  const { components } = indexData;
  const { isMobile } = useIsMobile();

  return (
    <>
      <Header />
      <div css={{ height: isMobile ? 52 : 100 }} />
      {isMobile && <Contents components={components} />}
      {!isMobile && <Desktop />}
      <Footer />
    </>
  );
};

export default Index;
