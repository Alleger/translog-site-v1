import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { services } from '../content.js'

export default function ServicePage({ service: s }) {
  const others = services.filter((x) => x.slug !== s.slug)
  return (
    <>
      <PageHead title={s.title} lead={s.intro} trail={[{ label: 'Services', path: '', anchor: 'services' }, { label: s.title }]} />
      <section className="section">
        <div className="wrap service-detail">
          <div className="service-detail-media">
            <img src={s.image} alt="" />
          </div>
          <div>
            <h2>What you get</h2>
            <ul className="ticks">
              {s.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            {s.advantages.length > 0 && (
              <>
                <h2>Why Translog</h2>
                <ul className="ticks">
                  {s.advantages.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </>
            )}
            <div className="detail-cta">
              <a className="btn btn-signal" href={href('contacts', 'quote')}>Request a quote</a>
              {others.map((o) => (
                <a key={o.slug} className="link-arrow" href={href(`services/${o.slug}`)}>{o.title}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
