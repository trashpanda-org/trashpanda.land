"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex flex-col md:flex-row min-h-screen">
        {/* Left side - Image (only visible on md and up) */}
        <div className="hidden md:block md:w-1/2 min-h-screen relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent z-10 opacity-60"></div>
          <Image
            src="/images/raccoon-full.png"
            alt="TrashPanda"
            fill
            className={`object-cover object-right transition-transform duration-10000 ease-in-out ${mounted ? "scale-105" : "scale-100"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Mobile image (only visible below md) */}
        <div className="relative w-full h-48 md:hidden overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent z-10 opacity-60"></div>
          <Image
            src="/images/raccoon-full.png"
            alt="TrashPanda"
            fill
            className={`object-cover object-right transition-transform duration-10000 ease-in-out ${mounted ? "scale-105" : "scale-100"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center p-8 pt-12 md:p-16 relative">
          <div className="absolute top-8 right-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 to-red-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <Image
                src="/images/raccoon-logo.png"
                alt="TrashPanda Logo"
                width={40}
                height={40}
                className="rounded-full relative transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tighter mb-6 ${mounted ? "animate-in fade-in slide-in-from-left-4 duration-1000" : "opacity-0"}`}
            >
              <span className="text-red-800">trash</span>
              <span className="text-white">panda</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-400 mb-12 ${mounted ? "animate-in fade-in slide-in-from-left-4 duration-1000 delay-300" : "opacity-0"}`}
            >
              committing crimes against large language models since 2025
            </p>
          </div>

          <div
            className={`flex flex-col space-y-4 ${mounted ? "animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500" : "opacity-0"}`}
          >
            <Link
              href="https://huggingface.co/trashpanda-org"
              target="_blank"
              className="group inline-flex items-center text-xl text-red-700 hover:text-red-500 transition-colors w-fit"
            >
              <span className="mr-2">Huggingface</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/trashpanda-org"
              target="_blank"
              className="group inline-flex items-center text-xl text-red-700 hover:text-red-500 transition-colors w-fit"
            >
              <span className="mr-2">GitHub</span>
              <Github className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://models.trashpanda.land"
              target="_blank"
              className="group inline-flex items-center text-xl text-red-700 hover:text-red-500 transition-colors w-fit"
            >
              <span className="mr-2">Active Model Hosts</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://sucker.trashpanda.land"
              target="_blank"
              className="group inline-flex items-center text-xl text-red-700 hover:text-red-500 transition-colors w-fit"
            >
              <span className="mr-2">Sucker</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* <div className="text-xl text-gray-500">
              Blog <span className="text-gray-700">— Coming Soon</span>
            </div> */}
          </div>

          {/* Team Members */}
          <div
            className={`mt-12 pt-6 border-t border-gray-900 ${mounted ? "animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700" : "opacity-0"}`}
          >
            <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-4">USUAL SUSPECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1 group">
                <div className="flex items-center">
                  <Link
                    href="https://severian.dev"
                    target="_blank"
                    className="text-lg font-medium hover:text-red-700 transition-colors"
                  >
                    Severian
                  </Link>
                  <Link
                    href="https://huggingface.co/finis-est"
                    target="_blank"
                    className="ml-2 text-gray-400 hover:text-red-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 transform group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                <div className="text-xs text-gray-500">@lyseverian</div>
              </div>
              <div className="space-y-1 group">
                <div className="flex items-center">
                  <span className="text-lg font-medium">Hasnonname</span>
                  <Link
                    href="https://huggingface.co/Hasnonname"
                    target="_blank"
                    className="ml-2 text-gray-400 hover:text-red-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 transform group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                <div className="text-xs text-gray-500">@hasnonname</div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 pb-4 text-sm text-gray-600">© {new Date().getFullYear()} trashpanda-org</div>
        </div>
      </main>
    </div>
  )
}

