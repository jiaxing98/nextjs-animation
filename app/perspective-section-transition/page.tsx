'use client'

import Section1 from '@/components/perspective-section-transition/Section1'
import Section2 from '@/components/perspective-section-transition/Section2'
import { useScroll } from 'framer-motion'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'

export default function Page() {
  const container = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  )
}
