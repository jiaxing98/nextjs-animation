'use client'

import Character from '@/components/text-gradient-scroll/Character'
import Paragraph from '@/components/text-gradient-scroll/Paragraph'
import Word from '@/components/text-gradient-scroll/Word'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function Page() {
  const paragraph =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione deleniti modi aperiam consectetur, aspernatur id. Saepe tenetur corporis voluptate quae, doloremque quos pariatur quas delectus excepturi aperiam. Nulla, eos?'

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="my-[50vh]">
      <Paragraph paragraph={paragraph} />
      <div className="h-10"></div>
      <Word paragraph={paragraph} />
      <div className="h-10"></div>
      <Character paragraph={paragraph} />
    </div>
  )
}
