import { motion, MotionValue, useTransform } from 'framer-motion'

export default function Logos({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0])

  return (
    <div className="h-[250px] bg-black overflow-hidden">
      <motion.div
        style={{ y }}
        className="flex h-full justify-center items-center p-10 gap-10 bg-black"
      >
        {[...Array(5)].map((_, i) => {
          return (
            <img
              key={`img_${i}`}
              src={`/images/text-along-path/logo${i + 1}.jpg`}
              className="h-[80px] w-[80px]"
            />
          )
        })}
      </motion.div>
    </div>
  )
}
