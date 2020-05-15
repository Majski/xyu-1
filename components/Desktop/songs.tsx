import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import Link from "next/link";
import { Song } from "./components/Song";

export const Songs = () => {
  return (
    <div>
      <section
        css={{
          height: "calc(100vh - 100px)",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <div
          css={{
            height: "50vh",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div>
          <div
            css={{
              height: "60vh",
              maxWidth: 1160,
              width: "100%",
              left: "50%",
              right: "50%",
              backgroundColor: "#000",
              position: "absolute",
              display: "flex",
              padding: 50,
              margin: "0 auto",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              css={{
                flexBasis: "55%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                top: -90,
                height: "calc(100% + 90px)",
                flexShrink: 0,
              }}
            >
              <h2 css={{ fontSize: 50, fontWeight: "bold", marginBottom: 20 }}>
                nowość
              </h2>
              <div
                css={{
                  flexGrow: 1,
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521038063972-ab961f8515b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  backgroundPosition: "center",
                  boxShadow: "20px 20px 0px #fff",
                }}
              />
            </div>
            <div
              css={{
                marginLeft: 50,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <p css={{ fontSize: 70, fontWeight: "lighter" }}>Łaski cud</p>
              <Link href="/songs/laski-cud">
                <a
                  css={{
                    alignSelf: "flex-end",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="100"
                  >
                    <path
                      fill="white"
                      d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
                    />
                  </svg>
                  <span
                    css={{
                      fontSize: 20,
                      position: "absolute",
                      left: -50,
                      top: 10,
                    }}
                  >
                    posłuchaj
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section css={{ backgroundColor: "#fff", paddingBottom: 50 }}>
        <BlockWrapper>
          <h1 css={{ color: "#000", fontSize: 60, marginBottom: 50 }}>
            Cała dyskografia
          </h1>
          <Song
            title="Czekam na Ciebie"
            imgSrc="https://images.unsplash.com/photo-1555819206-7b30da4f1506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
            url="songs/czekam-na-ciebie"
          />
          <Song
            title="Grace to grace"
            subtitle="Łaski cud"
            imgSrc="https://images.unsplash.com/photo-1508366717390-1b54517b6cce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            url="songs/laski-cud"
          />
          <Song
            title="Nie patrzę wstecz"
            imgSrc="https://images.unsplash.com/photo-1589265421704-0fdac9917785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            url="songs/nie-patrze-wstecz"
          />
          <Song
            title="Sinking deep"
            imgSrc="https://images.unsplash.com/photo-1588547347393-7c40217437b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            url="songs/sinking-deep"
          />
          <Song
            title="Only wanna sing"
            subtitle="Tylko śpiewać chcę"
            imgSrc="https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            url="songs/laski-cud"
          />
        </BlockWrapper>
      </section>
    </div>
  );
};
