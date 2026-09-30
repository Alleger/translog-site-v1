import { useRoute } from './router.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicePage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { services, news } from './content.js'

function resolve(path) {
  if (path === '') return <Home />
  if (path === 'contacts') return <ContactsPage />
  if (path === 'news') return <NewsPage />
  const [section, slug] = path.split('/')
  if (section === 'services') {
    const s = services.find((x) => x.slug === slug)
    if (s) return <ServicePage service={s} />
  }
  if (section === 'news') {
    const a = news.find((x) => x.slug === slug)
    if (a) return <ArticlePage article={a} />
  }
  return <NotFound />
}

export default function App() {
  const { path } = useRoute()
  return (
    <>
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.focus()
        }}
      >
        Skip to content
      </a>
      <Header path={path} />
      <main id="main" tabIndex={-1} className={path === '' ? undefined : 'below-header'}>{resolve(path)}</main>
      <Footer />
    </>
  )
}
