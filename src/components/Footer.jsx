import Logo from './Logo.jsx'
import { href } from '../router.js'
import { company, offices, services } from '../content.js'
import { InstagramIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="lane" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{company.tagline}</p>
          <a className="footer-social" href={company.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon /> translog.company.sro
          </a>
        </div>

        <div>
          <h2 className="footer-h">Services</h2>
          <ul className="footer-list">
            {services.map((s) => (
              <li key={s.slug}><a href={href(`services/${s.slug}`)}>{s.title}</a></li>
            ))}
            <li><a href={href('', 'capabilities')}>All services</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Company</h2>
          <ul className="footer-list">
            <li><a href={href('', 'company')}>About us</a></li>
            <li><a href={href('', 'fleet')}>Fleet</a></li>
            <li><a href={href('news')}>News</a></li>
            <li><a href={href('contacts')}>Contacts</a></li>
            <li><a href="https://translogcompany.com/privacy-policy/">General conditions</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Get in touch</h2>
          <ul className="footer-list contact">
            <li><a href={`tel:${company.phoneMain.replace(/\s/g, '')}`}><PhoneIcon /> {company.phoneMain}</a></li>
            <li><a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a></li>
          </ul>
          {offices.filter((o) => o.address.length).map((o) => (
            <p key={o.city} className="footer-office">
              <strong>{o.city}</strong> {o.address.join(', ')}
            </p>
          ))}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Translog Polska Company sp. z o.o.</span>
      </div>
    </footer>
  )
}
