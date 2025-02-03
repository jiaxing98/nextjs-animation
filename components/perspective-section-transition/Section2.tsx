import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Section2({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div className="relative h-screen" style={{ scale, rotate }}>
      <Image
        src="/images/perspective-section-transition/2.jpg"
        alt="image2"
        fill
      />
    </motion.div>
  )
}
