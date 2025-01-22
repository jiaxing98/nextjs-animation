import Scene from '@/components/paint-reveal/Scene'
import Text from '@/components/paint-reveal/Text'
import React from 'react'
import './page.module.css'

export default function Page() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <Text />
      <Scene />
    </main>
  )
}
