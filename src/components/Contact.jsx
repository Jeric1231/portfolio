import React from "react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Let's Collaborate</h2>
          <p className="mt-4 text-slate-300 text-lg">Ready to drive quality, ship features, and delight users?</p>
          <p className="mt-4 text-slate-300">
            I'm actively seeking an internship where I can contribute across QA, development, support operations, project delivery, and design. Let's build something remarkable together.
          </p>
        </div>

        <div className="mt-8 glass p-6 rounded-3xl">
          <ul className="space-y-4 text-slate-200">
            <li className="flex items-center gap-4">
              <span className="text-2xl">✉</span>
              <a href="mailto:johnsericlumambas@yahoo.com" className="text-sm hover:underline">johnsericlumambas@yahoo.com</a>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-2xl">in</span>
              <a href="https://www.linkedin.com/in/john-eric-lumambas-b63034374/" target="_blank" rel="noreferrer" className="text-sm hover:underline">linkedin.com/in/john-eric-lumambas/</a>
            </li>

            <li className="flex items-center gap-4">
              <span className="text-2xl">◧</span>
              <a href="https://github.com/Jeric1231" target="_blank" rel="noreferrer" className="text-sm hover:underline">github.com/Jeric1231</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}