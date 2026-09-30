import { href } from '../router.js'
import { VehicleIcon } from '../components/Icons.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import {
  images, company, facts, services, capabilities, fleet, industries, team,
  partnerNetwork, offices, news,
} from '../content.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="wrap hero-content">
        <h1>Road freight across Europe, around the clock</h1>
        <p className="hero-lead">
          Standard, special and nonstop express transports from Prague to anywhere in the EU.
          Our own fleet of around 150 EURO 6 vehicles, on the road since {company.founded}.
        </p>
        <div className="hero-cta">
          <a className="btn btn-signal" href={href('contacts', 'quote')}>Request a quote</a>
          <a className="btn btn-ghost-light" href={href('', 'services')}>Our services</a>
        </div>
      </div>
      <div className="wrap hero-route" aria-hidden="true">
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none">
          <line className="route-base" x1="0" y1="20" x2="1000" y2="20" />
          <line className="route-dash" x1="0" y1="20" x2="1000" y2="20" />
        </svg>
        <ol className="route-stops">
          <li style={{ left: '0%' }}>Prague</li>
          <li style={{ left: '100%' }}>Across the EU</li>
        </ol>
      </div>
    </section>
  )
}

function SpecPlate() {
  return (
    <section className="spec" aria-label="Company facts">
      <div className="wrap">
        <dl className="spec-plate">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <header className="section-head">
          <h2>Services</h2>
          <p>
            Time-sensitive transports for the automotive, heavy and food industries are most
            of our daily work. We handle standard, special and nonstop express loads.
          </p>
        </header>
        {services.map((s, i) => (
          <article key={s.slug} className={`service-row ${i % 2 ? 'flip' : ''}`}>
            <div className="service-media">
              <img src={s.image} alt="" loading="lazy" />
            </div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p>{s.intro}</p>
              <ul className="ticks">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a className="link-arrow" href={href(`services/${s.slug}`)}>More about {s.title.toLowerCase()}</a>
            </div>
          </article>
        ))}
        <div id="capabilities" className="capabilities">
          {capabilities.map((c) => (
            <div key={c.title} className="cap">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fleet() {
  return (
    <section id="fleet" className="section section-dark">
      <div className="wrap">
        <header className="section-head">
          <h2>Fleet and equipment</h2>
          <p>
            Around 150 modern vehicles, EURO 6 and EURO 5 EEV, every one with GPS tracking.
            The fleet changes with our customers’ needs.
          </p>
        </header>
        <div className="fleet-banner">
          <img src={images.fleet} alt="Row of Translog tractor units at dusk" loading="lazy" />
        </div>
        <ul className="fleet-list">
          {fleet.map((v) => (
            <li key={v.title}>
              <VehicleIcon type={v.icon} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
        <div className="fleet-foot">
          <div>
            <h3>People behind the wheel</h3>
            <p>{team.join(', ')}.</p>
          </div>
          <div>
            <h3>Industries we serve</h3>
            <ul className="chips">
              {industries.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Company() {
  return (
    <section id="company" className="section">
      <div className="wrap company-grid">
        <div className="company-text">
          <h2>Our company</h2>
          <blockquote>
            <p>{company.motto}</p>
            <footer>
              {company.ceo.name}
              <span>{company.ceo.role}</span>
            </footer>
          </blockquote>
          <p>
            The Translog Group was founded in {company.founded}, with facilities in the Czech Republic
            and Poland. Interdisciplinary know-how and diversified equipment let us react to
            individual requests immediately — we are available 24/7 and deliver Just in Time.
          </p>
        </div>
        <div className="company-side">
          <div className="company-photo">
            <img src={images.valley} alt="Truck on a mountain road at dusk, seen from above" loading="lazy" />
          </div>
          <div className="network">
            <h3>{partnerNetwork.title}</h3>
            <p>{partnerNetwork.text}</p>
          </div>
          <div className="office-pair">
            {offices.map((o) => (
              <div key={o.city} className="office">
                <h3>{o.city}</h3>
                <p>{o.entity}</p>
                {o.address.length > 0 && <p>{o.address.join(', ')}</p>}
                {o.address.length === 0 && <p>{o.phones.join(', ')}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsTeaser() {
  const a = news[0]
  return (
    <section className="section section-steel">
      <div className="wrap news-teaser">
        <div className="section-head">
          <h2>News</h2>
          <a className="link-arrow" href={href('news')}>All news</a>
        </div>
        <a className="news-card" href={href(`news/${a.slug}`)}>
          <img src={a.image} alt="" loading="lazy" />
          <div>
            <time dateTime={a.date}>{new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </div>
        </a>
      </div>
    </section>
  )
}

function QuoteBlock() {
  return (
    <section id="quote-block" className="section quote-block" style={{ '--bg': `url(${images.night})` }}>
      <div className="wrap quote-grid">
        <div>
          <h2>Tell us where the load goes</h2>
          <p>
            Send the loading and unloading places and what you ship. We are available 24/7 and
            reply as soon as possible, even at short notice.
          </p>
          <p className="quote-direct">
            Or call <a href={`tel:${company.phoneMain.replace(/\s/g, '')}`}>{company.phoneMain}</a>
          </p>
        </div>
        <QuoteForm id="quote-home" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <SpecPlate />
      <Services />
      <Fleet />
      <Company />
      <NewsTeaser />
      <QuoteBlock />
    </>
  )
}
