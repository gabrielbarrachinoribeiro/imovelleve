import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'

const currentYear = new Date().getFullYear()

function Instagram() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}

function Facebook() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v3H7v4h3v8z" /></svg>
}

function Linkedin() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4.5" r="2" /><path d="M11 21V9h4v2c1-2 6-3 6 3v7h-4v-7c0-2-2-2-2 0v7z" /></svg>
}

const navigation = [
  {
    title: 'Explorar',
    links: [
      { label: 'Comprar', href: '/?finalidade=comprar#imoveis' },
      { label: 'Alugar', href: '/?finalidade=alugar#imoveis' },
      { label: 'Todos os imóveis', href: '/#imoveis' },
    ],
  },
  {
    title: 'Categorias',
    links: [
      { label: 'Apartamentos', href: '/?tipo=apartamento#imoveis' },
      { label: 'Casas', href: '/?tipo=casa#imoveis' },
      { label: 'Studios', href: '/?tipo=studio#imoveis' },
      { label: 'Coberturas', href: '/?tipo=cobertura#imoveis' },
    ],
  },
  {
    title: 'Imóvelleve',
    links: [{ label: 'Sobre nós', href: '/#sobre' }],
  },
]

const socialLinks = [
  { label: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/' },
  { label: 'Facebook', Icon: Facebook, href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://www.linkedin.com/' },
]

const linkClass = 'rounded-sm text-sm leading-6 text-white/65 transition-colors duration-300 hover:text-[#FF965E]'
const titleClass = 'mb-4 text-xs leading-5 font-semibold uppercase tracking-[0.15em] text-[#FF965E]'

function Footer() {
  return (
    <footer className="bg-[#0A0D12] pt-14 pb-8 text-white sm:pt-16 sm:pb-10 lg:pt-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr] lg:gap-12 xl:gap-16">
          <div>
            <a href="/" aria-label="Imóvelleve — início" className="inline-block rounded-sm">
              <img src={logo} alt="Imóvelleve" className="block w-44 brightness-0 invert" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Uma plataforma fictícia criada para tornar a busca pelo próximo lar mais simples, transparente e agradável — do primeiro filtro à visita.
            </p>
            <nav aria-label="Redes sociais" className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre em nova aba)`} className="inline-flex items-center justify-center rounded-full border border-white/20 p-2.5 text-white/75 transition-colors duration-300 hover:border-[#FA5700] hover:bg-[#FA5700] hover:text-white">
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3">
            {navigation.map(({ title, links }) => (
              <nav key={title} aria-label={title}>
                <h2 className={titleClass}>{title}</h2>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}><a href={href} className={linkClass}>{label}</a></li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="col-span-2 sm:col-span-3">
              <h2 className={titleClass}>Contato</h2>
              <address className="space-y-3 text-sm leading-6 text-white/65 not-italic">
                <p className="flex items-start gap-2.5">
                  <MapPin size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-white/45" aria-hidden="true" />
                  <span>Rua das Palmeiras, 120 —<br />São Paulo, SP</span>
                </p>
                <p>
                  <a href="tel:+551140028922" className={`${linkClass} inline-flex items-center gap-2.5`}>
                    <Phone size={17} strokeWidth={1.6} aria-hidden="true" />
                    (11) 4002-8922
                  </a>
                </p>
                <p>
                  <a href="mailto:ola@imovelleve.example" className={`${linkClass} inline-flex items-center gap-2.5 break-all`}>
                    <Mail size={17} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
                    ola@imovelleve.example
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-white/45 sm:mt-14 md:flex-row md:gap-8">
          <p>© {currentYear} Imóvelleve. Projeto fictício para portfólio.</p>
          <p>Todos os imóveis, valores e contatos apresentados são ilustrativos.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
