export const simpleBoxData = {
  type: "SimpleBox",
  data: {
    title: "Nasz dom",
    description:
      "XY Uwielbienie to muzyka i treści płynące z serca ludzi z kościoła Społeczność Chrześcijańska Południe w Warszawie. To kościół, który w oparciu o naukę Biblii i z mocą Ducha Świętego wspiera ludzi w nawiązywaniu osobistej relacji z Bogiem. Bogiem, który w swojej miłości i mocy ma dla każdego cudowny plan.",
    subtitle:
      "Gdzie: Mińska 65, Warszawa<br/>Kiedy: każda niedziela 10: 00 i 12: 00<br/>Odwiedź nas na FB/ schpoludnie<br/>www.schpoludnie.pl",
    imgSrc: "/images/logo-colour.png",
  },
};

export const collageData = {
  type: "Collage",
  data: {
    images: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1588907395850-0bbefa3b1c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1587579340183-76829fe88b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1485559131919-ba21c3a6a5ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1583107100518-1eaaf02ce686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1569564358015-a11afb002245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1509220676330-01891402eb14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1534387030996-d0af567021d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1575270222557-2f4fa8db36a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80",
        alt: "",
      },
    ],
  },
};

export const linksGroupData = {
  type: "LinksGroup",
  data: {
    title: "Nasza twórczość",
    links: [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1555819206-7b30da4f1506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80",
        title: "Czekam na Ciebie",
        subtitle: "",
        url: "songs/czekam-na-ciebie",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1508366717390-1b54517b6cce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        title: "Grace to grace",
        subtitle: "Łaski cud",
        url: "songs/laski-cud",
      },
    ],
    link: {
      href: "/songs",
      label: "cała dyskografia",
    },
  },
};

export const indexData = {
  id: "",
  pageTitle: "",
  components: [
    {
      type: "CoverPhoto",
      data: {
        title: "XY UWIELBIENIE",
        imgSrc:
          "https://images.unsplash.com/photo-1515276427842-f85802d514a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3155&q=80",
      },
    },
    {
      type: "Billboard",
      data: {
        title: "Kim jesteśmy?",
        description:
          "XYU to grupa przyjaciół ze Społeczności Chrześcijańskiej Południe w Warszawie. Kochamy Boga i chcemy poznawać Go głębiej. Naszym marzeniem jest, by uwielbienie płynące z kościoła było jak ożywcza rzeka, która zmienia rzeczywistość i przynosi owoce w postaci uwolnienia, uzdrowienia i zbawienia. Chcemy, by to, co robimy, oddawało Bogu chwałę, a Duch Święty realnie objawiał się w swojej mocy. Nie chcemy jedynie tworzyć kolejnego projektu muzycznego – pragniemy głębi, z której wypływać będą nowe dźwięki i teksty. W 2018 roku założyliśmy kanał na YT, na którym umieszczamy zarówno autorskie utwory, jak i covery. Stawiamy na wysoką jakość pod względem muzycznym, wizualnym i produkcyjnym.",
        imgSrc:
          "https://images.unsplash.com/photo-1586285470103-37c89aa63de2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
      },
    },
    linksGroupData,
    collageData,
    simpleBoxData,
  ],
};

