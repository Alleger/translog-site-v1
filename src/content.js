// Весь контент сайта в одном месте. Тексты взяты с текущего translogcompany.com.
// Фотографии лежат в public/img. Логотип пока загружается с текущего сайта.

const WP = 'https://translogcompany.com/wp-content/uploads'

export const images = {
  logoWhite: `${WP}/2020/09/logo_gr_hd-white.png`,
  logo: `${WP}/2020/09/logo_gr_hd.png`,
  hero: 'img/hero.webp',          // белый тягач на трассе
  express: 'img/express.webp',    // фургон на закате
  terminal: 'img/terminal.webp',  // тягач в контейнерном терминале
  fleet: 'img/fleet.webp',        // ряд тягачей
  night: 'img/night.webp',        // тягач ночью
  valley: 'img/valley.webp',      // трасса в долине, вид сверху
  aerial: 'img/aerial.webp',      // трасса сверху, широкая
  interchange: 'img/interchange.webp', // развязка сверху
  tarpaulin: 'img/tarpaulin.webp',     // тентованный полуприцеп
}

export const company = {
  name: 'Translog Company s.r.o.',
  founded: 2005,
  email: 'info@translog.company',
  phoneMain: '+420 222 200 762',
  instagram: 'https://instagram.com/translog.company.sro',
  tagline: 'Everyday is a new day for us and we work really hard to satisfy our customer everywhere.',
  motto: 'Focusing, Connecting and Developing is our strategic plan for the future.',
  ceo: { name: 'Alexandera Volynchikova', role: 'Chief Executive Officer' },
}

export const offices = [
  {
    city: 'Prague',
    country: 'Czech Republic',
    entity: 'Translog Company s.r.o.',
    address: ['Rohanské nábřeží 693/10', '186 00 Prague'],
    phones: ['+420 222 200 762', '+420 776 783 995'],
  },
  {
    city: 'Poland',
    country: '',
    entity: 'Translog Polska Company sp. z o.o.',
    address: [],
    phones: ['+48 664 362 7272'],
  },
]

export const facts = [
  { label: 'In business since', value: '2005' },
  { label: 'Fleet', value: 'ca. 150 vehicles, EURO 6' },
  { label: 'Capacity', value: '1.5 t vans to 24 t tractor-trailers' },
  { label: 'CMR insurance', value: 'up to €2.5 M per event' },
  { label: 'Availability', value: '24/7, Just in Time' },
]

export const services = [
  {
    slug: 'express',
    title: 'Express road freight',
    short: 'Dedicated trucks from point A to point B, without stops or transhipment.',
    intro:
      'The entire loading area of the vehicle is dedicated to your shipment and the transport takes place directly, from point A to point B without further stops and transhipments.',
    features: [
      'From parcel to FTL',
      '24/7 cargo monitoring',
      'European coverage',
      'Non-stop driving with 2 drivers',
      'Real-time tracking',
      'Just-in-Time delivery',
    ],
    advantages: [
      'Fleet of 150 modern vehicles (EURO 6, EURO 5 EEV)',
      'Refrigerated and tarpaulin semi-trailers',
      '24-hour tracking system',
      'CMR insurance up to 15 million CZK',
      'Experience with fruit, vegetables, frozen products, industrial and pharmaceutical goods',
    ],
    image: images.express,
  },
  {
    slug: 'dangerous-goods',
    title: 'Dangerous goods & liquid bulk',
    short: 'ADR transports and tankers for liquid and dry bulk.',
    intro:
      'We specialize in the transportation of liquid foods such as chocolate, beer, wine, fruit juices, sugar solutions, milk and more.',
    features: [
      'Thermo trailer',
      'Mega trailer',
      'Liquid bulk tankers',
      'Dry bulk tanker',
      'Experienced and trained ADR drivers',
    ],
    advantages: [],
    image: images.terminal,
  },
]

// «What we can do» с текущего сайта — услуги без отдельной страницы
export const capabilities = [
  { title: 'Domestic, export and import', text: 'Transports all over the EU area.' },
  { title: 'Standard and express', text: 'From a single parcel to a full truck load.' },
  { title: 'Special cargo', text: 'Oversized cargo, waste and dangerous goods.' },
  { title: 'Warehousing', text: 'Storage solutions alongside transport.' },
]

export const fleet = [
  { icon: 'van', title: 'Delivery vans', text: 'From 1.5 t, for local freight and delivery.' },
  { icon: 'tarp', title: 'Tarpaulin trailers', text: 'Standard and Mega size.' },
  { icon: 'reefer', title: 'Refrigerated box trailers', text: 'For food, pharma and frozen goods.' },
  { icon: 'tank', title: 'Tankers', text: 'Liquid and dry bulk.' },
  { icon: 'truck', title: 'Tractor-trailer units', text: 'Up to 24 t, all with GPS tracking.' },
]

export const industries = ['Automotive', 'Heavy industry', 'Food', 'Pharma', 'Industrial goods']

export const team = [
  'Trained drivers',
  'Multilingual staff',
  'Partner network across Europe',
]

export const partnerNetwork = {
  title: 'One for all – all for you',
  text:
    'We have established long-term partnerships with European service providers, so we can offer complete logistics solutions while you keep one direct contact with us.',
}

export const news = [
  {
    slug: 'start-translog-company',
    title: 'Start Translog Company',
    date: '2016-02-15',
    image: images.tarpaulin,
    excerpt:
      'Focusing, Connecting and Developing is our strategic plan for the future. The Translog Group was founded in 2005.',
    body: [
      'Focusing, Connecting and Developing is our strategic plan for the future. The Translog Group was founded in 2005. We are focused on the realization of several transport types. To match the expectations of our customers, we exhaust all available possibilities.',
      'As a result of many years of logistic business experience, we provide our customers standard-, special- or nonstop express transports. Our range of services grows continuously, so we can provide various solutions for different requests. Dangerous goods transports are part of our service as well as transport solutions for consolidated and groupage cargo.',
      'Interdisciplinary know-how and diversified equipment makes it possible for us to react to individual customer wishes immediately. Most of our daily work is the organization of time sensitive transports for the automotive industry, the heavy industry and the food industry.',
      'The whole vehicle fleet of the Translog Group and its equipment is continuously in change and can be adapted to our customer’s requirements. In this process, we do not lose the focus on the environment protection and the cost-efficiency.',
      'In order to guarantee our customers that their orders will be handled as soon as possible, even at short notice, we are available 24/7 and deliver “Just in Time”!',
    ],
  },
]
