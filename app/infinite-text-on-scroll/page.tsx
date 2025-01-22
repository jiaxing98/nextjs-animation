'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Page() {
  const firstText = useRef(null)
  const secondText = useRef<HTMLParagraphElement>(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }

    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    })

    requestAnimationFrame(animate)
  }, [])

  return (
    <main className="flex relative h-screen mb-[100vh] overflow-hidden">
      <Image
        className="object-cover"
        src={`/images/infinite-text-on-scroll/background.jpg`}
        alt="background"
        fill
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </main>
  )
}
