import Basic1 from "./snippets/Basic-1.astro"
import Basic2Hover from "./snippets/Basic-2-hover.astro"
import Ia1 from "./snippets/Ia-1.astro";
import Admin1Shield from "./snippets/Admin-1-shield.astro";
import Plan1Free from "./snippets/Plan-1-free.astro";
import Plan2Pro from "./snippets/Plan-2-pro.astro";
import Plan3Blocked from "./snippets/Plan-3-blocked.astro";
import Plan4Temporal from "./snippets/Plan-4-temporal.astro";
import NightMode1 from "./snippets/Night-mode-1.astro";

export const badgesBlocks = [
    {
        id: "basic-1",
        title: "Basic 1",
        component: Basic1,
        link: "/badges/basic-1"
    },
    {
        id: "basic-2-hover",
        title: "Basic 2 - Hover",
        component: Basic2Hover,
        link: "/badges/basic-2-hover"
    },
    {
        id: "ia-1",
        title: "IA 1",
        component: Ia1,
        link: "/badges/ia-1"
    },
    {
        id: "admin-1-shield",
        title: "Admin 1",
        component: Admin1Shield,
        link: "/badges/admin-1-shield"
    },
    {
        id: "plan-1-free",
        title: "Plan 1 - Free",
        component: Plan1Free,
        link: "/badges/plan-1-free"
    },
    {
        id: "plan-2-pro",
        title: "Plan 2 - Pro",
        component: Plan2Pro,
        link: "/badges/plan-2-pro"
    },
    {
        id: "plan-3-blocked",
        title: "Plan 3 - Blocked",
        component: Plan3Blocked,
        link: "/badges/plan-3-blocked"
    },
    {
        id: "plan-4-temporal",
        title: "Plan 4 - Temporal",
        component: Plan4Temporal,
        link: "/badges/plan-4-temporal"
    },
    {
        id: "night-mode-1",
        title: "Night Mode 1",
        component: NightMode1,
        link: "/badges/night-mode-1"
    },
];