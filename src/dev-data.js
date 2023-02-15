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
import dilijanLogo from "./assets/img/porjects/dilijan/dilijanLogo.png";
import tsaghkadzorLogo from "./assets/img/porjects/tsaghkadzor/tsaghkadzorLogo.png";

export const nav = [
    {
        link: "/",
        text: "nav.home",
    },
    {
        link: "/projects",
        text: "nav.projects",
    },
    {
        link: "/services",
        text: "nav.services",
    },
    {
        link: "/career",
        text: "nav.career",
    },
    {
        link: "/contacts",
        text: "nav.contacts",
    },
];

export const footerNav = [
    {
        link: "/projects",
        text: "nav.projects",
    },
    {
        link: "/career",
        text: "nav.career",
    },
    {
        link: "/services",
        text: "nav.services",
    },
];

export const projectsData = [
    {
        id: 1,
        title: "projects.tsaghkadzor.title",
        img: tsaghkadzor,
        content: {
            description:
                "projects.tsaghkadzor.desc",
            cover: tsaghkadzor,
            imagesTop: [t1, t2, t3, t4],
            imagesBottom: [t1, t2, t3, t4],
            about:
                "projects.tsaghkadzor.about",
            address: "projects.tsaghkadzor.address",
            logo: tsaghkadzorLogo,
        },
    },
    {
        id: 2,
        title: "projects.dilijan.title",
        img: dilijan,
        content: {
            desctiption: 'projects.dilijan.desc',
            cover: dilijan,
            imagesTop: [d1, d2, d3, d4],
            imagesBottom: [d1, d2, d3, d4],
            about:
                "projects.dilijan.about",
            address: "projects.dilijan.address",
            logo: dilijanLogo,
        },
    },
];

export const serviceSlides = [
    {
        icon: {
            hrefLink: "law",
            alt: "law icon",
        },
        content: "services.items.law",
    },
    {
        icon: {
            hrefLink: "discount",
            alt: "discount icon",
        },
        content: "services.items.percent",
    },
    {
        icon: {
            hrefLink: "rocket",
            alt: "rocket icon",
        },
        content: "services.items.rocket",
    },
    {
        icon: {
            hrefLink: "research",
            alt: "research icon",
        },
        content: "services.items.research",
    },
    {
        icon: {
            hrefLink: "ad",
            alt: "ad icon",
        },
        content: "services.items.ad",
    },
    {
        icon: {
            hrefLink: "finance",
            alt: "finance icon",
        },
        content: "services.items.finance",
    },
    {
        icon: {
            hrefLink: "books",
            alt: "books icon",
        },
        content: "services.items.books",
    },
    {
        icon: {
            hrefLink: "buildings",
            alt: "buildings icon",
        },
        content: "services.items.buildings",
    },
];

