import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { company } from '../content.js'
import { fmtDate } from './NewsPage.jsx'

export default function ArticlePage({ article: a }) {
  return (
    <>
      <PageHead title={a.title} trail={[{ label: 'News', path: 'news' }, { label: a.title }]} />
      <section className="section">
        <article className="wrap article">
          <time dateTime={a.date}>{fmtDate(a.date)}</time>
          <img src={a.image} alt="" />
          {a.body.map((p, i) => <p key={i}>{p}</p>)}
          <p className="byline">
            {company.ceo.name}<span>{company.ceo.role}</span>
          </p>
          <a className="link-arrow" href={href('news')}>Back to news</a>
        </article>
      </section>
    </>
  )
}
