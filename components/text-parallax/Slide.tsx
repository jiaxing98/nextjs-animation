import { motion, MotionValue, useTransform } from 'framer-motion'
import Phrase from './Phrase'

interface Props {
  src: string
  direction: Direction
  left: string
  progress: MotionValue<number>
}

export default function Slide({ src, direction, left, progress }: Props) {
  const directionValue = direction === 'left' ? -1 : 1
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionValue, -150 * directionValue]
  )

  return (
    <motion.div
      style={{ x: translateX, left: left }}
      className="relative flex whitespace-nowrap"
    >
      {[...Array(5)].map((_, i) => (
        <Phrase key={i} src={src} />
      ))}
    </motion.div>
  )
}
