import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Contents } from "../components/Contents";

import { indexData } from "../data/index";

const Index = () => {
  const { components } = indexData;

  return (
    <>
      <Header />
      <div css={{ height: 50 }} />
      <Contents components={components} />
      <Footer />
    </>
  );
};

export default Index;
