'use client'

import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Page() {
  const path = useRef<SVGPathElement>(null)
  let progress = 0
  let reqId: number | null = null
  let time = Math.PI / 2
  let x = 0.5

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const setPath = (value: number) => {
    const width = window.innerWidth * 0.7
    path.current?.setAttributeNS(
      null,
      'd',
      `M 0 250 Q ${width * x} ${250 + value} ${width} 250`
    )
  }

  const animateIn = () => {
    //if the animationOut is running, cancel it and reset time
    if (reqId) {
      cancelAnimationFrame(reqId)
      time = Math.PI / 2
    }

    setPath(progress)
    reqId = requestAnimationFrame(animateIn)
  }

  const animateOut = () => {
    // Calculate newProgress using sine of time
    let newProgress = progress * Math.sin(time)

    // Update progress using linear interpolation towards zero
    progress = lerp(progress, 0, 0.025)

    // Increment time by 0.2
    time += 0.2

    // Set the path using newProgress
    setPath(newProgress)

    // If progress is greater than a threshold, request another animation frame,
    // otherwise reset the animation
    Math.abs(progress) > 0.5
      ? (reqId = requestAnimationFrame(animateOut))
      : resetAnimation()
  }

  const resetAnimation = () => {
    time = Math.PI / 2
    progress = 0
  }

  const manageMouseEnter = () => {
    // If there is an animation frame request, cancel it and reset the animation
    if (reqId) {
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementY } = e
    const box = (e.target as HTMLElement).getBoundingClientRect()
    x = (e.clientX - box.left) / box.width
    progress += movementY
  }

  const manageMouseLeave = () => {
    animateOut()
  }

  useEffect(() => {
    const updatePath = () => setPath(progress)
    setPath(progress)

    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.line}>
          <div
            className={styles.box}
            onMouseEnter={() => manageMouseEnter}
            onMouseMove={(e) => manageMouseMove(e)}
            onMouseLeave={() => manageMouseLeave()}
          />
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
        <div className={styles.description}>
          <p>Smart Development</p>
          <p>
            Combining unique design and rich technology, we build digital
            products exactly as they were designed, without shortcuts or
            simplifications.
          </p>
        </div>
        <div className={styles.tagsContainer}>
          <p>Areas</p>
          <div className={styles.tags}>
            <p>E-commerce</p>
            <p>Finance</p>
            <p>Education</p>
            <p>Social</p>
            <p>Entertainment</p>
            <p>Medicine</p>
          </div>
        </div>
      </div>
    </div>
  )
}
