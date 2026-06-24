import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.index}>01 /</p>
          <h1 className={styles.name}>
            Ieva
            <br />
            <span className={styles.nameAccent}>Vaineikytė</span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.role}>Junior Web Developer</p>
          <p className={styles.tagline}>
            Kuriu modernias ir aiškias internetines svetaines naudodama React,
            JavaScript, HTML ir CSS. Techninis tikslumas + švarus dizainas.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              Projektai
            </a>
            <a href="#contact" className={styles.secondary}>
              Kontaktai
            </a>
          </div>
          <div className={styles.stats}>
            <div>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>Projektai</span>
            </div>
            <div>
              <span className={styles.statNum}>React</span>
              <span className={styles.statLabel}>Stack</span>
            </div>
            <div>
              <span className={styles.statNum}>LT</span>
              <span className={styles.statLabel}>Vilnius</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line} aria-hidden="true" />
    </section>
  )
}
