export const projects = [
  {
    id: 1,
    title: 'Vidinis medis (bakalauro darbas)',
    description:
      'Interaktyvi naršyklės aplikacija emocinių zonų tyrinėjimui. Vartotojas naršo medžio struktūroje, įeina į zonų gylį ir keičia vizualinę būseną.',
    technologies: ['JavaScript', 'p5.js', 'Canvas 2D'],
    github: 'https://github.com/ievavaineikyte-ctrl/vidinis-medis',
    demo: `${import.meta.env.BASE_URL}demos/vidinis-medis/index.html`,
    image: `${import.meta.env.BASE_URL}demos/vidinis-medis/og-image.svg`,
  },
  {
    id: 2,
    title: 'ArcGIS žemėlapis',
    description:
      'Interaktyvus Lietuvos miestų žemėlapis su ArcGIS API. Heatmap, basemap perjungimas, paieška ir koordinatės realiu laiku.',
    technologies: ['ArcGIS API', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ievavaineikyte-ctrl/arcgis-zemelapis',
    demo: `${import.meta.env.BASE_URL}demos/zemelapis/index.html`,
    image: 'linear-gradient(135deg, #1e3a5f 0%, #0d9488 50%, #5eead4 100%)',
  },
  {
    id: 3,
    title: 'Babylon.js 3D scena',
    description:
      '3D scena sukurta Babylon.js biblioteka. Interaktyvi 3D aplinka naršyklėje su WebGL renderinimu.',
    technologies: ['Babylon.js', 'JavaScript', 'WebGL', 'HTML5'],
    github: 'https://github.com/ievavaineikyte-ctrl/babylon-3d-scena',
    demo: `${import.meta.env.BASE_URL}demos/babylon/index.html`,
    image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 4,
    title: 'KMI skaičiuoklė',
    description:
      'Android aplikacija kūno masės indeksui (KMI) skaičiuoti. Įvedus ūgį ir svorį, rodo KMI reikšmę ir kategoriją.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android'],
    github: 'https://github.com/ievavaineikyte-ctrl/kmi-skaiciuokle',
    demo: null,
    image: 'linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #5eead4 100%)',
  },
  {
    id: 5,
    title: 'Vizitinė kortelė (Android)',
    description:
      'Mobili vizitinė kortelė su portfolio, CV ir kontaktų informacija. Kotlin + Jetpack Compose aplikacija.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android', 'DataStore'],
    github: 'https://github.com/ievavaineikyte-ctrl/vizitine-kortele',
    demo: null,
    image: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)',
  },
  {
    id: 6,
    title: 'Nuotraukų redaktorius (3 darbas)',
    description:
      'Android aplikacija nuotraukų darymui ir redagavimui. Kamera, peržiūra ir redagavimo ekranas su Compose UI.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android', 'CameraX'],
    github: 'https://github.com/ievavaineikyte-ctrl/3perdarytasdarbas',
    demo: null,
    image: 'linear-gradient(135deg, #831843 0%, #be185d 50%, #f472b6 100%)',
  },
  {
    id: 7,
    title: 'Dizaino portfolio',
    description:
      'Responsyvi portfolio svetainė su projektų galerija. HTML, CSS ir JavaScript — atskiras šviesus dizaino stilius.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/ievavaineikyte-ctrl/bootstrap-portfolio',
    demo: `${import.meta.env.BASE_URL}demos/bootstrap/index.html`,
    image: `${import.meta.env.BASE_URL}demos/bootstrap/menulis.png`,
  },
]
