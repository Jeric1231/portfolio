import { practical } from "../data/practical"
import { skills } from "../data/skills"

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300">I'm a product-focused developer and designer who loves building interfaces that combine solid engineering with delightful motion.</p>
          <div className="mt-3 text-sm text-slate-300">Based in Cebu — Open for On-the-Job Training Opportunities</div>
        </div>

        <div className="grid gap-6 items-start">
          <div className="md:col-span-2">
            <div className="hidden md:block" />
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-6">
                  <div className="glass p-6 rounded-3xl min-h-[220px]">
                    <h3 className="text-2xl font-semibold">Core Skills</h3>
                    <p className="mt-3 text-sm text-slate-300">
                      Student with foundational coding, testing, and project management skills. Quick learner, detail-oriented, and effective at teamwork.
                    </p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {skills.map((s, i) => (
                        <article key={i} className="glass bg-white/4 rounded-2xl p-5 h-50 md:h-55 lg:h-62 flex flex-col justify-start">
                          <h4 className="font-semibold text-lg">{s.title}</h4>
                          <ul className="mt-4 space-y-1 pl-5 list-disc marker:text-slate-300">
                            {s.bullets.map((b, bi) => (
                              <li key={bi} className="text-ellipsis leading-relaxed">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>


                {/* Practical experience - right (bigger) */}
                <div className="md:col-span-6">
                  <div className="glass p-6 rounded-3xl min-h-[220px]">
                    <h3 className="text-2xl font-semibold">Practical Experience</h3>
                    <p className="mt-3 text-sm text-slate-300">Selected roles where I contributed to projects and product improvements.</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {practical.map((p,i) => (
                        <article key={i} className="glass bg-white/4 rounded-2xl p-5 h-50 md:h-55 lg:h-62 flex flex-col justify-between">
                          <div className="practical-top min-h-[72px] md:min-h-[96px] lg:min-h-[120px]">
                            <div className="font-semibold text-[18px]">{p.title}</div>
                            <div className="mt-1 text-xs practical-summary min-h-[32px]">{p.summary}</div>
                            <div className="text-slate-300 text-[15px] line-clamp-3">{p.desc}</div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.bullets.map((b,bi) => (
                              <div
                                key={bi}
                                className="practical-pill"
                              >
                                {b}
                              </div>
                            ))}
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
