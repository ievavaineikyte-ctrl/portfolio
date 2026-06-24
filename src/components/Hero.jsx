import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow} />
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>Sveiki, aš esu</p>
        <h1 className={styles.name}>Ieva Vaineikytė</h1>
        <p className={styles.title}>Junior Web Developer</p>
        <p className={styles.tagline}>
          Kuriu modernias ir aiškias internetines svetaines naudodama React,
          JavaScript, HTML ir CSS.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            Peržiūrėti projektus
          </a>
          <a href="#contact" className={styles.secondary}>
            Susisiekti
          </a>
        </div>
      </div>
    </section>
  )
}
