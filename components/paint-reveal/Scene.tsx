'use client'

import React, { useEffect, useRef } from 'react'
import useWindow from './useWindow'

export default function Scene() {
  const { dimension } = useWindow()
  const canvas = useRef<HTMLCanvasElement | null>(null)

  const init = () => {
    const ctx = canvas.current?.getContext('2d')
    if (ctx == null) return

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, dimension.width, dimension.height)
    ctx.globalCompositeOperation = 'destination-out'
  }

  useEffect(() => {
    dimension.width > 0 && init()
  }, [dimension])

  const prevPosition = useRef<{ x: number; y: number } | null>(null)

  // Linear Interpolation
  // x: The value we want to interpolate from (start)
  // y: The target value we want to interpolate to (end)
  // a: The amount by which we want x to be closer to y
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const manageMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY, movementX, movementY } = e
    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i)
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i)
        draw(targetX, targetY, 50)
      }
    }

    prevPosition.current = {
      x: clientX,
      y: clientY,
    }
  }

  const draw = (x: number, y: number, radius: number) => {
    const ctx = canvas.current?.getContext('2d')
    if (ctx == null) return

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <div className="relative h-full w-full">
      {dimension.width == 0 && (
        <div className="absolute h-full w-full bg-black" />
      )}
      <canvas
        ref={canvas}
        height={dimension.height}
        width={dimension.width}
        onMouseMove={manageMouseMove}
      />
    </div>
  )
}
