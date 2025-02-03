'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/3d-broken-404/Scene'), {
  ssr: false,
})

export default function Page() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  )
}
