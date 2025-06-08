import Basic1 from "./snippets/Basic-1.astro";
import Ia1 from "./snippets/Alert-ia-1.astro";
import Warning1 from "./snippets/Warning-1.astro";
import Danger1 from "./snippets/Danger-1.astro";
import Success1 from "./snippets/Success-1.astro";
import Info1 from "./snippets/Info-1.astro";
import Experimental1 from "./snippets/Experimental-1.astro";

export const alertsBlocks = [
    {
        id: "basic-1",
        title: "Basic 1",
        component: Basic1,
        link: "/alerts/basic-1"
    },
    {
        id: "alert-ia-1",
        title: "IA Alert 1",
        component: Ia1,
        link: "/alerts/alert-ia-1"
    },
    {
        id: "warning-1",
        title: "Warning 1",
        component: Warning1,
        link: "/alerts/warning-1"
    },
    {
        id: "danger-1",
        title: "Danger 1",
        component: Danger1,
        link: "/alerts/danger-1"
    },
    {
        id: "success-1",
        title: "Success 1",
        component: Success1,
        link: "/alerts/success-1"
    },
    {
        id: "info-1",
        title: "Info 1",
        component: Info1,
        link: "/alerts/info-1"
    },
    {
        id: "experimental-1",
        title: "Experimental 1",
        component: Experimental1,
        link: "/alerts/experimental-1"
    },
];