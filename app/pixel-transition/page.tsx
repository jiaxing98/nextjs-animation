'use client'

import Header from '@/components/pixel-transition/Header/Header'
import Menu from '@/components/pixel-transition/Menu/Menu'
import CenteredPixelTransition from '@/components/pixel-transition/PixelTransition/CenteredPixelTransition'
import HorizontalPixelTransition from '@/components/pixel-transition/PixelTransition/HorizontalPixelTransition'
import VerticalPixelTransition from '@/components/pixel-transition/PixelTransition/VerticalPixelTransition'
import { useState } from 'react'

export default function Page() {
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [order, setOrder] = useState(0)
  const [transition, setTransition] = useState<Transition>('centered')

  const handleActiveMenu = () => {
    setMenuIsActive(!menuIsActive)

    switch (order) {
      case 0:
        setTransition('centered')
        break

      case 1:
        setTransition('horizontal')
        break

      case 2:
        setTransition('vertical')
        break

      default:
        setTransition('centered')
        break
    }

    if (menuIsActive) setOrder(order >= 2 ? 0 : order + 1)
  }

  return (
    <main>
      <Header menuIsActive={menuIsActive} setMenuIsActive={handleActiveMenu} />
      <Menu menuIsActive={menuIsActive} />
      {transition == 'centered' && (
        <CenteredPixelTransition menuIsActive={menuIsActive} />
      )}
      {transition == 'horizontal' && (
        <HorizontalPixelTransition menuIsActive={menuIsActive} />
      )}
      {transition == 'vertical' && (
        <VerticalPixelTransition menuIsActive={menuIsActive} />
      )}
    </main>
  )
}
