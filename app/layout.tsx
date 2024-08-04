import "@/app/globals.css"

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils"



const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Goldie AI",
  description: "Your friendly AI assistant!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
