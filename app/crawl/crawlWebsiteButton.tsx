'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'


export default function CrawlWebsiteButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="bg-[#FFCB9A] text-[#333] font-bold hover:bg-[#FFBF82] focus:ring-[#FFCB9A]">
      {pending ? 'Starting Crawl...' : 'Crawl Website'}
    </Button>
  )
}