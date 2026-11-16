import { useState } from 'react'
import { ArrowUpRight, HousePlus, MapPin, Pause, Pencil, Play } from 'lucide-react'
import { properties } from '../../data/properties'
import ContaLayout, { primaryButton, secondaryButton } from './ContaLayout'

const demoListings = properties.slice(0, 3)
const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

function MeusAnuncios() {
  const [paused, setPaused] = useState(['jardins'])
  function toggle(id) { setPaused((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]) }
  return (
    <ContaLayout title="Meus anúncios" description="Acompanhe seus imóveis e prepare o próximo encontro entre um espaço e uma nova história." action={<a href="/anunciar" className={`${primaryButton} shrink-0`}><HousePlus size={18} aria-hidden="true" /> Novo anúncio</a>}>
      <div className="mb-7 grid grid-cols-3 gap-3">
        {[['Total de anúncios', 3], ['Publicados', 3 - paused.length], ['Pausados', paused.length]].map(([label, value]) => <div key={label} className="rounded-2xl border border-[#0A0D12]/10 bg-white p-4 sm:p-5"><p className="text-2xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs leading-relaxed text-[#0A0D12]/55">{label}</p></div>)}
      </div>
      <div className="space-y-4">
        {demoListings.map((property) => {
          const isPaused = paused.includes(property.id)
          return <article key={property.id} className="flex flex-col gap-5 rounded-3xl border border-[#0A0D12]/10 bg-white p-4 sm:flex-row sm:items-center sm:p-5">
            <img src={`https://images.unsplash.com/photo-${property.image}?auto=format&fit=crop&w=500&q=80`} alt={property.alt} width="500" height="375" className="aspect-[4/3] w-full rounded-2xl object-cover sm:w-36" loading="lazy" />
            <div className="min-w-0 flex-1"><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${isPaused ? 'bg-[#0A0D12]/5 text-[#0A0D12]/50' : 'bg-[#FFF0E7] text-[#C64400]'}`}>{isPaused ? 'Pausado' : 'Publicado'}</span><h2 className="mt-2 text-lg font-semibold">{property.name}</h2><p className="mt-1 flex items-start gap-1 text-xs leading-5 text-[#0A0D12]/55"><MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />{property.location}</p><p className="mt-2 text-base font-bold">{money.format(property.price)}</p>
              <div className="mt-4 flex flex-wrap gap-2"><a href={`/anunciar?editar=${property.id}`} className={secondaryButton}><Pencil size={15} aria-hidden="true" /> Editar</a><button type="button" onClick={() => toggle(property.id)} className={secondaryButton}>{isPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}{isPaused ? 'Retomar' : 'Pausar'}</button><a href={`/imoveis/${property.id}`} aria-label={`Ver ${property.name}`} className={secondaryButton}><ArrowUpRight size={16} aria-hidden="true" /> Ver</a></div>
            </div>
          </article>
        })}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-[#0A0D12]/45">Anúncios de demonstração. As mudanças de status são apenas visuais.</p>
    </ContaLayout>
  )
}

export default MeusAnuncios
