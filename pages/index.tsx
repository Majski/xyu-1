import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { ExpanderSection } from "../components/ExpanderSection";
import { Discography } from "../components/Discography";
import { Shelf } from "../components/ui/Shelf";
import { useAppContext } from "../contexts/AppContext";
import { ShelfSection } from "../components/ShelfSection";

const Index = () => {
  const { isMenuVisible, dispatch } = useAppContext();

  return (
    <>
      <Header />
      <Banner
        title="XY UWIELBIENIE"
        imageSrc="/images/IMG_4112.png"
        wrapperCss={{ marginTop: 50 }}
      />
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
            margin: "50px 0",
          }}
        >
          Społeczność Chrześcijańska Południe ul. Mińska 65, 03-828 Warszawa
        </p>
        <a
          css={{
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            marginBottom: 30,
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
      <ShelfSection title="Jezus">
        <p>
          Jezus jest sensem i celem, dla którego się spotykamy i dla którego
          żyjemy. Jego życie, krzyż i  zmartwychwstanie są Bożą odpowiedzią na
          grzech i śmierć.
        </p>
        <p>
          Bóg bowiem tak bardzo ukochał świat, że dał swego Jedynego Syna, aby
          każdy, kto w Niego wierzy, nie zginął, ale miał życie wieczne. Bóg nie
          posłał swego Syna na świat, aby wydał On na świat wyrok, lecz aby
          świat został przez Niego zbawiony. Ewangelia Jana 3:16-17
        </p>
        <p>
          Każdy z nas zgrzeszył, a każdy grzech zasługuje na śmierć. Żadne
          uczynki ani działania nie są w stanie nikogo zbawić, ale Bóg okazał
          nam łaskę – swoją niezasłużoną przychylność. To ofiara Jezusa na
          krzyżu jest zapłatą za każdy grzech.
        </p>
        <p>
          Gdyż z łaski jesteście zbawieni, przez wiarę. Nie jest to waszym
          osiągnięciem, ale darem Boga. Nie stało się to dzięki uczynkom, aby
          się ktoś nie wynosił. List do Efezjan 2:8-9
        </p>
        <p>Dobra wiadomość jest taka:</p>
        <p>
          Bo jeśli ustami wyznasz, że Panem jest Jezus, i uwierzysz w swym
          sercu, że Bóg wzbudził Go z martwych, będziesz zbawiony. List do
          Rzymian 10:9
        </p>
        <p>
          Jedyne co musisz zrobić, to zaufać Mu i uwierzyć, że zrobił to
          specjalnie dla Ciebie. Wtedy nie tylko odpuści Ci wszystkie winy, ale
          da Ci pokój, radość, uwolnienie, a przede wszystkim doświadczysz
          pełnej miłości i zostaniesz uratowany od piekła.
        </p>
        <p>
          Ja przyszedłem, aby owce miały życie i to życie w całej pełni.
          Ewangelia Jana 10:10
        </p>
        <p>
          Jednak Jezus nie tylko chce Cię zbawić – On Cię kocha i chce spędzić z
          Tobą życie. Ma dobre myśli o Tobie i dobre plany dla Ciebie. Jest
          dobrym Bogiem i wszystko, co ma dla Ciebie, jest dobre.
        </p>
        <p>Pamiętaj! Bóg jest dobry, a Jego łaska trwa na wieki!</p>
      </ShelfSection>
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
