import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function Hint() {
  const hint = 'Scroll UP'
  const regex = /(?=\s)|(?<=\s)|/

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['end end', 'end 0.6'],
  })

  return (
    <div ref={container} className="flex h-screen justify-center items-center">
      <p className="text-9xl font-[Young_Serif]">
        {hint.split(regex).map((char, i) => {
          const start = i / hint.length
          const end = start + 1 / hint.length
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

          return (
            <span key={`char_${i}`} className="relative">
              <span className="absolute opacity-[20%]">{char}</span>
              <motion.span style={{ opacity }}>{char}</motion.span>
            </span>
          )
        })}
      </p>
    </div>
  )
}
