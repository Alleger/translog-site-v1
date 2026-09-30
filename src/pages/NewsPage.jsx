import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { news } from '../content.js'

export const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function NewsPage() {
  return (
    <>
      <PageHead title="News" trail={[{ label: 'News' }]} />
      <section className="section">
        <div className="wrap news-list">
          {news.map((a) => (
            <a key={a.slug} className="news-card" href={href(`news/${a.slug}`)}>
              <img src={a.image} alt="" loading="lazy" />
              <div>
                <time dateTime={a.date}>{fmtDate(a.date)}</time>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
