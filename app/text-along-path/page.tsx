'use client'

import Footer from '@/components/text-along-path/Footer'
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
      <div className="h-[100vh]">
        <Footer />
      </div>
    </main>
  )
}
