// AUTO-GENERATED FILE. DO NOT EDIT.

import Basic1 from '@/components/ui/badge/blocks/snippets/Basic-1.astro'
import Basic2Hover from '@/components/ui/badge/blocks/snippets/Basic-2-hover.astro'
import Ia1 from '@/components/ui/badge/blocks/snippets/Ia-1.astro'
import Admin1Shield from '@/components/ui/badge/blocks/snippets/Admin-1-shield.astro'
import Plan1Free from '@/components/ui/badge/blocks/snippets/Plan-1-free.astro'
import Plan2Pro from '@/components/ui/badge/blocks/snippets/Plan-2-pro.astro'
import Plan3Blocked from '@/components/ui/badge/blocks/snippets/Plan-3-blocked.astro'
import Plan4Temporal from '@/components/ui/badge/blocks/snippets/Plan-4-temporal.astro'
import NightMode1 from '@/components/ui/badge/blocks/snippets/Night-mode-1.astro'

export const badgesBlocksData  = [
  {
    id: 'badge-basic-1',
    title: 'Basic 1',
    lang: 'astro',
    component: Basic1,
    code: `---
import {Badge} from "@/components/ui/badge";
---

<Badge class="bg-slate-600/50 border border-slate-500">Basic 1</Badge>`
  },
  {
    id: 'badge-basic-2-hover',
    title: 'Basic 2 - Hover',
    lang: 'astro',
    component: Basic2Hover,
    code: `---
import {Badge} from "@/components/ui/badge";
---

<Badge class="bg-slate-600/50 border border-slate-500 hover:bg-slate-600/60 hover:border-slate-600 transition-all duration-300">Basic 2</Badge>
`
  },
  {
    id: 'badge-ia-1',
    title: 'IA 1',
    lang: 'astro',
    component: Ia1,
    code: `---
import {Badge} from "@/components/ui/badge";
---

<Badge class="flex gap-1 items-center bg-gradient-to-r from-indigo-600/50 to-violet-600/50 border border-indigo-500 hover:from-indigo-600 hover:to-violet-600 hover:border-indigo-600 transition-all duration-300 text-white ">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon mt-0.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
  IA Power
</Badge>`
  },
  {
    id: 'badge-admin-1-shield',
    title: 'Admin 1',
    lang: 'astro',
    component: Admin1Shield,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-emerald-700/30 border border-emerald-500 text-emerald-200">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="mt-0.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /></svg>
Admin Secure
</Badge>
`
  },
  {
    id: 'badge-plan-1-free',
    title: 'Plan 1 - Free',
    lang: 'astro',
    component: Plan1Free,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-gray-700/50 border border-gray-600 text-white">Free Plan</Badge>
`
  },
  {
    id: 'badge-plan-2-pro',
    title: 'Plan 2 - Pro',
    lang: 'astro',
    component: Plan2Pro,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-yellow-500/10 border border-yellow-500 text-yellow-300 font-semibold">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bolt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
Pro Access
</Badge>
`
  },
  {
    id: 'badge-plan-3-blocked',
    title: 'Plan 3 - Blocked',
    lang: 'astro',
    component: Plan3Blocked,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-rose-600/30 border border-rose-500 text-rose-100">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="mt-0.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
  Premium Only
</Badge>
`
  },
  {
    id: 'badge-plan-4-temporal',
    title: 'Plan 4 - Temporal',
    lang: 'astro',
    component: Plan4Temporal,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-orange-500/20 border border-orange-400 text-orange-300">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="mt-0.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
Trial Active
</Badge>
`
  },
  {
    id: 'badge-night-mode-1',
    title: 'Night Mode 1',
    lang: 'astro',
    component: NightMode1,
    code: `---
import { Badge } from "@/components/ui/badge";
---

<Badge class="bg-black/30 border border-slate-800 text-slate-200">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="mt-0.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
Night Mode
</Badge>
`
  },
];
