import { href } from '../router.js'
import { images } from '../content.js'

// Шапка внутренних страниц с «хлебными крошками»
export default function PageHead({ title, lead, trail = [], image = images.aerial }) {
  return (
    <section className="page-head" style={{ '--bg': `url(${image})` }}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumbs">
          <a href={href()}>Home</a>
          {trail.map((t) => (
            <span key={t.label}>
              <span aria-hidden="true">/</span>
              {t.path !== undefined ? <a href={href(t.path, t.anchor)}>{t.label}</a> : t.label}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
    </section>
  )
}
