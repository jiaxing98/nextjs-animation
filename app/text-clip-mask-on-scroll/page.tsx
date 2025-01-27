'use client'

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Page() {
  const container = useRef<HTMLDivElement>(null)
  const stickyMask = useRef<HTMLDivElement>(null)

  const initialMaskSize = 0.8
  const targetMaskSize = 30
  const easing = 0.15
  let easedScrollProgress = 0

  const animate = () => {
    const scrollProgress = getScrollProgress()
    if (stickyMask.current == null || scrollProgress == null) return

    const maskSizeProgress = targetMaskSize * scrollProgress
    stickyMask.current.style.maskSize =
      (initialMaskSize + maskSizeProgress) * 100 + '%'

    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    if (stickyMask.current == null || container.current == null) return

    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight)

    const delta = scrollProgress - easedScrollProgress
    easedScrollProgress += delta * easing
    return easedScrollProgress
  }

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [])

  return (
    <main className="mb-[100vh] bg-slate-300">
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source
              src="/media/text-clip-mask-on-scroll/nature.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </main>
  )
}
