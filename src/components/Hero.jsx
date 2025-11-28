import React, { useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/picture.jpg'

const EMAIL = 'johnsericlumambas@yahoo.com'

export default function Hero(){
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMove(e){
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left - rect.width / 2) / 20
    const relY = (e.clientY - rect.top - rect.height / 2) / 20
    setPos({ x: relX, y: relY })
  }

  return (
    <section id="home" className="relative pt-28 pb-24">
      {/* animated background layer */}
      <div className="animated-bg pointer-events-none -z-10 absolute inset-0" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-bold leading-tight">Hi, I'm <span className="text-primary-500">John Eric E. Lumambas</span></motion.h1>
            <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-4 text-lg text-slate-300">I’m a student passionate about building reliable and delightful digital experiences — from web apps to design systems — with a growing focus on software engineering and quality assurance.</motion.p>
            <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}} className="mt-8 flex gap-4">
              <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg glass hover:scale-[1.02] transition-transform">See projects</a>
              <a href={`mailto:${EMAIL}?subject=Hello%20from%20your%20site`} className="inline-flex items-center px-5 py-3 rounded-lg bg-primary-500 text-black font-medium hover:brightness-105">Contact me</a>
            </motion.div>
          </div>

          <div className="relative flex justify-center md:justify-end" onMouseMove={handleMove}>
            {/* enlarged profile photo with subtle parallax + hover */}
            <motion.div
              // shift left by subtracting a constant and enlarge sizes below
              animate={{ x: pos.x - 90, y: pos.y, rotate: pos.x / 10 }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-3xl overflow-hidden card-shadow ring-1 ring-white/6"
            >
              <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}