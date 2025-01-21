import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ReactNode, useLayoutEffect, useRef } from 'react'

const phrases = [
  'Los Flamencos National Reserve',
  'is a nature reserve located',
  'in the commune of San Pedro de Atacama',
  'The reserve covers a total area',
  'of 740 square kilometres (290 sq mi)',
]

export const Description = () => {
  return (
    <div className="relative text-white text-[3vw] uppercase mt-[30vw] ml-[10vw]">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>
      })}
    </div>
  )
}

const AnimatedText = ({ children }: { children: ReactNode }) => {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
      },
      opacity: 0,
      left: '-200px',
      ease: 'power3.inOut',
    })
  }, [])

  return (
    <p ref={text} className="relative m-0">
      {children}
    </p>
  )
}
