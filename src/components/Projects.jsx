import { useInView } from '../hooks/useInView'
import { defaultProjectPreview, projects } from '../data/projects'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const isImageFile = Boolean(
    project.image && !project.image.startsWith('linear-gradient'),
  )
  const previewBackground = project.image?.startsWith('linear-gradient')
    ? project.image
    : defaultProjectPreview

  return (
    <article className={styles.card} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className={styles.imageWrap}>
        {isImageFile ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.imageFile}
          />
        ) : (
          <div className={styles.image} style={{ background: previewBackground }}>
            <span className={styles.placeholder}>Projekto peržiūra</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tech}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.links}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkSecondary}
            >
              Atidaryti
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [ref, isInView] = useInView()

  return (
    <section
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="projects"
      ref={ref}
    >
      <div className={styles.container}>
        <span className={styles.label}>// projects</span>
        <h2 className={styles.heading}>Pasirinkti darbai</h2>
        <p className={styles.subtitle}>
          Projektai, kurie parodo mano požiūrį į kodą, dizainą ir problemų sprendimą.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
