'use client'

import Footer1 from '@/components/sticky-footer/Footer1'
import Footer2 from '@/components/sticky-footer/Footer2'
import Intro from '@/components/sticky-footer/Intro'
import Lenis from 'lenis'
import { useEffect } from 'react'

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
      {/* <Footer1 /> */}
      <Footer2 />
    </main>
  )
}
