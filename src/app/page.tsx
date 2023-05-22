import { User } from 'lucide-react'
import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="border-wh absolute bottom-0 right-2  top-0 w-2 bg-stripes" />

        {/* Sign in */}
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[160px] text-sm leading-snug">
            <span className="underline">Create your account</span> and save your
            memories!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5 ">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect memorable moments from your journey and share (if you
              like) with the world!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            REGISTER MEMORIES
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Made with 💜 in{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://www.linkedin.com/in/weslley-oliveira-5a3443238/"
          >
            Weslley Oliveira
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[300px] text-center leading-relaxed">
            You havent registered any memories yet, start{' '}
            <a href="" className="underline hover:text-gray-50">
              creating now
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
