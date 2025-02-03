'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Picture1 from '../../public/images/zoom-parallax/pic1.jpg'
import Picture2 from '../../public/images/zoom-parallax/pic2.jpg'
import Picture3 from '../../public/images/zoom-parallax/pic3.jpg'
import Picture4 from '../../public/images/zoom-parallax/pic4.jpg'
import Picture5 from '../../public/images/zoom-parallax/pic5.jpg'
import Picture6 from '../../public/images/zoom-parallax/pic6.jpg'
import Picture7 from '../../public/images/zoom-parallax/pic7.jpg'

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

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ]
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, i) => {
          return (
            <motion.div key={i} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                {/* src must be static import if placeholder='blur' is used */}
                <Image src={src} alt="image" placeholder="blur" fill />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
