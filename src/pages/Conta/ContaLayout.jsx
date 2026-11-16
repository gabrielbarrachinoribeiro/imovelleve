import { ArrowLeft, Heart, HousePlus, List, UserRound } from 'lucide-react'

const links = [
  { href: '/perfil', label: 'Meu perfil', Icon: UserRound },
  { href: '/favoritos', label: 'Meus favoritos', Icon: Heart },
  { href: '/meus-anuncios', label: 'Meus anúncios', Icon: List },
  { href: '/anunciar', label: 'Anunciar imóvel', Icon: HousePlus },
]

export const primaryButton = 'inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#FA5700] px-5 py-2.5 text-sm leading-5 font-semibold text-white transition-colors duration-300 hover:bg-[#D94B00]'
export const secondaryButton = 'inline-flex items-center justify-center gap-2 rounded-full border border-[#0A0D12]/15 bg-white px-5 py-2.5 text-sm leading-5 font-semibold transition-colors duration-300 hover:border-[#FA5700] hover:text-[#FA5700]'
export const panelClass = 'rounded-3xl border border-[#0A0D12]/10 bg-white p-6 sm:p-8'
export const inputClass = 'w-full rounded-xl border border-[#0A0D12]/15 bg-white px-4 py-3 text-sm leading-5 font-normal transition-colors duration-300 placeholder:text-[#0A0D12]/35 focus:border-[#FA5700] focus:outline-none'

export function Field({ label, children, ...props }) {
  return <label className="flex min-w-0 flex-col gap-2 text-sm font-medium">{label}{children || <input {...props} className={inputClass} />}</label>
}

export function DemoNotice({ children }) {
  return <p role="status" className="rounded-xl border border-[#FA5700]/15 bg-[#FFF5EE] px-4 py-3 text-sm leading-relaxed text-[#0A0D12]/70">{children}</p>
}

function ContaLayout({ title, description, action, children }) {
  return (
    <main className="flex-1 bg-[#FAF9F6] py-10 text-[#0A0D12] sm:py-14">
      <div className="container mx-auto px-6">
        <a href="/imoveis" className="mb-7 inline-flex items-center gap-2 text-sm text-[#0A0D12]/60 transition-colors duration-300 hover:text-[#FA5700]"><ArrowLeft size={16} aria-hidden="true" /> Explorar imóveis</a>
        <div className="grid items-start gap-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="rounded-3xl border border-[#0A0D12]/10 bg-white p-4 lg:sticky lg:top-[calc(var(--header-height,82px)+24px)]">
            <div className="mb-4 flex items-center gap-3 border-b border-[#0A0D12]/10 px-2 pt-2 pb-5">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FA5700] text-sm font-bold text-white">GA</span>
              <div><p className="text-sm font-semibold">Gabriel</p><p className="mt-1 text-xs text-[#0A0D12]/45">Seu espaço na Imovel Leve</p></div>
            </div>
            <nav aria-label="Área da conta" className="grid grid-cols-2 gap-1 lg:grid-cols-1">
              {links.map(({ href, label, Icon }) => {
                const active = window.location.pathname === href
                return <a key={href} href={href} aria-current={active ? 'page' : undefined} className={`flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-medium transition-colors duration-300 sm:text-sm ${active ? 'bg-[#FFF0E7] text-[#C64400]' : 'text-[#0A0D12]/65 hover:bg-[#FAF9F6] hover:text-[#FA5700]'}`}><Icon size={18} className="shrink-0" aria-hidden="true" />{label}</a>
              })}
            </nav>
          </aside>
          <div className="min-w-0">
            <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C64400]">Minha conta</p><h1 className="text-3xl leading-tight font-bold tracking-[-0.04em] sm:text-4xl">{title}</h1><p className="mt-3 max-w-xl text-sm leading-relaxed text-[#0A0D12]/60">{description}</p></div>
              {action}
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContaLayout
