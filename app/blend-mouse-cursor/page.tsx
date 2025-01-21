'use client'

import Cursor from '@/components/blend-mouse-cursor/Cursor'
import GradientCursor from '@/components/blend-mouse-cursor/GradientCursor'
import { useState } from 'react'

export default function Page() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <h1
        onMouseOver={() => {
          setIsActive(true)
        }}
        onMouseLeave={() => {
          setIsActive(false)
        }}
        className="text-[4.5vw] max-w-[90vw] text-center text-white p-20"
      >
        The quick brown fox jumps over the lazy dog
      </h1>

      <GradientCursor isActive={isActive} />
      {/* <Cursor isActive={isActive} /> */}
    </div>
  )
}
