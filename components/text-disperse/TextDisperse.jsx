'use client'

import styles from '@/app/text-disperse/style.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { disperse } from './animation'

export default function TextDisperse({ children }) {
  const [isAnimated, setIsAnimated] = useState(false)

  const manageMouseEnter = () => {
    setIsAnimated(true)
  }

  const manageMouseLeave = () => {
    setIsAnimated(false)
  }

  const getChars = (e) => {
    let chars = []

    const word = e.props.children
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          custom={i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <div
      className={styles.introLine}
      style={{ cursor: 'pointer' }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
    >
      {getChars(children)}
    </div>
  )
}
