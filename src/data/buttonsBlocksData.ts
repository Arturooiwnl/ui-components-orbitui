// AUTO-GENERATED FILE. DO NOT EDIT.

import Defaults from '@/components/ui/button/blocks/snippets/Defaults.astro'
import Basic1 from '@/components/ui/button/blocks/snippets/Basic-1.astro'
import Basic2 from '@/components/ui/button/blocks/snippets/Basic-2.astro'
import NeoBrutalist1 from '@/components/ui/button/blocks/snippets/NeoBrutalist-1.astro'
import Retro1 from '@/components/ui/button/blocks/snippets/Retro-1.astro'
import Modern1 from '@/components/ui/button/blocks/snippets/Modern-1.astro'
import Tech1 from '@/components/ui/button/blocks/snippets/Tech-1.astro'
import IA1 from '@/components/ui/button/blocks/snippets/Ia-1-glowing.astro'
import IA2 from '@/components/ui/button/blocks/snippets/Ia-2-simple.astro'
import Minimal1 from '@/components/ui/button/blocks/snippets/Minimal-1.astro'

export const buttonsBlocksData  = [
  {
    id: 'button-basic-1',
    title: 'Basic 1',
    lang: 'astro',
    component: Basic1,
    code: `---
import { Button } from "@/components/ui/button";
import { contentDefault } from "../blockConst"
---

  <Button class="bg-slate-500 border border-gray-400 rounded-lg hover:bg-slate-500/90 hover:border-gray-600 transition-all duration-300">Get Started</Button>`
  },
  {
    id: 'button-basic-2',
    title: 'Basic 2',
    lang: 'astro',
    component: Basic2,
    code: `---
import { Button } from "@/components/ui/button";
import { contentDefault } from "../blockConst"
---

  <Button class="bg-transparent text-white hover:text-black border border-gray-400 rounded-lg hover:bg-slate-500/90 hover:border-gray-600 transition-all duration-300">{contentDefault}</Button>`
  },
  {
    id: 'button-neoBrutalist-1',
    title: 'Neo Brutalist 1',
    lang: 'astro',
    component: NeoBrutalist1,
    code: `---
import { Button } from "@/components/ui/button";
---
<Button class="bg-white text-black border-2 border-black font-bold px-6 py-2 shadow-[4px_4px_0_0_black] hover:border-black hover:scale-105  hover:bg-gray-100 transition-all duration-300">
  Neo-Brutalist
</Button>
`
  },
  {
    id: 'button-retro-1',
    title: 'Retro 1',
    lang: 'astro',
    component: Retro1,
    code: `---
import { Button } from "@/components/ui/button";
---
<Button class="bg-yellow-400 text-pink-800 font-bold border-2 border-pink-700 rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-yellow-300 transition duration-300">
  Retro
</Button>
`
  },
  {
    id: 'button-modern-1',
    title: 'Modern 1',
    lang: 'astro',
    component: Modern1,
    code: `---
import { Button } from "@/components/ui/button";
---


<Button class="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white border border-sky-700 hover:border-sky-600 font-medium px-6 py-2 rounded-xl hover:scale-105 hover:shadow-xl transition duration-300">
  Modern
</Button>
`
  },
  {
    id: 'button-tech-1',
    title: 'Tech 1',
    lang: 'astro',
    component: Tech1,
    code: `---
import { Button } from "@/components/ui/button";
---
<Button class="bg-black text-green-400 font-mono border border-green-500 rounded-md px-4 py-2 hover:bg-green-900/10 hover:text-green-300 transition-all duration-300">
  Tech
</Button>
`
  },
  {
    id: 'button-ia-1-glowing',
    title: 'IA 1 - Glowing',
    lang: 'astro',
    component: IA1,
    code: `---
import { Button } from "@/components/ui/button";
---
<div class="relative group">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
    <div class="relative z-10 p-0.5">
    <Button class="bg-gradient-to-r from-blue-700 via-indigo-500 to-fuchsia-500 border-none text-white rounded-full px-6 py-2 shadow-lg hover:brightness-125 transition-all duration-300">
        Get Started
    </Button>
    </div>
</div>
`
  },
  {
    id: 'button-ia-2-simple',
    title: 'IA 2 - Simple',
    lang: 'astro',
    component: IA2,
    code: `---
import { Button } from "@/components/ui/button";
---

<Button class="bg-gradient-to-r from-blue-700 via-indigo-500 to-fuchsia-500 border-none text-white rounded-full px-6 py-2 shadow-lg hover:brightness-125 transition-all duration-300">
    Get Started
</Button>`
  },
  {
    id: 'button-minimal-1',
    title: 'Minimal 1',
    lang: 'astro',
    component: Minimal1,
    code: `---
import { Button } from "@/components/ui/button";
import { contentDefault } from "../blockConst"
---

<Button class="bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-300">
  {contentDefault}
</Button>`
  },
];
