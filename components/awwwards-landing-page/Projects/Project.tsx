import React, { Dispatch, SetStateAction } from 'react'
import styles from './style.module.css'

interface Props {
  index: number
  title: string
  setModal: Dispatch<
    SetStateAction<{
      active: boolean
      index: number
    }>
  >
}

export default function Project({ index, title, setModal }: Props) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => {
        setModal({ active: true, index })
      }}
      onMouseLeave={() => {
        setModal({ active: false, index })
      }}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  )
}
