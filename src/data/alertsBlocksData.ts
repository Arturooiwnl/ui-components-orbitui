// AUTO-GENERATED FILE. DO NOT EDIT.

import Basic1 from '@/components/ui/alert/blocks/snippets/Basic-1.astro'
import Ia1 from '@/components/ui/alert/blocks/snippets/Alert-ia-1.astro'
import Warning1 from '@/components/ui/alert/blocks/snippets/Warning-1.astro'
import Danger1 from '@/components/ui/alert/blocks/snippets/Danger-1.astro'
import Success1 from '@/components/ui/alert/blocks/snippets/Success-1.astro'
import Info1 from '@/components/ui/alert/blocks/snippets/Info-1.astro'
import Experimental1 from '@/components/ui/alert/blocks/snippets/Experimental-1.astro'

export const alertsBlocksData = [
  {
    id: 'alert-basic-1',
    title: 'Basic 1',
    lang: 'astro',
    component: Basic1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-slate-600 bg-slate-700/20 text-slate-300">
  <AlertTitle>Basic Plan</AlertTitle>
  <AlertDescription>
    Upgrade to unlock premium features.
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-alert-ia-1',
    title: 'IA Alert 1',
    lang: 'astro',
    component: Ia1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-indigo-600 bg-indigo-700/20 text-indigo-300">
  <AlertTitle class="flex gap-1">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
    AI Activated
  </AlertTitle>
  <AlertDescription>
    You are currently using enhanced AI features.
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-warning-1',
    title: 'Warning 1',
    lang: 'astro',
    component: Warning1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-yellow-500 bg-yellow-500/10 text-yellow-300">
  <AlertTitle class="flex gap-1">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 16h.01" /></svg>
    Warning
  </AlertTitle>
  <AlertDescription>
    Please double-check before proceeding.
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-danger-1',
    title: 'Danger 1',
    lang: 'astro',
    component: Danger1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-red-600 bg-red-600/10 text-red-300">
  <AlertTitle class="flex gap-1">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    Error
</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-success-1',
    title: 'Success 1',
    lang: 'astro',
    component: Success1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-green-600 bg-green-600/10 text-green-300">
  <AlertTitle class="felx gap-1">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
    Success
</AlertTitle>
  <AlertDescription>
    Everything went smoothly. You're good to go!
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-info-1',
    title: 'Info 1',
    lang: 'astro',
    component: Info1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-blue-500 bg-blue-500/10 text-blue-300">
  <AlertTitle class="felx gap-1">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
    Info
</AlertTitle>
  <AlertDescription>
    This is a general notification.
  </AlertDescription>
</Alert>
`
  },
  {
    id: 'alert-experimental-1',
    title: 'Experimental 1',
    lang: 'astro',
    component: Experimental1,
    code: `---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
---

<Alert class="border-purple-600 bg-purple-700/20 text-purple-300">
  <AlertTitle>Experimental Feature</AlertTitle>
  <AlertDescription>
    This is a beta feature. Use at your own risk.
  </AlertDescription>
</Alert>
`
  },
];
