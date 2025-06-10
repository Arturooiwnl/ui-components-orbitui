
import CardGlass1 from "./snippets/Card-1-glass.astro";
import CardNeobrutalist1 from "./snippets/Card-neobrutalist-1.astro";
import Retro1 from "./snippets/Retro-1.astro";
import ElegantDark1 from "./snippets/Elegant-1-dark.astro";
import CardTech1 from "./snippets/Card-tech-1.astro";

export const cardsBlocks = [
    {
        id: "card-1-glass",
        title: "Glass IA",
        component: CardGlass1,
        link: "/cards/card-1-glass"
    },
    {
        id: "card-neobrutalist-1",
        title: "Neobrutalist",
        component: CardNeobrutalist1,
        link: "/cards/card-neobrutalist-1"
    },
    {
        id: "retro-1",
        title: "Retro",
        component: Retro1,
        link: "/cards/retro-1"
    },
    {
        id: "elegant-1-dark",
        title: "Elegant Dark",
        component: ElegantDark1,
        link: "/cards/elegant-1-dark"
    },
    {
        id: "card-tech-1",
        title: "Tech",
        component: CardTech1,
        link: "/cards/card-tech-1"
    }
];