// export const indexData = {
//     id: "",
//     pageTitle: "",
//     components: [
//         {
//             type: "Banner",
//             data: {
//                 title: "XY UWIELBIENIE",
//                 imgSrc: "/images/IMG_4112.png",
//             },
//         },
//         {
//             type: "ExpanderSection",
//             data: {
//                 title: "Kim jesteśmy?",
//                 imgSrc: "/images/IMG_4112.png",
//                 content: `<p>
//           XYU to grupa przyjaciół ze Społeczności Chrześcijańskiej Południe w
//           Warszawie. Kochamy Boga i chcemy poznawać Go głębiej. Naszym marzeniem
//           jest, by uwielbienie płynące z kościoła było jak ożywcza rzeka, która
//           zmienia rzeczywistość i przynosi owoce w postaci uwolnienia,
//           uzdrowienia i zbawienia. Chcemy, by to, co robimy, oddawało Bogu
//           chwałę, a Duch Święty realnie objawiał się w swojej mocy. Nie chcemy
//           jedynie tworzyć kolejnego projektu muzycznego – pragniemy głębi, z
//           której wypływać będą nowe dźwięki i teksty. W 2018 roku założyliśmy
//           kanał na YT, na którym umieszczamy zarówno autorskie utwory, jak i
//           covery. Stawiamy na wysoką jakość pod względem muzycznym, wizualnym i
//           produkcyjnym.
//         </p>`,
//             },
//         },
//         {
//             type: "Discography",
//             data: null,
//         },
//         {
//             type: "ExpanderSection",
//             data: {
//                 title: "Nasz dom",
//                 imgSrc: "/images/IMG_4112.png",
//                 content: `
//         <p>
//           XY Uwielbienie to muzyka i treści płynące z serca ludzi z kościoła
//           Społeczność Chrześcijańska Południe w Warszawie. To kościół, który w
//           oparciu o naukę Biblii i z mocą Ducha Świętego wspiera ludzi
//           w nawiązywaniu osobistej relacji z Bogiem. Bogiem, który w swojej
//           miłości i mocy ma dla każdego cudowny plan.
//         </p>
//         <p>
//           Gdzie:
//           <br />
//           Mińska 65, Warszawa
//           <br />
//           Kiedy:
//           <br /> każda niedziela 10:00 i 12:00
//         </p>
//         <img
//           src="/images/logo-colour.png"
//           style="width: 100px; height: 100px; margin: 50px auto 0 auto;"
//         />
//         <p
//         style="font-weight: lighter; text-align: center; font-size: 14px; margin: 50px 0;"
//         >
//           Społeczność Chrześcijańska Południe ul. Mińska 65, 03-828 Warszawa
//         </p>
//         <a style="display: block; text-align: center; margin-bottom: 30px;"
//           href="https://www.schpoludnie.pl"
//         >
//           www.schpoludnie.pl
//         </a>
//         <a href="">
//           <img
//             style="width: 32px; height: 32px; margin-left: auto;"
//             src="./images/facebook.png"
//           />
//         </a>
//         `,
//             },
//         },
//         {
//             type: "Spacer",
//             data: {
//                 height: 10,
//             },
//         },
//         {
//             type: "ShelfSection",
//             data: {
//                 title: "Jezus",
//                 content: `
//          <p>
//           Jezus jest sensem i celem, dla którego się spotykamy i dla którego
//           żyjemy. Jego życie, krzyż i  zmartwychwstanie są Bożą odpowiedzią na
//           grzech i śmierć.
//         </p>
//         <p>
//           Bóg bowiem tak bardzo ukochał świat, że dał swego Jedynego Syna, aby
//           każdy, kto w Niego wierzy, nie zginął, ale miał życie wieczne. Bóg nie
//           posłał swego Syna na świat, aby wydał On na świat wyrok, lecz aby
//           świat został przez Niego zbawiony. Ewangelia Jana 3:16-17
//         </p>
//         <p>
//           Każdy z nas zgrzeszył, a każdy grzech zasługuje na śmierć. Żadne
//           uczynki ani działania nie są w stanie nikogo zbawić, ale Bóg okazał
//           nam łaskę – swoją niezasłużoną przychylność. To ofiara Jezusa na
//           krzyżu jest zapłatą za każdy grzech.
//         </p>
//         <p>
//           Gdyż z łaski jesteście zbawieni, przez wiarę. Nie jest to waszym
//           osiągnięciem, ale darem Boga. Nie stało się to dzięki uczynkom, aby
//           się ktoś nie wynosił. List do Efezjan 2:8-9
//         </p>
//         <p>Dobra wiadomość jest taka:</p>
//         <p>
//           Bo jeśli ustami wyznasz, że Panem jest Jezus, i uwierzysz w swym
//           sercu, że Bóg wzbudził Go z martwych, będziesz zbawiony. List do
//           Rzymian 10:9
//         </p>
//         <p>
//           Jedyne co musisz zrobić, to zaufać Mu i uwierzyć, że zrobił to
//           specjalnie dla Ciebie. Wtedy nie tylko odpuści Ci wszystkie winy, ale
//           da Ci pokój, radość, uwolnienie, a przede wszystkim doświadczysz
//           pełnej miłości i zostaniesz uratowany od piekła.
//         </p>
//         <p>
//           Ja przyszedłem, aby owce miały życie i to życie w całej pełni.
//           Ewangelia Jana 10:10
//         </p>
//         <p>
//           Jednak Jezus nie tylko chce Cię zbawić – On Cię kocha i chce spędzić z
//           Tobą życie. Ma dobre myśli o Tobie i dobre plany dla Ciebie. Jest
//           dobrym Bogiem i wszystko, co ma dla Ciebie, jest dobre.
//         </p>
//         <p>Pamiętaj! Bóg jest dobry, a Jego łaska trwa na wieki!</p>
//         `,
//             },
//         },
//         {
//             type: "Spacer",
//             data: {
//                 height: 10,
//             },
//         },
//         {
//             type: "ExpanderSection",
//             data: {
//                 title: "Gdzie nas znajdziesz?",
//                 imgSrc: "/images/IMG_3.png",
//                 content: `
//         <p style="padding-bottom: 30px;">
//           W każdą pierwszą środę miesiąca, podczas Wieczorów Uwielbienia,
//           wywyższamy Boga wspólnie z naszym kościołem SCh Południe. To prawdziwy
//           czas odpoczynku w Bożej Obecności. Dołącz do nas!
//         </p>
//         <p>
//           Zapraszamy też na nasz kanał na YT. Pracujemy nad tym, by nagrań było
//           coraz więcej!
//         </p>
//         `,
//             },
//         },
//         {
//             type: "Spacer",
//             data: {
//                 height: 10,
//             },
//         },
//         {
//             type: "ExpanderSection",
//             data: {
//                 title: "Jak możesz nas wesprzeć?",
//                 imgSrc: "/images/IMG_3.png",
//                 content: `
//         <p style="margin-bottom: 30px;">
//           Przede wszystkim potrzebujemy Twojej modlitwy. To najcenniejsze, co
//           możesz nam dać, byśmy mogli się rozwijać i realizować marzenia, jakie
//           Bóg wkłada w nasze serca.
//         </p>
//         <p style="margin-bottom: 30px;">
//           Niemniej realizacja wysokiej jakości nagrań wymaga inwestycji dużej
//           ilości pieniędzy. Jeśli chcesz, możesz wesprzeć finansowo XY
//           Uwielbienie!
//         </p>
//         <p>
//           Społeczność Chrześcijańska Południe
//           <br />
//           ul. Mińska 65
//           <br />
//           03-828 Warszawa 69
//           <br />
//           1140 2017 0000 4402 1290 4093
//           <br />
//           Tytuł przelewu: XY Uwielbienie
//         </p>
//         `,
//             },
//         },
//         {
//             type: "Spacer",
//             data: {
//                 height: 20,
//             },
//         },
//     ],
// };
