import React from 'react'
import Content from './Content'

export default function Footer2() {
  const height = '60vh'

  return (
    <div
      className={`relative`}
      style={{
        height: height,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <div
        className={`relative -top-[100vh]`}
        style={{ height: `calc(100vh + ${height})` }}
      >
        <div
          className={`sticky`}
          style={{ height, top: `calc(100vh - ${height})` }}
        >
          <Content />
        </div>
      </div>
    </div>
  )
}
