import { motion } from 'framer-motion'
import { useState } from 'react'
import { height } from '../animation'
import Body from '../Body/Body'
import NavImage from './NavImage'
import styles from './style.module.css'
import Footer from '../Footer/Footer'

const links = [
  {
    title: 'Home',
    href: '/',
    src: 'home.png',
  },

  {
    title: 'Shop',
    href: '/shop',
    src: 'shop.png',
  },

  {
    title: 'About Us',
    href: '/about',
    src: 'home.png',
  },

  {
    title: 'Lookbook',
    href: '/lookbook',
    src: 'lookbook.png',
  },

  {
    title: 'Contact',
    href: '/contact',
    src: 'contact.png',
  },
]

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  )
}
