'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'

export default function Intro() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/bg-image-parallax/bg2.jpg"
          alt="image"
          style={{ objectFit: 'cover' }}
          fill
        />
      </motion.div>
    </div>
  )
}
