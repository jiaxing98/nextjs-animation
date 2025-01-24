import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { mountAnim, rotateX } from '../animation'
import styles from './style.module.css'

interface Props {
  data: {
    title: string
    description: string
    images: string[]
  }
  index: number
}

export default function link({ data, index }: Props) {
  const { title, description, images } = data
  const outer = useRef(null)
  const inner = useRef(null)

  const manageMouseEnter = (e: React.MouseEvent) => {
    const bounds = (e.target as HTMLElement).getBoundingClientRect()
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: '-100%' })
      gsap.set(inner.current, { top: '100%' })
    } else {
      gsap.set(outer.current, { top: '100%' })
      gsap.set(inner.current, { top: '-100%' })
    }
    gsap.to(outer.current, { top: '0%', duration: 0.3 })
    gsap.to(inner.current, { top: '0%', duration: 0.3 })
  }

  const manageMouseLeave = (e: React.MouseEvent) => {
    const bounds = (e.target as HTMLElement).getBoundingClientRect()
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: '-100%', duration: 0.3 })
      gsap.to(inner.current, { top: '100%', duration: 0.3 })
    } else {
      gsap.to(outer.current, { top: '100%', duration: 0.3 })
      gsap.to(inner.current, { top: '-100%', duration: 0.3 })
    }
  }

  return (
    <motion.div
      onMouseEnter={(e) => {
        manageMouseEnter(e)
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e)
      }}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <Link href="/">{title}</Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/images/sliding-stairs-menu/${images[0]}`}
                    alt="image"
                    fill
                  />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/images/sliding-stairs-menu/${images[1]}`}
                    alt="image"
                    fill
                  />
                </div>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
