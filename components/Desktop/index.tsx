import React from "react";
import { BlockWrapper } from "../ui/BlockWrapper";
import Link from "next/link";

export const Desktop = () => {
  return (
    <div>
      <div
        css={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1515276427842-f85802d514a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3155&q=80)",
          backgroundSize: "cover",
          height: "calc(100vh - 100px)",
        }}
      >
        <BlockWrapper
          wrapperCss={{ height: "100%" }}
          css={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            css={{
              width: 500,
              height: 800,
              backgroundColor: "#fff",
              opacity: 0.6,
              position: "absolute",
              left: 40,
              bottom: -100,
            }}
          />
          <h1
            css={{
              fontSize: 120,
              zIndex: 100,
              textShadow: "12px 5px 0px rgba(0,0,0,1)",
            }}
          >
            XY UWIELBIENIE
          </h1>
        </BlockWrapper>
      </div>
      <BlockWrapper css={{ height: "70vh", display: "flex", paddingTop: 120 }}>
        <div
          css={{
            flexBasis: "70%",
            marginRight: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 css={{ fontSize: 50, marginBottom: 40 }}>Kim jesteśmy?</h2>
          <p css={{ fontWeight: "lighter", lineHeight: 1.6 }}>
            XYU to grupa przyjaciół ze Społeczności Chrześcijańskiej Południe w
            Warszawie. Kochamy Boga i chcemy poznawać Go głębiej. Naszym
            marzeniem jest, by uwielbienie płynące z kościoła było jak ożywcza
            rzeka, która zmienia rzeczywistość i przynosi owoce w postaci
            uwolnienia, uzdrowienia i zbawienia. Chcemy, by to, co robimy,
            oddawało Bogu chwałę, a Duch Święty realnie objawiał się w swojej
            mocy. Nie chcemy jedynie tworzyć kolejnego projektu muzycznego –
            pragniemy głębi, z której wypływać będą nowe dźwięki i teksty. W
            2018 roku założyliśmy kanał na YT, na którym umieszczamy zarówno
            autorskie utwory, jak i covery. Stawiamy na wysoką jakość pod
            względem muzycznym, wizualnym i produkcyjnym.
          </p>
        </div>
        <div
          css={{
            flexBasis: 500,
            height: 600,
            position: "relative",
            top: 170,
            boxShadow: "20px 20px 0px #000",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586285470103-37c89aa63de2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)",
            backgroundSize: "cover",
          }}
        ></div>
      </BlockWrapper>
      <div css={{ backgroundColor: "#fff", padding: "120px 0 50px 0" }}>
        <BlockWrapper>
          <div css={{ maxWidth: 1100, marginRight: "auto" }}>
            <h2
              css={{
                fontSize: 50,
                color: "#000",
                fontWeight: "bold",
                marginBottom: 30,
              }}
            >
              Nasza twórczość
            </h2>
            <div
              css={{
                height: 250,
                backgroundColor: "#000",
                display: "flex",
                marginBottom: 10,
              }}
            >
              <div
                css={{
                  flexBasis: 450,
                  height: "100%",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1555819206-7b30da4f1506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80)",
                  backgroundSize: "cover",
                }}
              />
              <div
                css={{
                  padding: "50px 30px 10px 30px",
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  css={{ fontSize: 30, fontWeight: "lighter", lineHeight: "1" }}
                >
                  Czekam na Ciebie
                </p>
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
                        left: -10,
                        top: 10,
                      }}
                    >
                      więcej
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              css={{
                height: 250,
                backgroundColor: "#000",
                display: "flex",
              }}
            >
              <div
                css={{
                  flexBasis: 450,
                  height: "100%",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1508366717390-1b54517b6cce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
                  backgroundSize: "cover",
                }}
              />
              <div
                css={{
                  padding: "50px 30px 10px 30px",
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  css={{ fontSize: 30, fontWeight: "lighter", lineHeight: "1" }}
                >
                  Grace to Grace
                  <br />
                  <span css={{ fontSize: 20 }}>Łaski cud</span>
                </p>
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
                        left: -10,
                        top: 10,
                      }}
                    >
                      więcej
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/songs">
              <a
                css={{
                  position: "relative",
                  cursor: "pointer",
                  display: "block",
                  marginLeft: "auto",
                  width: 200,
                  marginTop: 80,
                  textAlign: "right",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="100"
                >
                  <path
                    fill="black"
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
                    left: -10,
                    top: 10,
                    color: "#000",
                  }}
                >
                  cała dyskografia
                </span>
              </a>
            </Link>
          </div>
        </BlockWrapper>
        <div
          css={{
            height: 500,
            display: "flex",
            flexWrap: "wrap",
            marginTop: 50,
          }}
        >
          {[
            "https://images.unsplash.com/photo-1588907395850-0bbefa3b1c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1587579340183-76829fe88b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1485559131919-ba21c3a6a5ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1583107100518-1eaaf02ce686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1569564358015-a11afb002245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1509220676330-01891402eb14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1534387030996-d0af567021d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1575270222557-2f4fa8db36a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80",
          ].map((el) => (
            <div
              css={{
                backgroundImage: `url(${el})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexBasis: "25%",
              }}
            />
          ))}
        </div>
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
                height: "50vh",
                width: "100%",
                margin: "0 40px",
                position: "relative",
              }}
            >
              <div
                css={{
                  width: 400,
                  height: 400,
                  backgroundColor: "#000",
                  position: "relative",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="100"
                  css={{
                    position: "absolute",
                    right: 40,
                    bottom: 40,
                    zIndex: 100,
                  }}
                >
                  <path
                    fill="white"
                    d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
			H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
			c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
			"
                  />
                </svg>
              </div>
              <div
                css={{
                  backgroundColor: "#000",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  height: "85%",
                  width: "75%",
                  padding: "50px 50px 50px 200px",
                }}
              >
                <h2 css={{ fontSize: 50 }}>Nasz dom</h2>
                <p css={{ fontWeight: "lighter" }}>
                  XY Uwielbienie to muzyka i treści płynące z serca ludzi
                  z kościoła Społeczność Chrześcijańska Południe w Warszawie. To
                  kościół, który w oparciu o naukę Biblii i z mocą Ducha
                  Świętego wspiera ludzi w nawiązywaniu osobistej relacji z
                  Bogiem. Bogiem, który w swojej miłości i mocy ma dla każdego
                  cudowny plan.
                </p>
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 40,
                  }}
                >
                  <img
                    src="/images/logo-colour.png"
                    css={{
                      width: 80,
                      height: 80,
                      marginRight: 30,
                    }}
                  />
                  <p
                    css={{
                      color: "#fff",
                      lineHeight: 1.2,
                      fontWeight: "lighter",
                      fontSize: 16,
                    }}
                  >
                    Gdzie: Mińska 65, Warszawa
                    <br />
                    Kiedy: każda niedziela 10:00 i 12:00
                    <br />
                    Odwiedź nas na FB/schpoludnie
                    <br />
                    www.schpoludnie.pl
                  </p>
                </div>
              </div>
            </div>
          </BlockWrapper>
        </div>
        <div
          css={{
            height: 350,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1527389123978-53405521c094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3209&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "0 710px",
          }}
        />
        <div
          css={{
            backgroundColor: "#000",
            height: "calc(100vh - 100px)",
            padding: "100px 0",
          }}
        >
          <BlockWrapper>
            <h2 css={{ fontSize: 50, fontWeight: "bold" }}>Jezus</h2>
          </BlockWrapper>
        </div>
        <div
          css={{
            height: 350,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1527389123978-53405521c094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3209&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
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
                height: "60vh",
                width: "100%",
                margin: "0 40px",
                position: "relative",
              }}
            >
              <div
                css={{
                  width: 400,
                  height: 600,
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1568172775200-22109a1845b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80)",
                  backgroundSize: "cover",
                  position: "relative",
                  zIndex: 100,
                  boxShadow: "20px 20px 0px #000",
                }}
              ></div>
              <div
                css={{
                  backgroundColor: "#000",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  height: "85%",
                  width: "75%",
                  padding: "50px 50px 50px 200px",
                  p: { fontWeight: "lighter" },
                }}
              >
                <h2 css={{ fontSize: 50, marginBottom: 70 }}>
                  Gdzie nas znajdziesz?
                </h2>
                <p css={{ marginBottom: 30 }}>
                  W każdą pierwszą środę miesiąca, podczas Wieczorów
                  Uwielbienia, wywyższamy Boga wspólnie z naszym kościołem SCh
                  Południe. To prawdziwy czas odpoczynku w Bożej Obecności.
                  Dołącz do nas!
                </p>
                <p>
                  Zapraszamy też na nasz kanał na YT. Pracujemy nad tym, by
                  nagrań było coraz więcej!
                </p>
              </div>
            </div>
          </BlockWrapper>
        </div>
        <div
          css={{
            height: 350,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
