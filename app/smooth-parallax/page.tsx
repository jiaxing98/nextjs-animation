'use client'

import Column from '@/components/smooth-parallax/Column'
import { useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default function Page() {
  const gallery = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2])
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.3]
  )
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.25]
  )
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.1]
  )

  return (
    <main className="my-[25vh]">
      <div
        ref={gallery}
        className="flex relative h-[200vh] -top-[12.5vh] p-[2vw] gap-[2vw] bg-[#2d2d2d] overflow-hidden"
      >
        <Column images={['poster1.jpg', 'poster2.jpg', 'poster3.jpg']} y={y} />
        <Column images={['poster4.jpg', 'poster5.jpg', 'poster6.jpg']} y={y2} />
        <Column images={['poster7.jpg', 'poster8.jpg', 'poster9.jpg']} y={y3} />
        <Column
          images={['poster10.jpg', 'poster11.jpg', 'poster12.jpg']}
          y={y4}
        />
      </div>
    </main>
  )
}
