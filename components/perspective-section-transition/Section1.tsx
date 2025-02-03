import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Section1({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div
      className="flex flex-col h-screen sticky top-0 pb-[10vh] justify-center items-center bg-[#C72626] text-[3.5vw] text-white"
      style={{ scale, rotate }}
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image
            src="/images/perspective-section-transition/1.jpg"
            alt="image"
            fill
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}
