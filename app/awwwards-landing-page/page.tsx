'use client'

import Contact from '@/components/awwwards-landing-page/Contact/Contact'
import Description from '@/components/awwwards-landing-page/Description/Description'
import Landing from '@/components/awwwards-landing-page/Landing/Landing'
import Preloader from '@/components/awwwards-landing-page/Preloader/Preloader'
import Projects from '@/components/awwwards-landing-page/Projects/Projects'
import SlidingImages from '@/components/awwwards-landing-page/SlidingImages/SlidingImages'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()

      setTimeout(() => {
        setIsLoading(false)
        console.log(isLoading)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
