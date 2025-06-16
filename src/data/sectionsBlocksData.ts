// AUTO-GENERATED FILE. DO NOT EDIT.

import Princing1 from '@/components/ui/sections/snippets/Pricing-1.astro'

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
];
