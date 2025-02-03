import { Project } from '@/types/card-parallax'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

interface Props {
  index: number
  progress: MotionValue<number>
  targetScale: number
  range: number[]
  project: Project
}

export default function Card({
  index,
  progress,
  range,
  targetScale,
  project,
}: Props) {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="flex sticky h-screen justify-center items-center top-0 font-['Bebas_Neue']"
    >
      <motion.div
        className="flex relative flex-col h-[70vh] w-[60vw] rounded-[25px] p-12 origin-top"
        style={{
          backgroundColor: project.color,
          top: `calc(-5vh + ${index * 25}px)`,
          scale,
        }}
      >
        <h2 className="text-center m-0 text-5xl">{project.title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="relative w-[40%] top-[10%]">
            <p className="text-2xl first-letter:text-5xl">
              {project.description}
            </p>
            <span className="flex items-center gap-1">
              <a
                href={project.link}
                target="_blank"
                className="text-xl underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div className="relative h-full w-[60%] rounded-[25px] overflow-hidden">
            <motion.div>
              <Image
                src={`/images/card-parallax/${project.src}`}
                alt="image"
                fill
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
