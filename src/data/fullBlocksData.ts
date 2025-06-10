// AUTO-GENERATED FILE. DO NOT EDIT.

import Auth1SignIn from '@/components/ui/blocks/snippets/Auth-1-signin.astro'
import Auth1SignUp from '@/components/ui/blocks/snippets/Auth-1-signup.astro'
import Billed1Card from '@/components/ui/blocks/snippets/Billed-card-1.astro'
import Profile1 from '@/components/ui/blocks/snippets/Profile-card-1.astro'
import Profile2 from '@/components/ui/blocks/snippets/Profile-card-2.astro'
import Product1 from '@/components/ui/blocks/snippets/Product-card-1.astro'

export const fullBlocksData = [
  {
    id: 'auth-1-signin',
    title: 'Auth 1 - Sign In',
    lang: 'astro',
    component: Auth1SignIn,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  <Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
      <CardHeader class="flex flex-col justify-center items-center">
        <Badge variant="outline" class="bg-neutral-800 text-white border-neutral-700">Acme.co</Badge>
      <CardTitle class="text-2xl mt-4">Welcome back</CardTitle>
      <CardDescription class="text-neutral-400">Sign in to your account to continue</CardDescription>
    </CardHeader>

<CardContent class="space-y-6">
  <div class="flex flex-col gap-3 px-3">
    <button class="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
      <svg class="w-5 h-5" viewBox="0 0 533.5 544.3" fill="currentColor">
        <path d="M533.5 278.4c0-17.7-1.5-35-4.3-51.7H272v97.9h146.9c-6.4 34.3-25.1 63.4-53.6 82.8v68.7h86.6c50.6-46.6 81.6-115.3 81.6-197.7z" fill="#4285f4"/>
        <path d="M272 544.3c72.9 0 134-24.2 178.7-65.7l-86.6-68.7c-24.1 16.2-55 25.7-92.1 25.7-70.8 0-130.8-47.8-152.4-111.8H30.9v70.3c44.7 88.1 136.5 149.5 241.1 149.5z" fill="#34a853"/>
        <path d="M119.6 323.8c-9.6-28.5-9.6-59.1 0-87.6V165.9H30.9c-38.3 75.4-38.3 163.1 0 238.5l88.7-70.6z" fill="#fbbc04"/>
        <path d="M272 107.7c39.6-.6 77.7 13.7 106.8 39.5l80.1-80.1C412.4 24.2 351.3 0 272 0 167.4 0 75.6 61.4 30.9 149.5l88.7 70.3C141.2 155.4 201.2 107.7 272 107.7z" fill="#ea4335"/>
      </svg>
      Continue with Google
    </button>
    <button class="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 text-white font-medium border border-neutral-600 rounded-md hover:bg-neutral-700 transition">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.27c-3.338.724-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.333-5.466-5.933 0-1.312.47-2.384 1.236-3.222-.124-.303-.536-1.527.118-3.183 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.004-.404c1.02.005 2.05.137 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.656.244 2.88.12 3.183.77.838 1.234 1.91 1.234 3.222 0 4.61-2.806 5.625-5.478 5.922.43.37.814 1.096.814 2.21v3.277c0 .32.218.694.826.576C20.565 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/>
      </svg>
      Continue with GitHub
    </button>
  </div>

  <Divider class="my-4" />

  <div class="space-y-2">
    <label for="email" class="block text-sm text-neutral-300">Email</label>
    <Input
      placeholder="you@example.com"
      class="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
  <div class="space-y-2">
    <label for="password" class="block text-sm text-neutral-300">Password</label>
    <Input
      placeholder="••••••••"
      class="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
</CardContent>

    <CardFooter class="flex flex-col gap-3">
      <Button class="w-full text-neutral-300 hover:border-indigo-600 hover:bg-indigo-600/50 bg-indigo-500/50 border border-indigo-500 transition-all duration-300" >Sign In</Button>
      <p class="text-sm text-center text-neutral-500">
        Don’t have an account? <a href="#" class="text-indigo-400 hover:underline">Sign up</a>
      </p>
    </CardFooter>
  </Card>`
  },
  {
    id: 'auth-1-signup',
    title: 'Auth 1 - Sign Up',
    lang: 'astro',
    component: Auth1SignUp,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

<Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
  <CardHeader class="flex flex-col justify-center items-center">
    <Badge variant="outline" class="bg-neutral-800 text-white border-neutral-700">Acme.co</Badge>
    <CardTitle class="text-2xl mt-4">Create an account</CardTitle>
    <CardDescription class="text-neutral-400">Sign up to get started</CardDescription>
  </CardHeader>

  <CardContent class="space-y-6">
    <div class="flex flex-col gap-3 px-3">
      <button class="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
        <svg class="w-5 h-5" viewBox="0 0 533.5 544.3" fill="currentColor">
          <path d="M533.5 278.4c0-17.7-1.5-35-4.3-51.7H272v97.9h146.9c-6.4 34.3-25.1 63.4-53.6 82.8v68.7h86.6c50.6-46.6 81.6-115.3 81.6-197.7z" fill="#4285f4"/>
          <path d="M272 544.3c72.9 0 134-24.2 178.7-65.7l-86.6-68.7c-24.1 16.2-55 25.7-92.1 25.7-70.8 0-130.8-47.8-152.4-111.8H30.9v70.3c44.7 88.1 136.5 149.5 241.1 149.5z" fill="#34a853"/>
          <path d="M119.6 323.8c-9.6-28.5-9.6-59.1 0-87.6V165.9H30.9c-38.3 75.4-38.3 163.1 0 238.5l88.7-70.6z" fill="#fbbc04"/>
          <path d="M272 107.7c39.6-.6 77.7 13.7 106.8 39.5l80.1-80.1C412.4 24.2 351.3 0 272 0 167.4 0 75.6 61.4 30.9 149.5l88.7 70.3C141.2 155.4 201.2 107.7 272 107.7z" fill="#ea4335"/>
        </svg>
        Continue with Google
      </button>
      <button class="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 text-white font-medium border border-neutral-600 rounded-md hover:bg-neutral-700 transition">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.27c-3.338.724-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.333-5.466-5.933 0-1.312.47-2.384 1.236-3.222-.124-.303-.536-1.527.118-3.183 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.004-.404c1.02.005 2.05.137 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.656.244 2.88.12 3.183.77.838 1.234 1.91 1.234 3.222 0 4.61-2.806 5.625-5.478 5.922.43.37.814 1.096.814 2.21v3.277c0 .32.218.694.826.576C20.565 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/>
        </svg>
        Continue with GitHub
      </button>
    </div>

    <Divider class="my-4" />

    <div class="space-y-2">
      <label for="email" class="block text-sm text-neutral-300">Email</label>
      <Input
        placeholder="you@example.com"
        class="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div class="space-y-2">
      <label for="password" class="block text-sm text-neutral-300">Password</label>
      <Input
        placeholder="••••••••"
        class="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div class="space-y-2">
      <label for="confirm-password" class="block text-sm text-neutral-300">Confirm Password</label>
      <Input
        placeholder="••••••••"
        class="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </CardContent>

  <CardFooter class="flex flex-col gap-3">
    <Button class="w-full text-neutral-300 hover:border-indigo-600 hover:bg-indigo-600/50 bg-indigo-500/50 border border-indigo-500 transition-all duration-300">
      Sign Up
    </Button>
    <p class="text-sm text-center text-neutral-500">
      Already have an account? <a href="#" class="text-indigo-400 hover:underline">Sign in</a>
    </p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'billed-card-1',
    title: 'Billed 1 - Card',
    lang: 'astro',
    component: Billed1Card,
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

<Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
  <CardHeader class="relative flex flex-col items-center gap-2">
<Badge
  variant="outline"
  class="absolute -top-2 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-md shadow-pink-500/30"
>
  Popular
</Badge>
    <CardTitle class="text-3xl font-bold">Pro Plan</CardTitle>
    <CardDescription class="text-neutral-400 text-center">Everything you need to grow your project.</CardDescription>
  </CardHeader>

  <CardContent class="space-y-6">
    <div class="text-center">
      <p class="text-4xl font-bold">$10<span class="text-base">/month</span></p>
      <p class="text-sm text-neutral-500 mt-1">Billed monthly</p>
    </div>

    <Divider class="my-4" />
    <div class="flex justify-center">
        <div class="flex flex-col">
            <Badge variant="outline" class="w-fit mx-auto mb-2 bg-neutral-800 text-white border-neutral-700">Pro</Badge>
            <ul class="space-y-3 text-[11px] lg:text-xs text-neutral-300 px-4">
              <li>✓ Unlimited Projects</li>
              <li>✓ Priority Support</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ 100GB Storage</li>
            </ul>
        </div>
        <div class="flex flex-col">
            <Badge variant="outline" class="w-fit mx-auto mb-2 bg-neutral-800 text-white border-neutral-700">Free</Badge>
            <ul class="space-y-3 text-[11px] lg:text-xs text-neutral-300 px-4">
                <li>✕ Unlimited Projects</li>
                <li>✕ Priority Support</li>
                <li>✕ Advanced Analytics</li>
                <li>✕ 50GB Storage</li>
            </ul>
        </div>
    </div>
  </CardContent>

  <CardFooter class="flex flex-col gap-3">
    <Button class="w-full text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
      Get Started
    </Button>
    <p class="text-sm text-center text-neutral-500">
      Need more? <a href="#" class="text-indigo-400 hover:underline">Contact Sales</a>
    </p>
  </CardFooter>
</Card>
`
  },
  {
    id: 'profile-card-1',
    title: 'Profile 1',
    lang: 'astro',
    component: Profile1,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { ProgressContainer, Progress } from "@/components/ui/progress";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
---

<Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
    <CardHeader class="relative flex flex-col items-center gap-2">
        <Badge
            variant="outline"
            class="absolute -top-2 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-md shadow-pink-500/30"
        >
            Pro Member
        </Badge>
        <Avatar class="w-24 h-24 border-4 border-indigo-500/30">
            <AvatarImage src="https://i.pravatar.cc/300" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <CardTitle class="text-2xl font-bold mt-2">John Doe</CardTitle>
        <CardDescription class="text-neutral-400 text-center">Senior Developer</CardDescription>
        <div class="flex gap-2 mt-1">
            <Badge variant="outline" class="bg-neutral-800 text-white border-neutral-700">React</Badge>
            <Badge variant="outline" class="bg-neutral-800 text-white border-neutral-700">TypeScript</Badge>
            <Badge variant="outline" class="bg-neutral-800 text-white border-neutral-700">Astro</Badge>
        </div>
    </CardHeader>

    <CardContent class="space-y-6">
        <div class="flex justify-between text-sm text-neutral-400">
            <div class="text-center">
                <p class="text-xl font-bold text-white">234</p>
                <p>Projects</p>
            </div>
            <div class="text-center">
                <p class="text-xl font-bold text-white">12.4k</p>
                <p>Followers</p>
            </div>
            <div class="text-center">
                <p class="text-xl font-bold text-white">8.5k</p>
                <p>Following</p>
            </div>
        </div>

        <Divider class="my-4" />

        <div class="space-y-4">
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Task Completation</span>
                    <span class="text-neutral-300">75%</span>
                </div>
                <ProgressContainer>
                    <Progress value={75} class="bg-indigo-500/50" />
                </ProgressContainer>
            </div>

            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Project Completion</span>
                    <span class="text-neutral-300">92%</span>
                </div>
                <ProgressContainer>
                    <Progress value={92} class="bg-purple-500/50" />
                </ProgressContainer>
            </div>
        </div>
    </CardContent>

    <CardFooter class="flex flex-col gap-3">
        <Button class="w-full text-neutral-300 bg-indigo-500/50 hover:bg-indigo-600/50 border border-indigo-500 hover:border-indigo-600 transition-all duration-300">
            Edit Profile
        </Button>
        <p class="text-sm text-center text-neutral-500">
            Member since <span class="text-indigo-400">March 2023</span>
        </p>
    </CardFooter>
</Card>
`
  },
  {
    id: 'profile-card-2',
    title: 'Profile 2',
    lang: 'astro',
    component: Profile2,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { ProgressContainer, Progress } from "@/components/ui/progress";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
---

<Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
    <CardHeader>
        <div class="flex justify-between items-center">
            <div class="space-y-1">
                <CardTitle class="text-xl font-bold">John Doe</CardTitle>
                <CardDescription class="text-neutral-400">john.doe@example.com</CardDescription>
            </div>
            <Avatar class="w-16 h-16">
                <AvatarImage src="https://i.pravatar.cc/300" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    </CardHeader>

    <CardContent class="space-y-6">
        <div class="space-y-4">
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Storage Used</span>
                    <span class="text-neutral-300">45.5GB / 100GB</span>
                </div>
                <ProgressContainer>
                    <Progress value={45.5} class="bg-indigo-500/50" />
                </ProgressContainer>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-neutral-800/50 p-4 rounded-lg">
                    <p class="text-sm text-neutral-400">Total Projects</p>
                    <p class="text-2xl font-bold text-white">24</p>
                </div>
                <div class="bg-neutral-800/50 p-4 rounded-lg">
                    <p class="text-sm text-neutral-400">Active Tasks</p>
                    <p class="text-2xl font-bold text-white">12</p>
                </div>
            </div>
        </div>

        <Divider />

        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Plan Details</h3>
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Plan</span>
                    <span class="text-emerald-400">Pro</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Billing Cycle</span>
                    <span class="text-neutral-300">Monthly</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-neutral-400">Next Payment</span>
                    <span class="text-neutral-300">Oct 1, 2023</span>
                </div>
            </div>
        </div>

        <div class="space-y-2 bg-neutral-800/30 p-4 rounded-lg">
            <div class="flex items-center justify-between">
                <span class="text-sm text-neutral-400">API Usage</span>
                <Badge variant="outline" class="bg-indigo-500/20 text-gray-300 border-indigo-500/30">
                    70%
                </Badge>
            </div>
            <ProgressContainer>
                <Progress value={70} class="bg-indigo-500/50" />
            </ProgressContainer>
        </div>
    </CardContent>

    <CardFooter class="flex gap-3">
        <Button class="flex-1 bg-neutral-800 border-gray-600 hover:bg-neutral-70 hover:border-gray-700 text-white transition-all duration-300">
            Manage Plan
        </Button>
        <Button class="flex-1 bg-indigo-500/50 border-indigo-500 hover:bg-indigo-600/50 hover:border-indigo-600 text-white transition-all duration-300">
            View Dashboard
        </Button>
    </CardFooter>
</Card>
`
  },
  {
    id: 'product-card-1',
    title: 'Product 1',
    lang: 'astro',
    component: Product1,
    code: `---
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
---

<Card class="w-full max-w-md border-neutral-800 bg-neutral-900 text-white shadow-xl rounded-2xl">
    <CardHeader>
        <div class="relative h-64 overflow-hidden rounded-xl">
            <img
                src="/examples/product-1.png"
                alt="Luxury Leather Bag"
                class="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <Badge class="absolute top-4 right-4 bg-indigo-500/90">New Arrival</Badge>
        </div>
    </CardHeader>

    <CardContent class="space-y-4">
        <div class="flex justify-between items-start">
            <div class="space-y-1">
                <h2 class="text-xl font-bold">Premium Leather Bag</h2>
                <p class="text-neutral-400 text-sm">Handcrafted Italian Leather</p>
            </div>
            <div class="text-right">
                <p class="text-2xl font-bold text-white">$299.99</p>
                <p class="text-sm text-emerald-400">In Stock</p>
            </div>
        </div>

        <div class="space-y-3">
            <div class="flex gap-2">
                <Badge variant="outline" class="bg-neutral-800/50 text-neutral-300 border-neutral-700">
                    Genuine Leather
                </Badge>
                <Badge variant="outline" class="bg-neutral-800/50 text-neutral-300 border-neutral-700">
                    Water Resistant
                </Badge>
            </div>

            <p class="text-neutral-400 text-sm leading-relaxed">
                Luxurious handcrafted leather bag with premium metal fixtures. Perfect for both casual and formal occasions.
            </p>

            <div class="flex gap-3 pt-2">
                <div class="w-6 h-6 rounded-full bg-neutral-700 ring-2 ring-neutral-600 cursor-pointer"></div>
                <div class="w-6 h-6 rounded-full bg-amber-900 ring-2 ring-amber-800 cursor-pointer"></div>
                <div class="w-6 h-6 rounded-full bg-slate-900 ring-2 ring-slate-800 cursor-pointer"></div>
            </div>
        </div>
    </CardContent>

    <CardFooter class="flex gap-3">
        <Button class="flex-1 bg-neutral-800 border-gray-600 hover:bg-neutral-700 hover:border-gray-700 text-white transition-all duration-300">
            Add to Cart
        </Button>
        <Button class="flex-1 bg-indigo-500/50 border-indigo-500 hover:bg-indigo-600/50 hover:border-indigo-600 text-white transition-all duration-300">
            Buy Now
        </Button>
    </CardFooter>
</Card>
`
  },
];
