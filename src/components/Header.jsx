import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { Chevron, PhoneIcon } from './Icons.jsx'
import { href } from '../router.js'
import { company, services } from '../content.js'

export default function Header({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const overHero = path === '' && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // закрыть меню при переходе на другую страницу
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [path])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const tel = company.phoneMain.replace(/\s/g, '')
  const isActive = (p) => (path === p || path.startsWith(p + '/') ? 'active' : undefined)

  return (
    <header className={`site-header ${overHero ? 'over-hero' : 'solid'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="wrap header-row">
        <a href={href()} className="header-logo" aria-label="Translog Company — home">
          <Logo light={overHero || menuOpen} />
        </a>

        <nav className="main-nav" aria-label="Main">
          <ul>
            <li
              className="has-drop"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={isActive('services')}
                aria-expanded={servicesOpen}
                aria-controls="services-drop"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services <Chevron />
              </button>
              <div id="services-drop" className={`drop ${servicesOpen ? 'open' : ''}`}>
                <div className="drop-inner">
                  {services.map((s) => (
                    <a key={s.slug} href={href(`services/${s.slug}`)} className="drop-item">
                      <strong>{s.title}</strong>
                      <span>{s.short}</span>
                    </a>
                  ))}
                  <a href={href('', 'capabilities')} className="drop-item muted">
                    <strong>All services</strong>
                    <span>Local freight, delivery, warehousing and special cargo.</span>
                  </a>
                </div>
              </div>
            </li>
            <li><a href={href('', 'fleet')}>Fleet</a></li>
            <li><a href={href('', 'company')}>Company</a></li>
            <li><a href={href('news')} className={isActive('news')}>News</a></li>
            <li><a href={href('contacts')} className={isActive('contacts')}>Contacts</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${tel}`}>
            <PhoneIcon /> <span>{company.phoneMain}</span>
          </a>
          <a className="btn btn-signal btn-sm" href={href('contacts', 'quote')}>Request a quote</a>
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} hidden={!menuOpen}>
        <div className="wrap">
          <p className="mobile-group">Services</p>
          {services.map((s) => (
            <a key={s.slug} href={href(`services/${s.slug}`)}>{s.title}</a>
          ))}
          <a href={href('', 'capabilities')}>All services</a>
          <p className="mobile-group">Translog</p>
          <a href={href('', 'fleet')}>Fleet</a>
          <a href={href('', 'company')}>Company</a>
          <a href={href('news')}>News</a>
          <a href={href('contacts')}>Contacts</a>
          <a className="btn btn-signal" href={href('contacts', 'quote')}>Request a quote</a>
          <a className="mobile-phone" href={`tel:${tel}`}><PhoneIcon /> {company.phoneMain}</a>
        </div>
      </div>
    </header>
  )
}
