'use client'

import { Description } from '@/components/smooth-scroll/Description'
import { Intro } from '@/components/smooth-scroll/Intro'
import { Projects } from '@/components/smooth-scroll/Projects'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
