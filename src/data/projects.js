export const projects = [
  {
    id: 1,
    title: 'Vidinis medis (bakalauro darbas)',
    description:
      'Interaktyvi naršyklės aplikacija emocinių zonų tyrinėjimui. Vartotojas naršo medžio struktūroje, įeina į zonų gylį ir keičia vizualinę būseną realiu laiku.',
    technologies: ['JavaScript', 'p5.js', 'Canvas 2D', 'HTML5'],
    github: 'https://github.com/ievavaineikyte-ctrl/vidinis-medis',
    demo: `${import.meta.env.BASE_URL}demos/vidinis-medis/index.html`,
    image: `${import.meta.env.BASE_URL}demos/vidinis-medis/og-image.svg`,
  },
  {
    id: 2,
    title: 'ArcGIS žemėlapis',
    description:
      'Interaktyvus Lietuvos miestų žemėlapis su ArcGIS API. Heatmap režimas, basemap perjungimas, paieška ir koordinačių rodymas realiu laiku.',
    technologies: ['ArcGIS API', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ievavaineikyte-ctrl/portfolio',
    demo: `${import.meta.env.BASE_URL}demos/zemelapis/index.html`,
    image: `${import.meta.env.BASE_URL}demos/zemelapis/preview.svg`,
  },
  {
    id: 3,
    title: 'Dizaino portfolio',
    description:
      'Responsyvi portfolio svetainė su projektų galerija ir case study puslapiais. Sukurta HTML, CSS ir JavaScript — atskiras dizaino krypties pavyzdys.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/ievavaineikyte-ctrl',
    demo: `${import.meta.env.BASE_URL}demos/bootstrap/index.html`,
    image: `${import.meta.env.BASE_URL}demos/bootstrap/menulis.png`,
  },
]
