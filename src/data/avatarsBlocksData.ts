// AUTO-GENERATED FILE. DO NOT EDIT.

import DotOnline1Simple from '@/components/ui/avatar/blocks/snippets/Dot-online-1-simple.astro'
import DotOnline2Pulse from '@/components/ui/avatar/blocks/snippets/Dot-online-2-pulse.astro'
import AvatarTech1 from '@/components/ui/avatar/blocks/snippets/Avatar-tech-1.astro'
import Basic1 from '@/components/ui/avatar/blocks/snippets/Avatar-basic-1.astro'

export const avatarsBlocksData  = [
  {
    id: 'avatar-dot-online-1-simple',
    title: 'Dot - Online 1',
    lang: 'astro',
    component: DotOnline1Simple,
    code: `---
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
---

<div class="flex gap-2">
  <div class="relative w-fit">
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
      <AvatarFallback>YOU</AvatarFallback>
    </Avatar>
    <span class="absolute z-10 top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
  </div>
  <div class="relative w-fit">
    <Avatar variant="square">
      <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
      <AvatarFallback>YOU</AvatarFallback>
    </Avatar>
    <span class="absolute z-10 -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
  </div>
</div>
`
  },
  {
    id: 'avatar-dot-online-2-pulse',
    title: 'Dot - Online 2',
    lang: 'astro',
    component: DotOnline2Pulse,
    code: `---
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
---

<div class="flex gap-2">
<div class="relative w-fit">
  <Avatar class="ring-2 ring-indigo-500">
    <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
    <AvatarFallback>YOU</AvatarFallback>
  </Avatar>
  <span class="absolute z-10 top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
  <span class="absolute z-10 top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
</div>
<div class="relative w-fit">
  <Avatar variant="square" class="ring-2 ring-indigo-500">
    <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
    <AvatarFallback>YOU</AvatarFallback>
  </Avatar>
  <span class="absolute z-10 -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
  <span class="absolute z-10 -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
</div>
</div>`
  },
  {
    id: 'avatar-avatar-tech-1',
    title: 'Tech 1',
    lang: 'astro',
    component: AvatarTech1,
    code: `---
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
---

<Avatar class="ring ring-purple-500 ring-offset-2 ring-offset-black shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]">
  <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
  <AvatarFallback>YOU</AvatarFallback>
</Avatar>`
  },
  {
    id: 'avatar-avatar-basic-1',
    title: 'Basic 1',
    lang: 'astro',
    component: Basic1,
    code: `---
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
---
    <Avatar class="bg-white/20 ring-2 ring-white/30">
      <AvatarImage src="https://i.pravatar.cc/300" alt="Avatar" />
      <AvatarFallback class="text-white">YOU</AvatarFallback>
    </Avatar>
</span>

`
  },
];
