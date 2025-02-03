import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from './style.module.css'

export default function Character({ paragraph }: { paragraph: string }) {
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

        const amount = end - start
        const step = amount / word.length

        return (
          <span key={`word_${i}`} className={styles.word}>
            {word.split('').map((char, i) => {
              const charStart = start + i * step
              const charEnd = start + (i + 1) * step
              const opacity = useTransform(
                scrollYProgress,
                [charStart, charEnd],
                [0, 1]
              )

              return (
                <span key={`char_${i}`}>
                  <span className={styles.shadow}>{char}</span>
                  <motion.span style={{ opacity: opacity }}>{char}</motion.span>
                </span>
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
