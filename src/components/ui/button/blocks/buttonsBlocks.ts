import Defaults from "./snippets/Defaults.astro"
import Basic1 from "./snippets/Basic-1.astro";
import Basic2 from "./snippets/Basic-2.astro";
import NeoBrutalist1 from "./snippets/NeoBrutalist-1.astro";
import Retro1 from "./snippets/Retro-1.astro";
import Modern1 from "./snippets/Modern-1.astro";
import Tech1 from "./snippets/Tech-1.astro";
import IA1 from "./snippets/Ia-1-glowing.astro";
import Minimal1 from "./snippets/Minimal-1.astro";
import IA2 from "./snippets/Ia-2-simple.astro";

export const buttonsBlocks = [
    {
        id: "defaults",
        title: "Default",
        component: Defaults,
        link: "/buttons/defaults"
    },
    {
        id: "basic-1",
        title: "Basic 1",
        component: Basic1,
        link: "/buttons/basic-1"
    },
    {
        id: "basic-2",
        title: "Basic 2",
        component: Basic2,
        link: "/buttons/basic-2"
    },
    {
        id: "neoBrutalist-1",
        title: "Neo Brutalist 1",
        component: NeoBrutalist1,
        link: "/buttons/neoBrutalist-1"
    },
    {
        id: "retro-1",
        title: "Retro 1",
        component: Retro1,
        link: "/buttons/retro-1"
    },
    {
        id: "modern-1",
        title: "Modern 1",
        component: Modern1,
        link: "/buttons/modern-1"
    },
    {
        id: "tech-1",
        title: "Tech 1",
        component: Tech1,
        link: "/buttons/tech-1"
    },
    {
        id: "ia-1-glowing",
        title: "IA 1 - Glowing",
        component: IA1,
        link: "/buttons/ia-1-glowing"
    },
    {
        id: "ia-2-simple",
        title: "IA 2 - Simple",
        component: IA2,
        link: "/buttons/ia-2-simple"
    },
    {
        id: "minimal-1",
        title: "Minimal 1",
        component: Minimal1,
        link: "/buttons/minimal-1"
    }
];