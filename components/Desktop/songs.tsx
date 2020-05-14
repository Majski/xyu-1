import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import Link from "next/link";

export const Songs = () => {
  return (
    <div>
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
      <div css={{ backgroundColor: "#fff" }}>
        <BlockWrapper>
          <div
            css={{
              height: "60vh",
              backgroundColor: "#000",
              position: "relative",
              top: -300,
              margin: "0 auto",
              display: "flex",
              padding: 50,
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
              <Link href="">
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
        </BlockWrapper>
      </div>

      <div css={{ height: "100vh", backgroundColor: "#fff" }} />
    </div>
  );
};
