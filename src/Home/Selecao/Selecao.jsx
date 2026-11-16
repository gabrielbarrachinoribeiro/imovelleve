import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { properties } from '../../data/properties'

function Selecao() {
  const [favorites, setFavorites] = useState([])

  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id)
      ? current.filter((favorite) => favorite !== id)
      : [...current, id])
  }

  return (
    <section id="imoveis" aria-labelledby="selecao-title" className="bg-[#FAF9F6] py-12 text-[#0A0D12] sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-9 flex flex-col items-start justify-between gap-6 sm:mb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] leading-4 font-semibold tracking-[0.24em] uppercase text-[#C64400]">Seleção Imovel Leve</p>
            <h2 id="selecao-title" className="max-w-xl text-3xl leading-[1.1] font-bold tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Espaços que combinam<br className="hidden sm:block" /> com você.
            </h2>
          </div>
          <a href="/imoveis" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#0A0D12]/20 px-5 py-2.5 text-sm leading-5 font-semibold transition-colors duration-300 hover:border-[#FA5700] hover:bg-[#FA5700] hover:text-white">
            Ver todos os imóveis
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div id="lista-imoveis" className="grid scroll-mt-6 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} favorite={favorites.includes(property.id)} onToggleFavorite={() => toggleFavorite(property.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Selecao
