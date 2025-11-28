import { motion } from 'framer-motion'

export default function ProjectCard({ p }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group bg-white/4 glass rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="h-40 bg-slate-800 flex items-center justify-center">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-slate-300 mt-2 flex-1">{p.desc}</p> {/* flex-1 pushes content down */}
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map(t => (
            <div key={t} className="practical-pill">
              {t}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          {p.live && !p.repo ? (
            <a
              href={p.live}
              className="text-s text-slate-200 hover:underline"
            >
              Open Application →
            </a>
          ) : !p.live && p.repo ? (
            <a
              href={p.repo}
              className="text-s text-slate-400 hover:underline"
            >
              View Repository →
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
