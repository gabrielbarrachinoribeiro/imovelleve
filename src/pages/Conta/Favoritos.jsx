import { useState } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { properties } from '../../data/properties'
import ContaLayout, { panelClass, primaryButton } from './ContaLayout'

function Favoritos() {
  const [favorites, setFavorites] = useState(['jardins', 'jurere', 'vila-madalena'])
  const selected = properties.filter((property) => favorites.includes(property.id))
  return (
    <ContaLayout title="Meus favoritos" description="Aqueles lugares que fizeram você imaginar uma nova vida. Reúna suas escolhas por aqui.">
      <p aria-live="polite" className="mb-5 text-sm text-[#0A0D12]/55">{selected.length} {selected.length === 1 ? 'imóvel salvo' : 'imóveis salvos'} · seleção demonstrativa</p>
      {selected.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{selected.map((property) => <PropertyCard key={property.id} property={property} favorite onToggleFavorite={() => setFavorites((current) => current.filter((id) => id !== property.id))} />)}</div> : (
        <div className={`${panelClass} py-14 text-center`}><Heart size={32} className="mx-auto text-[#FA5700]" aria-hidden="true" /><h2 className="mt-5 text-xl font-semibold">Espaço para novas possibilidades.</h2><p className="mt-3 text-sm text-[#0A0D12]/60">Explore os imóveis e encontre seus próximos favoritos.</p><a href="/imoveis" className={`${primaryButton} mt-6`}>Explorar imóveis <ArrowRight size={18} aria-hidden="true" /></a></div>
      )}
    </ContaLayout>
  )
}

export default Favoritos
