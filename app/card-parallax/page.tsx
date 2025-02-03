'use client'

import Card from '@/components/card-parallax/Card'
import Hint from '@/components/card-parallax/Hint'
import { projects } from '@/types/card-parallax'
import { useScroll } from 'framer-motion'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'

export default function Page() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container}>
      <Hint />
      {projects.map((e, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05

        return (
          <Card
            key={`p_${i}`}
            index={i}
            progress={scrollYProgress}
            targetScale={targetScale}
            range={[i * 0.25, 1]}
            project={e}
          />
        )
      })}
    </main>
  )
}
