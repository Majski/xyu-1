import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import Link from "next/link";
import { Song } from "./components/Song";
import { CoverPhoto } from "../new/CoverPhoto";
import { Billboard } from "../new/Billboard";
import { LinksGroup } from "../new/LinksGroup";

import {
  linksGroupData,
  collageData,
  simpleBoxData,
  photoData1,
  photoData2,
  photoData3,
  photoBox,
} from "../../data/new/index";
import { Collage } from "../new/Collage";
import { Spacer } from "../Spacer";
import { SimpleBox } from "../new/SimpleBox";
import { Photo } from "../new/Photo";
import { PhotoBox } from "../new/PhotoBox";

export const Desktop = () => {
  return (
    <div>
      <CoverPhoto
        title="XY UWIELBIENIE"
        imgSrc="https://images.unsplash.com/photo-1515276427842-f85802d514a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3155&q=80"
      />
      <Billboard
        imgSrc="https://images.unsplash.com/photo-1586285470103-37c89aa63de2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
        title="Kim jesteśmy?"
        description="XYU to grupa przyjaciół ze Społeczności Chrześcijańskiej Południe w Warszawie. Kochamy Boga i chcemy poznawać Go głębiej. Naszym marzeniem jest, by uwielbienie płynące z kościoła było jak ożywcza rzeka, która zmienia rzeczywistość i przynosi owoce w postaci uwolnienia, uzdrowienia i zbawienia. Chcemy, by to, co robimy, oddawało Bogu chwałę, a Duch Święty realnie objawiał się w swojej mocy. Nie chcemy jedynie tworzyć kolejnego projektu muzycznego – pragniemy głębi, z której wypływać będą nowe dźwięki i teksty. W 2018 roku założyliśmy kanał na YT, na którym umieszczamy zarówno autorskie utwory, jak i covery. Stawiamy na wysoką jakość pod względem muzycznym, wizualnym i produkcyjnym."
      />
      <LinksGroup {...linksGroupData.data} />
      <Spacer bgColor="#fff" height={50} />
      <Collage {...collageData.data} />
      <SimpleBox {...simpleBoxData.data} />
      <Photo {...photoData1.data} />
      <section css={{ height: 800 }}></section>
      <Photo {...photoData2.data} />
      <PhotoBox {...photoBox.data} />
      <Photo {...photoData3.data} />

      <div css={{ backgroundColor: "#fff", padding: "120px 0 50px 0" }}>
        <div css={{ backgroundColor: "white" }}>
          <BlockWrapper
            css={{
              height: "calc(100vh - 100px)",
              position: "relative",
              padding: "100px 0",
              display: "flex",
              alignItems: "center",
              maxWidth: 1200,
            }}
          >
            <div
              css={{
                height: "70vh",
                width: "100%",
                margin: "0 40px",
                position: "relative",
              }}
            >
              <div
                css={{
                  position: "relative",
                  height: "90%",
                  width: "75%",
                  padding: "50px 0 50px 50px",
                  backgroundColor: "#000",
                }}
              >
                <h2 css={{ fontSize: 50, marginBottom: 50 }}>
                  Jak możesz nas wesprzeć?
                </h2>
                <div
                  css={{
                    marginRight: 40,
                    p: {
                      lineHeight: 1.5,
                      fontWeight: "lighter",
                      marginBottom: 30,
                      fontSize: 21,
                    },
                  }}
                >
                  <p>
                    Przede wszystkim potrzebujemy Twojej modlitwy. To
                    najcenniejsze, co możesz nam dać, byśmy mogli się rozwijać i
                    realizować marzenia, jakie Bóg wkłada w nasze serca.
                  </p>
                  <p>
                    Niemniej realizacja wysokiej jakości nagrań wymaga
                    inwestycji dużej ilości pieniędzy. Jeśli chcesz, możesz
                    wesprzeć finansowo XY Uwielbienie!
                  </p>
                  <p css={{ width: "50%" }}>
                    Społeczność Chrześcijańska Południe
                    <br />
                    ul. Mińska 65
                    <br />
                    03-828 Warszawa 69
                    <br />
                    1140 2017 0000 4402 1290 4093
                    <br />
                    Tytuł przelewu: XY Uwielbienie
                  </p>
                </div>
              </div>
              <div
                css={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  boxShadow: "20px 20px 0px #000",
                  width: 600,
                  height: 400,
                  backgroundImage:
                    "url(https://images.unsplash.com/flagged/photo-1552997030-b4ba6de91b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </BlockWrapper>
        </div>
      </div>
    </div>
  );
};
