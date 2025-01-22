import { motion } from 'framer-motion'
import { perspective, slideIn } from './animation'
import { footerLinks, links } from './data'
import styles from './style.module.css'

export default function Nav() {
  return (
    <div className="flex flex-col h-full justify-between pt-[100px] pb-[50px] px-10 box-border">
      <div className="flex flex-col gap-[10px]">
        {links.map((link, i) => {
          const { title, href } = link
          return (
            <div className={styles.linkContainer}>
              <motion.div
                key={`link_${i}`}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href} className="text-black text-[46px]">
                  {' '}
                  {title}
                </a>
              </motion.div>
            </div>
          )
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link
          return (
            <motion.a
              key={`footer_${i}`}
              href={href}
              className="w-[50%] mt-1 text-black"
              custom={i}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {title}
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
