"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "SAP SuccessFactors Growth Portfolio Module",
      description:
        "Led the development of innovative UI solutions and integrated AI technologies to enhance the Growth Portfolio module.",
      technologies: ["React", "TypeScript", "AI/ML Integration"],
    },
    {
      title: "SwoopTalent AI-powered Data Platform",
      description:
        "Directed frontend development for an AI-powered data platform that combines and analyzes data from HR systems and workflows.",
      technologies: ["Vue.js", "Node.js", "Machine Learning"],
    },
    {
      title: "Playat Application",
      description:
        "Led the development efforts for the Playat Application, providing strategic guidance and ensuring successful project delivery.",
      technologies: ["React Native", "GraphQL", "AWS"],
    },
  ]

  return (
    <section id="projects" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 border-primary pt-6"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4 grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-primary text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

