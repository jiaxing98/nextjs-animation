import { motion } from 'framer-motion'
import useShuffle from './useShuffle'
import styles from './style.module.css'

export default function VerticalPixelTransition({
  menuIsActive,
}: {
  menuIsActive: boolean
}) {
  const anim = {
    initial: {
      opacity: 0,
    },
    open: (delay: number[]) => ({
      opacity: 1,
      transition: { duration: 0, delay: 0.02 * delay[1] },
    }),
    closed: (delay: number[]) => ({
      opacity: 0,
      transition: { duration: 0, delay: 0.02 * delay[0] },
    }),
  }

  const getBlocks = (nbOfColumns: number, indexOfColumn: number) => {
    const { innerWidth, innerHeight } = window
    const blockSize = innerHeight * (1 / nbOfColumns)
    const nbOfBlocks = Math.ceil(innerWidth / blockSize)
    const shuffledIndexes = useShuffle([...Array(nbOfBlocks)].map((_, i) => i))

    return shuffledIndexes.map((randomIndex, index) => {
      return (
        <motion.div
          key={index}
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? 'open' : 'closed'}
          custom={[
            indexOfColumn + randomIndex,
            nbOfColumns - indexOfColumn + randomIndex,
          ]}
        />
      )
    })
  }

  const nbOfColumns = 20

  return (
    <div className={styles.pixelBackground} style={{ flexDirection: 'column' }}>
      {[...Array(nbOfColumns)].map((_, index) => {
        return (
          <div key={index} className={styles.row}>
            {getBlocks(nbOfColumns, index)}
          </div>
        )
      })}
    </div>
  )
}
