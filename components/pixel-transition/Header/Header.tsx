import React, { Dispatch, SetStateAction } from 'react'
import styles from './style.module.css'

export default function Header({
  menuIsActive,
  setMenuIsActive,
}: {
  menuIsActive: boolean
  setMenuIsActive: () => void
}) {
  return (
    <div className={styles.header}>
      <div
        onClick={setMenuIsActive}
        className={`${styles.burger} ${
          menuIsActive ? styles.burgerActive : ''
        }`}
      ></div>
    </div>
  )
}
