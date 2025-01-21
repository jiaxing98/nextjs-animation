'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const color = '#BCE4F2'

export default function Cursor({ isActive }: { isActive: boolean }) {
  const mouse = useRef({ x: 0, y: 0 })
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef(0)
  const circle = useRef(null)
  const size = isActive ? 400 : 30

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
  }

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
  }

  const animate = () => {
    const { x, y } = delayedMouse.current
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    }

    moveCircle(delayedMouse.current.x, delayedMouse.current.y)
    rafId.current = window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    animate()
    window.addEventListener('mousemove', manageMouseMove)

    return () => {
      window.removeEventListener('mousemove', manageMouseMove)

      window.cancelAnimationFrame(rafId.current)
    }
  }, [isActive])

  return (
    <div className="relative h-screen">
      <div
        ref={circle}
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          filter: clsx({
            'blur(30px)': isActive,
            'blur(0px)': !isActive,
          }),
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
      />
    </div>
  )
}
