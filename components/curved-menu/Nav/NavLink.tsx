import { motion } from 'framer-motion'
import Link from 'next/link'
import { scale, slide } from '../animation'

interface Props {
  data: {
    title: string
    href: string
    index: number
  }
  isActive: boolean
  setSelectedIndicator: (indicator: string) => void
}

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
}: Props) {
  const { title, href, index } = data

  return (
    <motion.div
      className="flex relative items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute h-[10px] w-[10px] bg-white rounded-[50%] left-[-30px]"
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}
