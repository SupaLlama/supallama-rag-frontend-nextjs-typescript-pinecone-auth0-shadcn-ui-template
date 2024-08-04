/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZwGCly45T8V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { signup } from "@/app/signup/actions"
import Image from "next/image"
import Link from "next/link"

export default function SignupPageComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fef9ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src="/puppy-profile-photo-cropped.jpg"
            alt="Golden Retriever Puppy"
            width={200}
            height={200}
            className="mx-auto rounded-full"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#333]">
            Sign up for Goldie, the AI Chatbot
          </h2>
          <p className="mt-2 text-center text-sm text-[#666]">
            Get the best search results with a friendly golden retriever by your side.
          </p>
        </div>
        <form className="mt-8 space-y-6" action={signup}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-t-md border border-[#ccc] px-3 py-2 text-[#333] placeholder-[#999] focus:z-10 focus:border-[#ffc107] focus:outline-none focus:ring-[#ffc107]"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none border border-[#ccc] px-3 py-2 text-[#333] placeholder-[#999] focus:z-10 focus:border-[#ffc107] focus:outline-none focus:ring-[#ffc107]"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-[#ccc] px-3 py-2 text-[#333] placeholder-[#999] focus:z-10 focus:border-[#ffc107] focus:outline-none focus:ring-[#ffc107]"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ffc107] py-2 px-4 text-sm font-medium text-[#333] hover:bg-[#ffdb4d] focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <Link href="/" className="text-sm text-[#666] hover:text-[#333]" prefetch={false}>
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  )
}