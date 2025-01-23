import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { blur, translate } from '../animation'
import styles from './style.module.css'

interface Props {
  links: {
    title: string
    href: string
  }[]
  selectedLink: SelectedLink
  setSelectedLink: (link: SelectedLink) => void
}

export default function Body({ links, selectedLink, setSelectedLink }: Props) {
  const getChars = (word: string) => {
    let chars: React.JSX.Element[] = []

    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link

        return (
          <Link key={`link_${index}`} href={href}>
            <motion.p
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? 'open'
                  : 'closed'
              }
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
