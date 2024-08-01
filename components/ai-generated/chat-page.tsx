/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bA46Bwcv4p2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"


export default function ChatPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F0]">
      <header className="flex items-center justify-between px-6 py-4 bg-[#FFD9B3] shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/puppy-profile-photo-cropped.jpg" alt="Golden Retriever" width={32} height={32} className="rounded-full" />
          <h1 className="text-xl font-bold">Goldie, the AI Pup</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#FFE6CC] focus:bg-[#FFE6CC]">
          <LogOutIcon className="w-5 h-5 text-[#8C6239]" />
          <span className="sr-only">Sign out</span>
        </Button>
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
                  Hi there! I&apos;m Goldie, your friendly AI assistant. How can I help you today?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 p-3 rounded-lg bg-[#FFD9B3]">
                <p className="text-[#8C6239]">
                  I&apos;m looking for information on how to care for a golden retriever puppy. Can you help me with that?
                </p>
              </div>
              <Avatar className="shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="shrink-0">
                <AvatarImage src="/puppy-profile-photo-cropped.jpg" />
                <AvatarFallback>GR</AvatarFallback>
              </Avatar>
              <div className="flex-1 p-3 rounded-lg bg-[#FFF8F0]">
                <p className="text-[#8C6239]">
                  Absolutely! As a golden retriever puppy, I&apos;d be happy to share some tips on caring for one. Here are a
                  few key things to keep in mind:
                </p>
                <ul className="mt-2 list-disc pl-5 text-[#8C6239]">
                  <li>Feed a high-quality puppy food and provide plenty of fresh water</li>
                  <li>Establish a consistent routine for feeding, potty breaks, and playtime</li>
                  <li>Socialize your puppy early and often to help them develop good manners</li>
                  <li>Provide plenty of chew toys and interactive puzzles to keep them mentally stimulated</li>
                  <li>Be patient and consistent with training, using positive reinforcement techniques</li>
                </ul>
                <p className="mt-2 text-[#8C6239]">
                  Let me know if you have any other questions! I&apos;m always happy to help.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 p-3 rounded-lg bg-[#FFD9B3]">
                <p className="text-[#8C6239]">
                  That&apos;s really helpful, thank you! I&apos;m also curious about the best ways to exercise a golden retriever
                  puppy. Do you have any tips on that?
                </p>
              </div>
              <Avatar className="shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="shrink-0">
                <AvatarImage src="/puppy-profile-photo-cropped.jpg" />
                <AvatarFallback>GR</AvatarFallback>
              </Avatar>
              <div className="flex-1 p-3 rounded-lg bg-[#FFF8F0]">
                <p className="text-[#8C6239]">
                  Great question! Golden retrievers are high-energy pups, so they need plenty of exercise to stay happy
                  and healthy. Here are some tips for exercising a golden retriever puppy:
                </p>
                <ul className="mt-2 list-disc pl-5 text-[#8C6239]">
                  <li>Take them on daily walks, gradually increasing the duration as they grow</li>
                  <li>Engage them in fetch, tug-of-war, and other interactive games to burn off energy</li>
                  <li>Introduce them to swimming, which is a great low-impact exercise for puppies</li>
                  <li>Provide plenty of opportunities for them to run and play in a secure, fenced-in area</li>
                  <li>
                    Consider enrolling them in puppy training classes to help them learn obedience and socialization
                    skills
                  </li>
                </ul>
                <p className="mt-2 text-[#8C6239]">
                  Remember to always supervise your puppy during exercise and adjust the intensity based on their age
                  and energy level. Let me know if you have any other questions!
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t">
            <form className="flex items-center">
              <Input
                id="message"
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