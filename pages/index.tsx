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
      <ExpanderSection
        title="Nasz dom"
        imgSrc="/images/IMG_4112.png"
        css={{ marginBottom: 10 }}
      >
        <p css={{ marginBottom: 90 }}>
          XY Uwielbienie to muzyka i treści płynące z serca ludzi z kościoła
          Społeczność Chrześcijańska Południe w Warszawie. To kościół, który w
          oparciu o naukę Biblii i z mocą Ducha Świętego wspiera ludzi
          w nawiązywaniu osobistej relacji z Bogiem. Bogiem, który w swojej
          miłości i mocy ma dla każdego cudowny plan.
        </p>
        <p>
          Gdzie:
          <br />
          Mińska 65, Warszawa
          <br />
          Kiedy:
          <br /> każda niedziela 10:00 i 12:00
        </p>
        <img
          src="/images/logo-colour.png"
          css={{ width: 100, height: 100, margin: "50px auto 0 auto" }}
        />
        <p
          css={{
            fontWeight: "lighter",
            textAlign: "center",
            fontSize: 14,
            margin: "50px 0"
          }}
        >
          Społeczność Chrześcijańska Południe ul. Mińska 65, 03-828 Warszawa
        </p>
        <a
          css={{
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            marginBottom: 30
          }}
          href="https://www.schpoludnie.pl"
        >
          www.schpoludnie.pl
        </a>
        <a href="">
          <img
            css={{ width: 32, height: 32, marginLeft: "auto" }}
            src="./images/facebook.png"
          />
        </a>
      </ExpanderSection>
      <ExpanderSection
        title="Gdzie nas znajdziesz?"
        imgSrc="/images/IMG_3.png"
        css={{ marginBottom: 10 }}
      >
        <p css={{ paddingBottom: 30 }}>
          W każdą pierwszą środę miesiąca, podczas Wieczorów Uwielbienia,
          wywyższamy Boga wspólnie z naszym kościołem SCh Południe. To prawdziwy
          czas odpoczynku w Bożej Obecności. Dołącz do nas!
        </p>
        <p css={{ paddingBottom: 50 }}>
          Zapraszamy też na nasz kanał na YT. Pracujemy nad tym, by nagrań było
          coraz więcej!
        </p>
      </ExpanderSection>
      <ExpanderSection
        title="Jak możesz nas wesprzeć?"
        imgSrc="/images/IMG_3.png"
        css={{ marginBottom: 20 }}
      >
        <p css={{ marginBottom: 30 }}>
          Przede wszystkim potrzebujemy Twojej modlitwy. To najcenniejsze, co
          możesz nam dać, byśmy mogli się rozwijać i realizować marzenia, jakie
          Bóg wkłada w nasze serca.
        </p>
        <p css={{ marginBottom: 30 }}>
          Niemniej realizacja wysokiej jakości nagrań wymaga inwestycji dużej
          ilości pieniędzy. Jeśli chcesz, możesz wesprzeć finansowo XY
          Uwielbienie!
        </p>
        <p css={{ paddingBottom: 50 }}>
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
      </ExpanderSection>
      <Footer />
    </>
  );
};

export default Index;
