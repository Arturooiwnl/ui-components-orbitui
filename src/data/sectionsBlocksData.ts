// AUTO-GENERATED FILE. DO NOT EDIT.

import Princing1 from '@/components/ui/sections/snippets/Pricing-1.astro'
import AiChat1 from '@/components/ui/sections/snippets/Ai-chat-1.astro'
import Features1 from '@/components/ui/sections/snippets/Features-1.astro'

export const sectionsBlocksData  = [
  {
    id: 'pricing-1',
    title: 'Princing 1',
    lang: 'astro',
    img: '/blocks/sections/pricing-1.png',
    component: Princing1,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
---

<section class="w-full min-h-screen py-24 bg-neutral-950">
    <div class="container mx-auto px-4">
        <header class="text-center mb-12">
            <h2 class="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p class="text-neutral-400">Choose the perfect plan for your needs.</p>
        </header>
        
        <footer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
            <!-- Beginner Plan -->
            <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
                <CardHeader class="flex flex-col items-center gap-2">
                    <CardTitle class="text-2xl font-bold">Beginner</CardTitle>
                    <CardDescription class="text-neutral-400 text-center">Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <div class="text-center">
                        <p class="text-3xl font-bold">$5<span class="text-base">/month</span></p>
                        <p class="text-sm text-neutral-500 mt-1">Billed monthly</p>
                    </div>
                    <Divider class="my-4" />
                    <ul class="space-y-3 text-sm text-neutral-300">
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> 5 Projects</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Basic Support</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Basic Analytics</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> 10GB Storage</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button class="w-full text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
                        Get Started
                    </Button>
                </CardFooter>
            </Card>

            <!-- Pro Plan -->
             <span class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-2xl scale-105">
                <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-[16.5px] relative">
                    <CardHeader class="flex flex-col items-center gap-2">
                        <Badge
                            variant="outline"
                            class="absolute -top-2 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-md shadow-pink-500/30"
                        >
                            Most Popular
                        </Badge>
                        <CardTitle class="text-2xl font-bold">Pro</CardTitle>
                        <CardDescription class="text-neutral-400 text-center">Perfect for growing teams</CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="text-center">
                            <p class="text-3xl font-bold">$10<span class="text-base">/month</span></p>
                            <p class="text-sm text-neutral-500 mt-1">Billed monthly</p>
                        </div>
                        <Divider class="my-4" />
                        <ul class="space-y-3 text-sm text-neutral-300">
                            <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Unlimited Projects</li>
                            <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Priority Support</li>
                            <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Advanced Analytics</li>
                            <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> 100GB Storage</li>
                            <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Custom Domains</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button class="w-full text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
                            Get Started
                        </Button>
                    </CardFooter>
                </Card>
             </span>

            <!-- Enterprise Plan -->
            <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
                <CardHeader class="flex flex-col items-center gap-2">
                    <CardTitle class="text-2xl font-bold">Enterprise</CardTitle>
                    <CardDescription class="text-neutral-400 text-center">For large-scale applications</CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <div class="text-center">
                        <p class="text-3xl font-bold">Custom</p>
                        <p class="text-sm text-neutral-500 mt-1">Contact us for pricing</p>
                    </div>
                    <Divider class="my-4" />
                    <ul class="space-y-3 text-sm text-neutral-300">
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Everything in Pro</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> 24/7 Premium Support</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Custom Analytics</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Unlimited Storage</li>
                        <li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> SLA Agreement</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button class="w-full text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
                        Contact us 
                    </Button>
                </CardFooter>
            </Card>
        </footer>

        <div class="text-center mt-12">
            <p class="text-neutral-400">
                Need a custom solution? <a href="#" class="text-indigo-400 hover:underline">Let's talk →</a>
            </p>
        </div>
    </div>
</section>
`
  },
  {
    id: 'ai-chat-1',
    title: 'AI Chat 1',
    lang: 'astro',
    img: '/blocks/sections/ai-chat-1.png',
    component: AiChat1,
    code: `---
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Divider } from "@/components/ui/divider";

const MESSAGES = [
    "Create a blog template",
    "Build a navigation bar",
    "Design a pricing section",
    "Generate a contact form"
];
---

<section class="w-full min-h-screen py-22">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-zinc-900 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(99,102,241,0.13)_0,rgba(99,102,241,0)_50%,rgba(99,102,241,0)_100%)]"></div>
    <div class="container mx-auto px-4 mt-22">
        <header class="text-center mb-12">
        <div class="absolute top-5 left-5 text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M9 4v16" /><path d="M14 10l2 2l-2 2" />
            </svg>
        </div>
            <h2 class="text-5xl font-bold text-white mb-4">Hi, <span class="bg-gradient-to-r from-indigo-300 via-violet-400 to-purple-200 text-transparent bg-clip-text">Jhon</span></h2>
            <p class="text-neutral-400">What will you build today?</p>
            <Divider class="w-1/2 mx-auto mt-5 bg-neutral-600 [mask-image:radial-gradient(circle,black_40%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,black_40%,transparent_70%)]"/>
        </header>
        <footer>
            <div class="relative max-w-3xl mx-auto">
            <Textarea
            id="ia"
            name="ia"
            rows={4}
            class="w-full bg-neutral-800 text-neutral-200 rounded-2xl p-5 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 outline-none resize-none placeholder-neutral-500" 
            placeholder="How can I help you today?"
            />

            <Button class="absolute bottom-2  rounded-xl right-2 text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class=""><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
                Generate 
            </Button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:flex items gap-2 justify-center mt-5">
                {MESSAGES.map(message => (
                    <Button class="bg-neutral-800 rounded-4xl text-neutral-300 border-neutral-700 hover:bg-neutral-700 text-xs md:text-sm hover:border-neutral-600 transition-all duration-300">
                    {message}
                    </Button>
                ))}
            </div>
        </footer>
    </div>

