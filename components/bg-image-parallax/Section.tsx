'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Section() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh'])

  // The image container is in position fixed,
  // so we need to add a clip-path on the parent to crop that fixed div.
  return (
    <div
      ref={container}
      className="relative flex h-screen justify-center items-center overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <Text />
      <div className="fixed h-[120vh] w-full top-[-10vh] left-0">
        <motion.div className="relative h-full w-full" style={{ y }}>
          <Image
            src="/images/bg-image-parallax/bg1.jpg"
            alt="image"
            style={{ objectFit: 'cover' }}
            fill
          />
        </motion.div>
      </div>
    </div>
  )
}

const Text = () => {
  return (
    <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
      <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
        Beauty and quality need the right time to be conceived and realised even
        in a world that is in too much of a hurry.
      </p>
      <p className="text-[5vw] uppercase mix-blend-difference">
        Background Parallax
      </p>
    </div>
  )
}
