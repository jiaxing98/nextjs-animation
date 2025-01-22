import React from 'react'
import styles from './page.module.css'
import TextDisperse from '@/components/text-disperse/TextDisperse'

export default function Page() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[50vw] text-white">
        <div className={styles.introLine}>
          <p>Nathan</p>
          <p>Smith</p>
        </div>

        <div className={styles.introLine}>
          <p>Design</p>
          <p>&</p>
        </div>

        <div className={styles.introLine}>
          <p>Art</p>
          <p>Direction</p>
        </div>

        <TextDisperse>
          <p>+447533063596</p>
        </TextDisperse>

        <TextDisperse>
          <p>→Email</p>
        </TextDisperse>

        <TextDisperse>
          <p>→Insta</p>
        </TextDisperse>
      </div>
    </main>
  )
}
