import { motion } from 'framer-motion'
import Image from 'next/image'
import { opacity } from '../animation'
import styles from './style.module.css'

export default function NavImage({
  src,
  selectedLink,
}: {
  src: string
  selectedLink: SelectedLink
}) {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? 'open' : 'closed'}
    >
      <Image src={`/images/awwwards-nav-menu/${src}`} alt="image" fill />
    </motion.div>
  )
}
