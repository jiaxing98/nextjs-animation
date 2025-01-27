'use client'

import React, { RefObject, useRef } from 'react'

export default function Page() {
  let refs: RefObject<HTMLImageElement | null>[] = []
  let currentIndex = 0
  let steps = 0
  let nbOfImages = 0
  let maxNumberOfImages = 8

  const getCurrentImages = () => {
    let images: HTMLImageElement[] = []
    let indexOfFirst = currentIndex - nbOfImages

    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i
      if (targetIndex < 0) targetIndex += refs.length
      if (refs[targetIndex] != null) images.push(refs[targetIndex]!.current!)
    }

    return images
  }

  const moveImage = (x: number, y: number) => {
    const currentImage = refs[currentIndex].current
    if (currentImage == null) return

    currentImage.style.left = x + 'px'
    currentImage.style.top = y + 'px'
    currentImage.style.display = 'block'
    currentIndex++
    nbOfImages++
    setZIndex()
  }

  const setZIndex = () => {
    const images = getCurrentImages()
    for (let i = 0; i < images.length; i++) {
      images[i].style.zIndex = String(i)
    }
  }

  const removeImage = () => {
    const images = getCurrentImages()
    images[0].style.display = 'none'
    nbOfImages--
  }

  const manageMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, movementX, movementY } = e

    steps += Math.abs(movementX) + Math.abs(movementY)

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY)
    }

    if (nbOfImages == maxNumberOfImages) {
      removeImage()
    }

    if (currentIndex == refs.length) {
      currentIndex = 0

      steps = -150
    }
  }

  return (
    <main
      className="flex relative h-screen overflow-hidden"
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
    >
      {[...Array(19)].map((_, index) => {
        const ref = useRef<HTMLImageElement>(null)
        refs.push(ref)
        return (
          <img
            key={index}
            ref={ref}
            className="absolute hidden w-[30vw] -translate-x-[50%] -translate-y-[50%]"
            src={`/images/mouse-image-gallery/${index}.jpg`}
            alt="img"
          />
        )
      })}
    </main>
  )
}
