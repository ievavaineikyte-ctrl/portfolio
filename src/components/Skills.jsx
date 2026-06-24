import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    skills: ['PHP (basic)', 'MySQL (basic)'],
  },
  {
    title: 'Įrankiai',
    skills: ['Git', 'GitHub', 'Figma (basic)'],
  },
]

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="skills"
      ref={ref}
    >
      <div className={styles.container}>
        <span className={styles.label}>// skills</span>
        <h2 className={styles.heading}>Technologijos</h2>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.badge}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
