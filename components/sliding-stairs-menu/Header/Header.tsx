'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Stairs from '../Stairs/Stairs'
import Burger from './Burger'
import Menu from '../Menu/Menu'

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true)
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false)
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
