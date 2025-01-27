'use client'

import { useState } from 'react'
import styles from './style.module.css'
import { motion } from 'framer-motion'

export default function Project({ title1, title2, src }: Project) {
  const [isActive, setIsActive] = useState(false)

  const anim = {
    initial: { width: 0 },
    open: {
      width: 'auto',
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    closed: { width: 0 },
  }

  return (
    <div
      className={styles.project}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <p>{title1}</p>
      <motion.div
        className={styles.imgContainer}
        variants={anim}
        animate={isActive ? 'open' : 'closed'}
      >
        <img src={`/images/image-slide-gallery/${src}`}></img>
      </motion.div>
      <p>{title2}</p>
    </div>
  )
}
