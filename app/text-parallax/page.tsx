'use client'

import Slide from '@/components/text-parallax/Slide'
import { useScroll } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default function Page() {
  const container = useRef<HTMLDivElement | null>(null)

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
    offset: ['start end', 'end start'],
  })

  return (
    <main className="my-[50vh] overflow-hidden">
      <div ref={container}>
        <Slide
          key="slide_1"
          src={'/images/text-parallax/1.jpg'}
          direction={'left'}
          left={'-40%'}
          progress={scrollYProgress}
        />
        <Slide
          key="slide_2"
          src={'/images/text-parallax/2.jpg'}
          direction={'right'}
          left={'-25%'}
          progress={scrollYProgress}
        />
        <Slide
          key="slide_3"
          src={'/images/text-parallax/3.jpg'}
          direction={'left'}
          left={'-75%'}
          progress={scrollYProgress}
        />
      </div>
    </main>
  )
}
