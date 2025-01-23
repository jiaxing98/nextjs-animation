'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './style.module.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../Nav/Nav'

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div
          className={clsx(styles.burger, { [styles.burgerActive]: isActive })}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  )
}