<style>
textarea {
    scrollbar-width: thin;
    scrollbar-color: #00000049 #0f172a00;
}
</style>

</section>
`
  },
  {
    id: 'features-1',
    title: 'Features 1',
    lang: 'astro',
    img: '/blocks/sections/features-1.png',
    component: Features1,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
---

<section class="w-full min-h-screen py-24 bg-neutral-950">
    <div class="container mx-auto px-4">
        <header class="text-center mb-12">
            <Badge
                variant="outline"
                class="mb-4 text-xs font-semibold tracking-wide uppercase bg-gray-700 text-white border-0"
            >
                Why us?
            </Badge>
            <h2 class="text-4xl font-bold text-white mb-4">Everything you need to build amazing products</h2>
            <p class="text-neutral-400 max-w-2xl mx-auto">Powerful features to help you manage, optimize, and scale your projects with ease.</p>
        </header>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-2">
            <!-- Performance -->
            <span class="bg-gradient-to-br from-zinc-900 via-gray-700 to-zinc-900 p-0.5 rounded-2xl">
                <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-[16.5px] h-full">
                    <CardHeader>
                        <div class="w-12 h-12 mb-4 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <CardTitle class="text-xl font-bold">Lightning Fast</CardTitle>
                        <CardDescription class="text-neutral-400">Optimized for speed and performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p class="text-sm text-neutral-300">Experience blazing-fast load times and smooth interactions with our optimized infrastructure.</p>
                    </CardContent>
                </Card>
            </span>

            <!-- Security -->
            <span class="bg-gradient-to-br from-zinc-900 via-gray-700 to-zinc-900 p-0.5 rounded-2xl">
                <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-[16.5px] h-full">
                    <CardHeader>
                        <div class="w-12 h-12 mb-4 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <CardTitle class="text-xl font-bold">Enterprise Security</CardTitle>
                        <CardDescription class="text-neutral-400">Bank-grade security protocols</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p class="text-sm text-neutral-300">Advanced encryption and security measures to keep your data safe and protected.</p>
                    </CardContent>
                </Card>
            </span>

            <!-- Analytics -->
            <span class="bg-gradient-to-br from-zinc-900 via-gray-700 to-zinc-900 p-0.5 rounded-2xl">
                <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-[16.5px] h-full">
                    <CardHeader>
                        <div class="w-12 h-12 mb-4 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <CardTitle class="text-xl font-bold">Advanced Analytics</CardTitle>
                        <CardDescription class="text-neutral-400">Deep insights and metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p class="text-sm text-neutral-300">Comprehensive analytics and reporting tools to track your project's performance.</p>
                    </CardContent>
                </Card>
            </span>

            <!-- AI Integration -->
            <span class="bg-gradient-to-br from-zinc-900 via-gray-700 to-zinc-900 p-0.5 rounded-2xl">
                <Card class="border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-[16.5px] h-full">
                    <CardHeader>
                        <div class="w-12 h-12 mb-4 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class=""><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
                        </div>
                        <CardTitle class="text-xl font-bold">AI Powered</CardTitle>
                        <CardDescription class="text-neutral-400">Smart automation & insights</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p class="text-sm text-neutral-300">Leverage artificial intelligence to automate tasks and get intelligent recommendations.</p>
                    </CardContent>
                </Card>
            </span>
        </div>
        <div class="flex justify-center mt-5">
            <Button class="bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300 text-white">
                Explore all features →
            </Button>
        </div>

    </div>
</section>
`
  },
];
