import { href } from '../router.js'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap notfound">
        <h1>This page doesn’t exist</h1>
        <p>The link may be outdated. Start from the home page or contact us directly.</p>
        <a className="btn btn-signal" href={href()}>Go to home page</a>
      </div>
    </section>
  )
}
