import React from "react";

import { BlockWrapper } from "../ui/BlockWrapper";
import { Shelf } from "../ui/Shelf";
import { useAppContext } from "../../contexts/AppContext";
import { Footer } from "../Footer";

export interface ShelfSectionProps {
  title: string;
  content: string;
}

export const ShelfSection: React.FC<ShelfSectionProps> = ({
  title,
  content,
  ...rest
}) => {
  const { isShelfVisible, dispatch } = useAppContext();

  const onOpenShelf = React.useCallback(() => {
    dispatch({ type: "shelfVisible", payload: !isShelfVisible });
  }, [dispatch, isShelfVisible]);

  const onCloseShelf = React.useCallback(() => {
    dispatch({ type: "shelfVisible", payload: false });
  }, [dispatch, isShelfVisible]);

  return (
    <section css={{ backgroundColor: "#000" }} {...rest}>
      <BlockWrapper
        role="button"
        onClick={onOpenShelf}
        css={{
          cursor: "pointer",
          height: 70,
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.002 512.002"
          height="25px"
        >
          <path
            fill="#fff"
            d="M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074 0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z"
          />
        </svg>
        <h2 css={{ marginLeft: 35 }}>{title}</h2>
      </BlockWrapper>
      <Shelf
        isVisible={isShelfVisible}
        css={{ marginTop: 50, padding: "20px 0 100px 0" }}
      >
        <BlockWrapper>
          <button
            css={{ display: "flex", marginBottom: 40 }}
            onClick={onCloseShelf}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.002 512.002"
              height="25px"
              css={{ transform: "rotate(180deg)", marginRight: 50 }}
            >
              <path
                fill="#fff"
                d="M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074 0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z"
              />
            </svg>
            <span>{title}</span>
          </button>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Footer />
        </BlockWrapper>
      </Shelf>
    </section>
  );
};
