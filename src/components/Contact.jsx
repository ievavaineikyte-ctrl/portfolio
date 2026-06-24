import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

const socials = [
  {
    label: 'El. paštas',
    value: 'ieva.vaineikyte@gmail.com',
    href: 'mailto:ieva.vaineikyte@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/ievavaineikyte-ctrl',
    href: 'https://github.com/ievavaineikyte-ctrl',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tavo-profilis',
    href: 'https://www.linkedin.com/in/tavo-profilis',
  },
]

export default function Contact() {
  const [ref, isInView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="contact"
      ref={ref}
    >
      <div className={styles.container}>
        <span className={styles.label}>04 — Kontaktai</span>
        <h2 className={styles.heading}>Susisiekime</h2>
        <p className={styles.subtitle}>
          Turi idėją ar nori bendradarbiauti? Parašyk — atsakysiu per 24 val.
        </p>

        <div className={styles.grid}>
          <div className={styles.info}>
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialLabel}>{item.label}</span>
                <span className={styles.socialValue}>{item.value}</span>
              </a>
            ))}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Vardas</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tavo vardas"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">El. paštas</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tavo@email.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Žinutė</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Kuo galiu padėti?"
              />
            </div>
            <button type="submit" className={styles.submit}>
              {sent ? 'Išsiųsta ✓' : 'Siųsti žinutę'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
