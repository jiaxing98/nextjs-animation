'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import styles from '@/app/mouse-scale-image/style.module.css'
import { Project } from './data'

export default function Double({
  projects,
  reversed = false,
}: {
  projects: Project[]
  reversed?: boolean
}) {
  const firstImage = useRef<HTMLDivElement>(null)
  const secondImage = useRef<HTMLDivElement>(null)

  let requestAnimationFrameId: number | null = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const manageMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33
    firstImage.current!.style.width = `${firstImagePercent}%`
    secondImage.current!.style.width = `${secondImagePercent}%`

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId!)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      className="flex h-[45vw] mt-10vh"
      onMouseMove={(e) => manageMouseMove(e)}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/mouse-scale-image/${projects[0].src}`}
            alt="image"
            fill
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/mouse-scale-image/${projects[1].src}`}
            alt="image"
            fill
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>
    </div>
  )
}
