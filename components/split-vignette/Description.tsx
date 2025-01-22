import { motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './style.module.css'

export default function Description({
  projects,
  mousePosition,
}: {
  projects: { name: string; handle: string }[]
  mousePosition: { x: MotionValue<number>; y: MotionValue<number> }
}) {
  const [index, setIndex] = useState(0)
  const { x, y } = mousePosition

  return (
    <div className={`h-[120vh] ${styles.polygon}`}>
      <div className="flex flex-col absolute h-full w-full justify-center items-center z-[1]">
        {projects.map(({ name }, i) => {
          return (
            <p
              className="text-[7vw] cursor-default m-0 uppercase"
              key={`p${i}`}
              onMouseOver={() => {
                setIndex(i)
              }}
            >
              {name}
            </p>
          )
        })}
      </div>
      <motion.div
        className="fixed h-[30vw] w-[20vw] top-0 rounded-[1.5vw] overflow-hidden"
        style={{ x, y }}
      >
        <Image
          src={`/images/split-vignette/${projects[index].handle}/about.jpg`}
          alt="image"
          className="w-full object-cover"
          fill
        />
      </motion.div>
    </div>
  )
}
