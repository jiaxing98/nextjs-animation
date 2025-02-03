'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Page() {
  const word = 'with framer-motion'
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
    offset: ['start end', 'end start'],
  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50])
  const md = useTransform(scrollYProgress, [0, 1], [0, -150])
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250])

  const images = [
    { src: '/images/parallax-scroll/1.jpg', y: 0 },
    { src: '/images/parallax-scroll/2.jpg', y: lg },
    { src: '/images/parallax-scroll/3.jpg', y: md },
  ]

  return (
    <main className="mt-[30vh] mb-[50vh]">
      <div ref={container} className={styles.container}>
        <div className={styles.body}>
          <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
          <h1>Scroll</h1>
          <div>
            <p className={styles.word}>
              {word.split('').map((char, i) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, Math.floor(Math.random() * -75) - 25]
                )

                return (
                  <motion.span key={`letter_${i}`} style={{ top: y }}>
                    {char}
                  </motion.span>
                )
              })}
            </p>
          </div>
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => {
            return (
              <motion.div
                key={`imgContainer_${i}`}
                style={{ y }}
                className={styles.imageContainer}
              >
                <Image src={src} alt={`img_${i}`} fill />
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
