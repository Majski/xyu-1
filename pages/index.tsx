import React from "react";
import Link from "next/link";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner, BannerProps } from "../components/Banner";
import {
  ExpanderSection,
  ExpanderSectionProps,
} from "../components/ExpanderSection";
import { Discography } from "../components/Discography";
import { Shelf } from "../components/ui/Shelf";
import { useAppContext } from "../contexts/AppContext";
import { ShelfSection, ShelfSectionProps } from "../components/ShelfSection";

import { indexData } from "../data/index";

interface Component<Type> {
  type: string;
  data: Type;
}

const isType = <Type extends unknown>(
  element: Component<any>,
  type: string
): element is Component<Type> => {
  return element.type === type;
};

const Index = () => {
  const { isMenuVisible, dispatch } = useAppContext();

  const { components } = indexData;

  return (
    <>
      <Header />
      <div css={{ height: 50 }} />
      {components.map((component) => {
        if (isType<BannerProps>(component, "Banner")) {
          return <Banner {...component.data} />;
        }

        if (isType<ExpanderSectionProps>(component, "ExpanderSection")) {
          return <ExpanderSection {...component.data} />;
        }

        if (isType<null>(component, "Discography")) {
          return <Discography {...component.data} />;
        }

        if (isType<ShelfSectionProps>(component, "ShelfSection")) {
          return <ShelfSection {...component.data} />;
        }
      })}
      <Footer />
    </>
  );
};

export default Index;
