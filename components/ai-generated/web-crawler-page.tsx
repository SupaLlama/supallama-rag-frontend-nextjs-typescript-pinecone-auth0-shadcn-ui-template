/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UTZcgODzZzd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'

import { useEffect, useRef } from "react"
import { useFormState } from "react-dom"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

import { signOut } from "@/app/actions"
import { invokeCrawl } from "@/app/crawl/actions"
import CrawlWebsiteButton from "@/app/crawl/crawlWebsiteButton"
import toast from "react-hot-toast"

const initialCrawlState = {
  message: '',
  success: false,
  taskId: undefined,
}

export default function WebCrawlerPageComponent() {
  const [crawlFormState, crawlFormAction] = useFormState(invokeCrawl, initialCrawlState)

  const formRef = useRef<HTMLFormElement>(null)

  if (formRef?.current && crawlFormState?.success) {
    toast.success("Successfully kicked off the web crawler in the background!")
  } else if (crawlFormState?.message) {
    toast.error(crawlFormState.message)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F0] text-[#333]">
      <header className="bg-[#FFD9B3] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/puppy-profile-photo-cropped.jpg"
            width={32}
            height={32}
            className="rounded-full"
            alt="Golden Retriever"
          />
          <h1 className="text-xl font-bold">Goldie, the AI Pup</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/chat" className="text-sm font-medium hover:underline" prefetch={false}>
            Chat with Goldie
          </Link>
          <form action={signOut}>
            <Button variant="ghost" type="submit" size="icon" className="text-[#333] hover:bg-[#FFBF82] focus:ring-[#FFCB9A]">
              <LogOutIcon className="h-5 w-5" />
              <span className="sr-only">Sign Out</span>
            </Button>
          </form>
        </div>
      </header>
      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Website Crawler</h2>
            <p className="text-muted-foreground mb-6">Enter a website URL and click on the Crawl Website button. Goldie will then crawl and index the website&apos;s contents so that you&apos;ll be able to ask Goldie questions about it via the chat.</p>
            <form ref={formRef} action={crawlFormAction} className="flex items-center gap-4 mb-8">
              <Input
                name="url"
                type="url"
                placeholder="Enter website URL"
                className="flex-1 bg-[#FFF8F0] border-[#FFCB9A] focus:ring-0"
              />
              <CrawlWebsiteButton />
            </form>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>URL</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Error</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>https://example.com</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Success</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>https://broken-website.com</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Error</Badge>
                    </TableCell>
                    <TableCell>Connection refused</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>https://another-example.com</TableCell>
                    <TableCell>
                      <Badge variant="default">Success</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
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