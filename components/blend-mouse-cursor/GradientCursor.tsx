'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const colors = ['#c32d27', '#f5c63f', '#457ec4', '#356fdb']

export default function GradientCursor({ isActive }: { isActive: boolean }) {
  const mouse = useRef({ x: 0, y: 0 })
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef(0)

  const circles = useRef<HTMLElement[]>([])
  const size = isActive ? 400 : 30
  const delay = isActive ? 0.015 : 0.005

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    mouse.current = { x: clientX, y: clientY }
  }

  const moveCircle = (x: number, y: number) => {
    if (circles.current.length < 1) return
    circles.current.forEach((circle, i) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 })
    })
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
    <div className="relative h-screen -z-50">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(ref) => {
            circles.current[i] = ref!
          }}
          style={{
            backgroundColor: colors[i],
            width: size,
            height: size,
            filter: clsx({
              'blur(20px)': isActive,
              'blur(2px)': !isActive,
            }),
            transition: `transform ${
              (4 - i) * delay
            }s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
          }}
          className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
        />
      ))}
    </div>
  )
}
