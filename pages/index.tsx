import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { ExpanderSection } from "../components/ExpanderSection";
import { Discography } from "../components/Discography";

const Index = () => {
  return (
    <>
      <Header />
      <Banner />
      <ExpanderSection title="Kim jesteśmy?" imgSrc="/images/IMG_4112.png">
        <p css={{ paddingBottom: 50 }}>
          XYU to grupa przyjaciół ze Społeczności Chrześcijańskiej Południe w
          Warszawie. Kochamy Boga i chcemy poznawać Go głębiej. Naszym marzeniem
          jest, by uwielbienie płynące z kościoła było jak ożywcza rzeka, która
          zmienia rzeczywistość i przynosi owoce w postaci uwolnienia,
          uzdrowienia i zbawienia. Chcemy, by to, co robimy, oddawało Bogu
          chwałę, a Duch Święty realnie objawiał się w swojej mocy. Nie chcemy
          jedynie tworzyć kolejnego projektu muzycznego – pragniemy głębi, z
          której wypływać będą nowe dźwięki i teksty. W 2018 roku założyliśmy
          kanał na YT, na którym umieszczamy zarówno autorskie utwory, jak i
          covery. Stawiamy na wysoką jakość pod względem muzycznym, wizualnym i
          produkcyjnym.
        </p>
      </ExpanderSection>
      <Discography />
      <Footer />
    </>
  );
};

export default Index;
