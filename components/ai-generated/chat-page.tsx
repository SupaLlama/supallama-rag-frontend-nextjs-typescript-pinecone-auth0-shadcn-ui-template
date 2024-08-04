/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bA46Bwcv4p2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'

import { useFormState } from "react-dom"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

import { signOut } from "@/app/actions"
import { invokeQuery } from "@/app/chat/actions"


const initialState = null


export default function ChatPageComponent() {
  const [state, formAction] = useFormState(invokeQuery, initialState)

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F0]">
      <header className="flex items-center justify-between px-6 py-4 bg-[#FFD9B3] shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/puppy-profile-photo-cropped.jpg" alt="Golden Retriever" width={32} height={32} className="rounded-full" />
          <h1 className="text-xl font-bold">Goldie, the AI Pup</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/crawl" className="text-sm font-medium hover:underline" prefetch={false}>
            Crawl Websites
          </Link>
          <form action={signOut}>
            <Button type="submit" variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFBF82] focus:ring-[#FFCB9A]">
              <LogOutIcon className="h-5 w-5" />
              <span className="sr-only">Sign Out</span>
            </Button>
          </form>
        </div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b">
            <h2 className="text-2xl font-bold text-[#8C6239]">How can I help you today?</h2>
          </div>
          <div className="px-6 py-4 space-y-4 overflow-auto max-h-[500px]">
            <div className="flex items-start gap-3">
              <Avatar className="shrink-0">
                <AvatarImage src="/puppy-profile-photo-cropped.jpg" />
                <AvatarFallback>GR</AvatarFallback>
              </Avatar>
              <div className="flex-1 p-3 rounded-lg bg-[#FFF8F0]">
                <p className="text-[#8C6239]">
                  {state ? state : 'Hi there! I\'m Goldie, your friendly AI assistant. How can I help you today?'}
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t">
            <form action={formAction} className="flex items-center">
              <Input
                name="message"
                id="message"
                required
                placeholder="Type your message..."
                className="flex-1 bg-[#FFF8F0] border-none focus:ring-0"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#FFE6CC] focus:bg-[#FFE6CC]"
              >
                <SendIcon className="w-5 h-5 text-[#8C6239]" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-[#FFCB9A] py-4 px-6 text-center text-sm text-muted-foreground">
        &copy; 2024 Goldie the AI Pup. All rights reserved.
      </footer>
    </div>
  )
}

function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function SendIcon(props: any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
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