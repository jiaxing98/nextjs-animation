import React from 'react'
import Nav from './Nav'

export default function Content() {
  return (
    <div className="flex flex-col h-full w-full justify-between py-8 px-12 bg-[#4E4E5A]">
      <Nav />
      <div className="flex justify-between items-end mb-6">
        <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
        <p>©copyright</p>
      </div>
    </div>
  )
}
