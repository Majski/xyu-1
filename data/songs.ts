export const songs = [
  {
    id: "laski-cud",
    title: "Łaski cud",
    subtitle: "",
    author: "",
    imgSrc: "/images/IMG_4112.png",
    spotifyUrl: "",
    youtubeUrl: "",
  },
  {
    id: "nie-patrze-wstecz",
    title: "Nie patrzę wstecz",
    subtitle: "",
    author: "",
    imgSrc: "/images/IMG_1.png",
    spotifyUrl: "",
    youtubeUrl: "",
  },
  {
    id: "grace-to-grace",
    title: "Grace to Grace",
    subtitle: "",
    author: "",
    imgSrc: "/images/IMG_2.png",
    spotifyUrl: "",
    youtubeUrl: "",
  },
  {
    id: "czekam-na-ciebie",
    title: "Czekam na Ciebie",
    subtitle: "",
    author: "",
    imgSrc: "/images/IMG_4112.png",
    spotifyUrl: "",
    youtubeUrl: "",
  },
];

export const songsData = {
  id: "",
  pageTitle: "Teksty i akordy",
  components: [
    {
      type: "Banner",
      data: {
        title: "nowość",
        imgSrc: "/images/IMG_4112.png",
      },
    },
    {
      type: "Song",
      data: {
        title: "Łaski cud",
        spotifyUrl: "",
        youtubeUrl: "",
        isExpanded: false,
      },
    },
    {
      type: "Spacer",
      data: {
        height: 70,
      },
    },
    {
      type: "SongsList",
      data: {
        songs: songs,
      },
    },
    {
      type: "Spacer",
      data: {
        height: 70,
      },
    },
  ],
};
