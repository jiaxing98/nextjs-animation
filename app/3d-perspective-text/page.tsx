'use client'

import { useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const plane = useRef<HTMLDivElement>(null)
  const maxRotate = 45

  const manageMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1

    plane.current!.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
    >
      <div ref={plane} className={styles.body}>
        <Text3d primary={'Turning'} secondary={'Turning'} />
        <Text3d primary={'Space'} secondary={'Space'} />
        <Text3d primary={'Into'} secondary={'Into'} />
        <Text3d primary={'Shapes'} secondary={'Shapes'} />
      </div>
    </div>
  )
}

function Text3d({
  primary,
  secondary,
}: {
  primary: string
  secondary: string
}) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  )
}
