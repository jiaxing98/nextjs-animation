import { motion } from 'framer-motion'
import useShuffle from './useShuffle'
import styles from './style.module.css'

export default function CenteredPixelTransition({
  menuIsActive,
}: {
  menuIsActive: boolean
}) {
  const anim = {
    initial: {
      opacity: 0,
    },

    open: (i: number) => ({
      opacity: 1,
      transition: { duration: 0, delay: 0.03 * i },
    }),

    closed: (i: number) => ({
      opacity: 0,
      transition: { duration: 0, delay: 0.03 * i },
    }),
  }

  // An X amount of blocks is returned inside each columns, depending on the height of the window
  const getBlocks = (nbOfColumns: number) => {
    const { innerWidth, innerHeight } = window
    const blockSize = innerWidth * (1 / nbOfColumns)
    const nbOfBlocks = Math.ceil(innerHeight / blockSize)
    const shuffledIndexes = useShuffle([...Array(nbOfBlocks)].map((_, i) => i))

    return shuffledIndexes.map((randomIndex, index) => {
      return (
        <motion.div
          key={index}
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? 'open' : 'closed'}
          custom={randomIndex}
        />
      )
    })
  }

  const nbOfColumns = 20

  return (
    <div className={styles.pixelBackground}>
      {/* Each column is taking 5vw of width and 100% height (from style.module.css). */}
      {[...Array(nbOfColumns)].map((_, index) => {
        return (
          <div key={index} className={styles.column}>
            {getBlocks(nbOfColumns)}
          </div>
        )
      })}
    </div>
  )
}
