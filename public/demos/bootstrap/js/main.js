document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open')
    })

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => links.classList.remove('open'))
    })
  }

  const current = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href')
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active')
    }
  })

  const form = document.querySelector('.contact-form')
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const btn = form.querySelector('button[type="submit"]')
      const original = btn.textContent
      btn.textContent = 'Išsiųsta ✓'
      btn.disabled = true
      form.reset()
      setTimeout(() => {
        btn.textContent = original
        btn.disabled = false
      }, 2500)
    })
  }
})

function initSlideshow(images, imageId, counterId) {
  let index = 0
  const img = document.getElementById(imageId)
  const counter = document.getElementById(counterId)
  const prev = document.getElementById('prevBtn')
  const next = document.getElementById('nextBtn')

  if (!img || !images.length) return

  function render() {
    img.src = images[index]
    if (counter) counter.textContent = `${index + 1} / ${images.length}`
    if (prev) prev.disabled = index === 0
    if (next) next.disabled = index === images.length - 1
  }

  prev?.addEventListener('click', () => {
    if (index > 0) {
      index -= 1
      render()
    }
  })

  next?.addEventListener('click', () => {
    if (index < images.length - 1) {
      index += 1
      render()
    }
  })

  render()
}
