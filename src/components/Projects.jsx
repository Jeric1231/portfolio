import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-slate-300">Explore a curated collection of projects showcasing innovative ideas and practical applications.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
