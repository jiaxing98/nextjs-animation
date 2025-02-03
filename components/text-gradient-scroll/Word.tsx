import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import styles from './style.module.css'

export default function Word({ paragraph }: { paragraph: string }) {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = paragraph.split(' ')

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

        return (
          <span key={i} className={styles.word}>
            <span className={styles.shadow}>{word}</span>
            <motion.span style={{ opacity: opacity }}>{word}</motion.span>
          </span>
        )
      })}
    </p>
  )
}
