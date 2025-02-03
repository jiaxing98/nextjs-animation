'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/3d-glass-effect/Scene'), {
  ssr: false,
})

export default function Page() {
  return (
    <main className="flex h-screen">
      <Scene />
    </main>
  )
}
