import { motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import styles from './style.module.css'

const Gallery = ({
  handle,
  mousePosition,
}: {
  handle: string
  mousePosition: { x: MotionValue<number>; y: MotionValue<number> }
}) => {
  const { x, y } = mousePosition

  return (
    <div className={`h-[120vh] ${styles.polygon}`}>
      <div className="relative h-full w-full">
        <Image
          src={`/images/split-vignette/${handle}/background.jpg`}
          alt="bg-image"
          className="w-full object-cover"
          fill
        />
      </div>
      <motion.div
        className="fixed h-[30vw] w-[20vw] top-0 rounded-[1.5vw] overflow-hidden"
        style={{ x, y }}
      >
        <Image
          src={`/images/split-vignette/${handle}/img.jpg`}
          alt="image"
          className="w-full object-cover"
          fill
        />
      </motion.div>
    </div>
  )
}

export default Gallery
