// AUTO-GENERATED FILE. DO NOT EDIT.

import Default1 from '@/components/ui/card/blocks/snippets/Default-1.astro'
import CardGlass1 from '@/components/ui/card/blocks/snippets/Card-1-glass.astro'
import CardNeobrutalist1 from '@/components/ui/card/blocks/snippets/Card-neobrutalist-1.astro'
import Retro1 from '@/components/ui/card/blocks/snippets/Retro-1.astro'
import ElegantDark1 from '@/components/ui/card/blocks/snippets/Elegant-1-dark.astro'
import CardTech1 from '@/components/ui/card/blocks/snippets/Card-tech-1.astro'

export const cardsBlocksData  = [
  {
    id: 'cards-default-1',
    title: 'Default',
    lang: 'astro',
    component: Default1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description for the card header.</CardDescription>
  </CardHeader>

  <CardContent>
    <p>This is the main body of the card.</p>
  </CardContent>

  <CardFooter>
    <p>Card footer content or actions.</p>
  </CardFooter>
</Card>`
  },
  {
    id: 'cards-card-1-glass',
    title: 'Glass',
    lang: 'astro',
    component: CardGlass1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card class="bg-white/5 backdrop-blur-lg border border-white/20 shadow-lg text-white">
  <CardHeader>
    <CardTitle class="text-sky-300">Soft dreams</CardTitle>
    <CardDescription class="text-white/70">Powered by ACME</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Adaptive. Predictive. Intuitive.</p>
  </CardContent>
  <CardFooter>
    <p>Last update: 2s ago</p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'cards-card-neobrutalist-1',
    title: 'Neobrutalist',
    lang: 'astro',
    component: CardNeobrutalist1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card class="bg-white border-2 border-black shadow-[6px_6px_0_#000] text-black rounded-none">
  <CardHeader>
    <CardTitle class="font-bold uppercase">Brutalist</CardTitle>
    <CardDescription class="text-gray-800">Loud. Unapologetic.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>All about bold contrast.</p>
  </CardContent>
  <CardFooter>
    <p>#raw-ui</p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'cards-retro-1',
    title: 'Retro',
    lang: 'astro',
    component: Retro1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card class="bg-[#fff5e1] border-2 text-gray-500 border-black rounded-none shadow-[4px_4px_0_0_#000] font-mono text-sm">
  <CardHeader>
    <CardTitle class="text-black">Retro Card</CardTitle>
    <CardDescription class="text-black/70">Old-school vibes.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Looks like an MS Paint window.</p>
  </CardContent>
  <CardFooter>
    <p>Click me maybe?</p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'cards-elegant-1-dark',
    title: 'Elegant Dark',
    lang: 'astro',
    component: ElegantDark1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card class="bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 text-white hover:shadow-md transition-shadow duration-300 rounded-xl">
  <CardHeader>
    <CardTitle class="text-white">Plan Nova</CardTitle>
    <CardDescription class="text-zinc-400">$20</CardDescription>
  </CardHeader>
  <CardContent>
    <p>All access guaranteed</p>
  </CardContent>
  <CardFooter class="text-zinc-400">
    <p>Premium experience.</p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'cards-card-tech-1',
    title: 'Tech',
    lang: 'astro',
    component: CardTech1,
    code: `---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
---

<Card class="bg-black border border-cyan-500/30 shadow-[0_0_20px_2px_rgba(34,211,238,0.2)] text-cyan-300 font-mono">
  <CardHeader>
    <CardTitle>Server Stats</CardTitle>
    <CardDescription>System diagnostics active</CardDescription>
  </CardHeader>
  <CardContent>
    <ul class="list-disc pl-5 space-y-1">
        <li>RAM: 16GB DDR4</li>
        <li>GPU: NVIDIA RTX 3060</li>
        <li>Storage: 512GB SSD</li>
    </ul>
  </CardContent>
  <CardFooter>
    <p>CPU: 86%</p>
  </CardFooter>
</Card>
`
  },
];
