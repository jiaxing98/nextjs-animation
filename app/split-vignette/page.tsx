'use client'

import Description from '@/components/split-vignette/Description'
import Gallery from '@/components/split-vignette/Gallery'
import { useSpring } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect } from 'react'

const projects = [
  {
    name: 'Dyal Thak',
    handle: 'dyal_thak',
  },
  {
    name: 'Leidinger Matthias',
    handle: 'leidinger_matthias',
  },
  {
    name: 'Mark Rammers',
    handle: 'mark_rammers',
  },
  {
    name: 'Landon Speers',
    handle: 'landon_speers',
  },
]

export default function Page() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  const mouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerWidth / 2) * 0.25
    const targetY = clientY - (window.innerWidth / 2) * 0.3

    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)
  }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="main" onMouseMove={mouseMove}>
      {projects.map(({ handle }, i) => {
        return <Gallery key={i} handle={handle} mousePosition={mousePosition} />
      })}
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  )
}
