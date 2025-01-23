import React, { useState } from 'react'
import Project from './Project'
import Modal from './Modal'

const projects = [
  {
    title: 'C2 Montreal',
    src: 'c2montreal.png',
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: 'officestudio.png',
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: 'locomotive.png',
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: 'silencio.png',
    color: '#706D63',
  },
]

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col w-[1000px] justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          )
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  )
}
