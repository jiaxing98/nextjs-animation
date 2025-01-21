import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'

export const Intro = () => {
  const background = useRef(null)
  const introImage = useRef(null)
  const homeHeader = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=500x',
      },
    })

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: '200px' }, 0)
  }, [])

  return (
    <div ref={homeHeader} className="flex relative w-full justify-center">
      <div
        ref={background}
        className="absolute h-[140vh] w-full brightness-[60%]"
      >
        <Image
          src={'/images/background.jpeg'}
          alt="background image"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="flex relative mt-[35vh] justify-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="absolute h-[475px] w-[350px] brightness-[70%]"
        >
          <Image
            src={`/images/intro.png`}
            alt="intro image"
            className="object-cover object-top"
            fill
            priority
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white text-[7vw] z-3 text-center whitespace-nowrap"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  )
}
