import React from 'react'
import Content from './Content'

export default function Footer1() {
  const height = '60vh'

  return (
    <div
      className={`relative`}
      style={{
        height: height,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <div className={`fixed bottom-0 w-full`} style={{ height }}>
        <Content />
      </div>
    </div>
  )
}
