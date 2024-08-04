/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iTw7ACZBVsV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"

export default function ErrorPageComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#f8f4ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image
          src="/puppy-photo-cropped.jpg"
          width={300}
          height={300}
          alt="Cute golden retriever puppy"
          className="mx-auto rounded-full"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#8c6239] sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-lg text-[#a78059]">
          Don&apos;t worry, this cute puppy is here to help! 
          <br />
          Sorry, it looks like we hit a snag :-/
          <br />
          We&apos;ll get it sorted out soon :-)
        </p>
      </div>
    </div>
  )
}