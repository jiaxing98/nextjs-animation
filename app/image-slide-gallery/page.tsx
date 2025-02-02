import Project from '@/components/image-slide-gallery/Project'
import React from 'react'

export default function Page() {
  const projects = [
    {
      title1: 'Jomor',
      title2: 'Design',
      src: 'jomor_design.jpeg',
    },
    {
      title1: 'La',
      title2: 'Grange',
      src: 'la_grange.jpeg',
    },
    {
      title1: 'Deux Huit',
      title2: 'Huit',
      src: 'deux_huit_huit.jpeg',
    },
    {
      title1: 'Nothing',
      title2: 'Design Studio',
      src: 'nothing_design_studio.png',
    },
    {
      title1: 'Mambo',
      title2: 'Mambo',
      src: 'mambo_mambo.jpeg',
    },
  ]

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[80%]">
        <p>Featured Work</p>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />
        })}
      </div>
    </main>
  )
}
