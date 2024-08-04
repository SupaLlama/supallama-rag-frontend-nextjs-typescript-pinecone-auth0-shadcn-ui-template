/**
 * v0 by Vercel.
 * @see https://v0.dev/t/72TYP8TcsJk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { login } from "@/app/actions"


export default function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdf2e9] text-[#333]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <DogIcon className="h-8 w-8 text-[#e67e22]" />
          <h1 className="text-xl font-bold">Goldie, the AI Pup</h1>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/puppy-photo-cropped.jpg"
            width={600}
            height={600}
            alt="Golden Retriever Puppy"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Meet Goldie, your friendly AI assistant</h1>
            <p className="text-muted-foreground text-lg mt-2">
              Goldie is a golden retriever themed AI chatbot that&apos;s here to help you with all your questions and tasks.
            </p>
          </div>
          <Card className="p-6 bg-white rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle>Sign in to Goldie</CardTitle>
            </CardHeader>
            <form action={login}>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input name="password" id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Link href="#" className="text-sm text-[#ffc107] hover:underline" prefetch={false}>
                  Forgot password?
                </Link>
                <Button
                  type="submit"
                  className="rounded-md border border-transparent bg-[#ffc107] py-2 px-4 text-sm font-medium text-[#333] hover:bg-[#ffdb4d] focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:ring-offset-2"
                >
                Sign in
                </Button>
              </CardFooter>
            </form>
          </Card>
          <div className="text-center">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#ffc107] hover:underline" prefetch={false}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-[#FFCB9A] py-4 px-6 text-center text-sm text-muted-foreground">
        &copy; 2024 Goldie the AI Pup. All rights reserved.
      </footer>
    </div>
  )
}

function DogIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffc107"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}