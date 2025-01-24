import React from 'react'
import styles from './style.module.css'
import { height, background, mountAnim } from '../animation'
import { motion } from 'framer-motion'

export default function index() {
  return (
    <div className={styles.stairs}>
      {[...Array(5)].map((_, index) => {
        return <Stair key={index} index={index} />
      })}
      <Background />
    </div>
  )
}

const Stair = ({ index }: { index: number }) => {
  return (
    <motion.div
      className={styles.stair}
      variants={height}
      {...mountAnim}
      custom={4 - index}
    ></motion.div>
  )
}

const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className={styles.background}
    ></motion.div>
  )
}
