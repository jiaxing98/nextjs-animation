import { motion, MotionValue } from 'framer-motion'
import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

export default function Column({
  images,
  y,
}: {
  images: string[]
  y: MotionValue<number>
}) {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/smooth-parallax/${src}`}
              alt={`image_${i}`}
              fill
            />
          </div>
        )
      })}
    </motion.div>
  )
}
