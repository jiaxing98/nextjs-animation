'use client'

import Description from '@/components/bg-image-parallax/Description'
import Intro from '@/components/bg-image-parallax/Intro'
import Section from '@/components/bg-image-parallax/Section'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <div className="flex h-screen justify-center items-center">
        <p className="font-black text-9xl">Content</p>
      </div>
    </main>
  )
}
