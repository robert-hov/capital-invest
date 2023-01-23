import tsaghkadzor from "./assets/img/porjects/tsaghkadzor.png";
import dilijan from "./assets/img/porjects/dilijan.png";
import t1 from "./assets/img/porjects/tsaghkadzor/1.png";
import t2 from "./assets/img/porjects/tsaghkadzor/2.png";
import t3 from "./assets/img/porjects/tsaghkadzor/3.png";
import t4 from "./assets/img/porjects/tsaghkadzor/4.png";
import d1 from "./assets/img/porjects/dilijan/d1.png";
import d2 from "./assets/img/porjects/dilijan/d2.png";
import d3 from "./assets/img/porjects/dilijan/d3.png";
import d4 from "./assets/img/porjects/dilijan/d4.png";
import dilijanLogo from "././assets/img/partners/dilijanLogo.svg";
import tsaghkadzorLogo from "./assets/img/partners/tsaghkadzorLogo.svg";

export const nav = [
  {
    link: "/",
    text: "home",
  },
  {
    link: "/projects",
    text: "projects",
  },
  {
    link: "/services",
    text: "services",
  },
  {
    link: "/career",
    text: "career",
  },
  {
    link: "/contacts",
    text: "contacts",
  },
];

export const footerNav = [
  {
    link: "/projects",
    text: "projects",
  },
  {
    link: "/career",
    text: "career",
  },
  {
    link: "/services",
    text: "services",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Tsaghkadzor hills aparts and villas",
    img: tsaghkadzor,
    content: {
      description:
        "Tsaghkadzor Hills multifunctional residential complex, 2 high-rise, multifunctional building, 60 private houses, 3 three-story multifunctional building, 4 four-story multifunctional building.",
      cover: tsaghkadzor,
      imagesTop: [t1, t2, t3, t4],
      imagesBottom: [t1, t2, t3, t4],
      about:
        "In Tsaghkadzor Hills awaits you: Outdoor swimming pool, Indoor swimming pool, Gym, Playground, Cafes, Banquet hall and a number of other entertainment places.",
      address: (
        <>
          <b>Our address:</b> RA, Gegharkunik Marz, Tsaghkadzor, Saralanji 1.
        </>
      ),
      logo: tsaghkadzorLogo,
    },
  },
  {
    id: 2,
    title: "diLIJAN HILLS",
    img: dilijan,
    content: {
      desctiption: 'DILIJAN HILLS esidential area offers two-storey detached houses. You can buy the apartments both renovated with kitchen furniture and without renovation. Total plot area: 220-292 square meters',
      cover: dilijan,
      imagesTop: [d1, d2, d3, d4],
      imagesBottom: [d1, d2, d3, d4],
      about:
        "The mansion has: 4 bedrooms, 2 bathrooms, balcony, mansion area: 115 square meters, private land, private parking.",
      address: (
        <>
          <b>Our address:</b> RA, Gegharkunik Marz, Tsaghkadzor, Saralanji 1.
        </>
      ),
      logo: dilijanLogo,
    },
  },
];
