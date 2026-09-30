import PageHead from '../components/PageHead.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import { MailIcon, PhoneIcon } from '../components/Icons.jsx'
import { company, offices, images } from '../content.js'

const tel = (p) => `tel:${p.replace(/\s/g, '')}`

export default function ContactsPage() {
  return (
    <>
      <PageHead
        image={images.interchange}
        title="Contacts"
        lead="We are available 24/7. Call, write, or send a quote request with your route."
        trail={[{ label: 'Contacts' }]}
      />
      <section className="section">
        <div className="wrap contacts-grid">
          <div className="contacts-info">
            <div className="contact-direct">
              <a href={tel(company.phoneMain)}><PhoneIcon /> {company.phoneMain}</a>
              <a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a>
            </div>
            {offices.map((o) => (
              <div key={o.city} className="office-card">
                <h2>{o.city}{o.country && <span>{o.country}</span>}</h2>
                <p><strong>{o.entity}</strong></p>
                {o.address.length > 0 && <p>{o.address.map((l) => <span key={l}>{l}<br /></span>)}</p>}
                <p>
                  {o.phones.map((p) => (
                    <a key={p} href={tel(p)}>{p}<br /></a>
                  ))}
                </p>
                {o.address.length > 0 && <a
                  className="link-arrow"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address.join(', '))}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>}
              </div>
            ))}
          </div>
          <div className="contacts-form">
            <h2>Request a quote</h2>
            <QuoteForm id="quote" />
          </div>
        </div>
      </section>
    </>
  )
}
