import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
  'PHP',
  'MySQL',
  'Figma',
]

export default function About() {
  const [ref, isInView] = useInView()

  return (
    <section
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="about"
      ref={ref}
    >
      <div className={styles.container}>
        <span className={styles.label}>// about</span>
        <h2 className={styles.heading}>Kas aš?</h2>

        <div className={styles.grid}>
          <p className={styles.text}>
            Esu pradedančioji web programuotoja, šiuo metu aktyviai
            tobulinanti savo įgūdžius su React, JavaScript, HTML ir CSS.
          </p>
          <p className={styles.text}>
            Man patinka kurti švarias, modernias ir vartotojui patogias
            svetaines bei spręsti realias UI problemas. Šiuo metu ieškau
            galimybės įgyti praktinės patirties ir dirbti su realiais projektais.
          </p>
        </div>

        <div className={styles.stack}>
          {stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
