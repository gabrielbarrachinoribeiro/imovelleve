import { useState } from 'react'
import { ArrowRight, Bath, BedDouble, CarFront, Heart, MapPin, Scan } from 'lucide-react'

const properties = [
  { id: 'moema', name: 'Apartamento Moema', type: 'Apartamento', location: 'Moema, São Paulo', price: 960000, bedrooms: 3, bathrooms: 2, parking: 2, area: 118, image: '1600047509807-ba8f99d2cdde', alt: 'Ambiente residencial contemporâneo com iluminação natural' },
  { id: 'barra', name: 'Casa na Barra da Tijuca', type: 'Casa', location: 'Barra da Tijuca, Rio de Janeiro', price: 1680000, bedrooms: 4, bathrooms: 4, parking: 3, area: 260, image: '1600573472591-ee6b68d14c68', alt: 'Casa com espaços amplos e decoração em tons claros' },
  { id: 'jardins', name: 'Apartamento Jardins', type: 'Apartamento', location: 'Jardins, São Paulo', price: 780000, bedrooms: 3, bathrooms: 2, parking: 2, area: 132, image: '1600210492486-724fe5c67fb0', alt: 'Sala de estar clara com sofá e decoração em tons naturais' },
  { id: 'pinheiros', name: 'Casa Alto de Pinheiros', type: 'Casa', location: 'Alto de Pinheiros, São Paulo', price: 1250000, bedrooms: 4, bathrooms: 3, parking: 2, area: 245, image: '1600596542815-ffad4c1539a9', alt: 'Casa contemporânea com jardim e grandes janelas' },
  { id: 'itaim', name: 'Cobertura Itaim Bibi', type: 'Cobertura', location: 'Itaim Bibi, São Paulo', price: 1950000, bedrooms: 3, bathrooms: 4, parking: 3, area: 210, image: '1600607687920-4e2a09cf159d', alt: 'Ambiente residencial amplo com acabamentos contemporâneos' },
  { id: 'jurere', name: 'Casa em Jurerê', type: 'Casa', location: 'Jurerê, Florianópolis', price: 1180000, bedrooms: 4, bathrooms: 3, parking: 2, area: 190, image: '1613490493576-7fde63acd811', alt: 'Casa moderna com piscina e área externa para relaxar' },
  { id: 'leblon', name: 'Cobertura no Leblon', type: 'Cobertura', location: 'Leblon, Rio de Janeiro', price: 2400000, bedrooms: 4, bathrooms: 5, parking: 3, area: 285, image: '1600607687939-ce8a6c25118c', alt: 'Interior elegante com espaço de convivência integrado' },
  { id: 'vila-madalena', name: 'Apartamento Vila Madalena', type: 'Apartamento', location: 'Vila Madalena, São Paulo', price: 2900, bedrooms: 2, bathrooms: 2, parking: 1, area: 92, rent: true, image: '1600566753086-00f18fb6b3ea', alt: 'Apartamento iluminado com decoração acolhedora' },
]

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', maximumFractionDigits: 0,
})

function PropertyCard({ property, favorite, onToggleFavorite }) {
  const features = [
    { Icon: BedDouble, value: property.bedrooms, label: 'quartos' },
    { Icon: Bath, value: property.bathrooms, label: 'banheiros' },
    { Icon: CarFront, value: property.parking, label: 'vagas de garagem' },
    { Icon: Scan, value: `${property.area} m²`, label: 'de área' },
  ]

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#0A0D12]/10 bg-white transition-colors duration-300 hover:border-[#FA5700]/60 focus-within:border-[#FA5700]">
      <div className="relative aspect-4/3 overflow-hidden bg-[#EAE2D8]">
        <img
          src={`https://images.unsplash.com/photo-${property.image}?auto=format&fit=crop&w=900&q=80`}
          alt={property.alt}
          loading="lazy"
          decoding="async"
          width="900"
          height="675"
          className="size-full object-cover transform-[scale(1)] transition-[transform] duration-300 ease-in-out group-hover:transform-[scale(1.05)]"
        />
        <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] leading-4 font-semibold tracking-[0.08em] uppercase ${property.rent ? 'bg-[#FFE4D5] text-[#0A0D12]' : 'bg-[#FA5700] text-white'}`}>
          {property.rent ? 'Novo' : 'Destaque'}
        </span>
        <button
          type="button"
          aria-label={`${favorite ? 'Remover' : 'Adicionar'} ${property.name} ${favorite ? 'dos' : 'aos'} favoritos`}
          aria-pressed={favorite}
          onClick={onToggleFavorite}
          className={`absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full border border-transparent bg-white p-2.5 transition-colors duration-300 hover:bg-[#FFF0E7] hover:text-[#FA5700] ${favorite ? 'text-[#FA5700]' : 'text-[#0A0D12]'}`}
        >
          <Heart size={20} strokeWidth={1.7} fill={favorite ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] leading-4 font-medium tracking-[0.14em] uppercase text-[#0A0D12]/60">
          {property.rent ? 'Aluguel' : 'Venda'} · {property.type}
        </p>
        <h3 className="mt-2 text-lg leading-snug font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#FA5700]">
          <a href={`/imoveis/${property.id}`} className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:after:rounded-[28px] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-[#FA5700]">
            {property.name}
          </a>
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm leading-5 text-[#0A0D12]/65">
          <MapPin size={15} strokeWidth={1.7} className="mt-0.5 shrink-0" aria-hidden="true" />
          {property.location}
        </p>
        <div className="mt-auto pt-5">
          <div className="border-t border-[#0A0D12]/10 pt-4">
            <p className="text-xl leading-7 font-bold tracking-[-0.03em]">
              {currency.format(property.price)}
              {property.rent && <span className="ml-1 text-xs font-normal tracking-normal text-[#0A0D12]/65">/mês</span>}
            </p>
            <ul aria-label="Características do imóvel" className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs leading-4 text-[#0A0D12]/75">
              {features.map(({ Icon, value, label }) => (
                <li key={label} className="flex items-center gap-1.5" aria-label={`${value} ${label}`}>
                  <Icon size={15} strokeWidth={1.5} className="text-[#0A0D12]/50" aria-hidden="true" />
                  <span aria-hidden="true">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

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
            <p className="mb-4 text-[11px] leading-4 font-semibold tracking-[0.24em] uppercase text-[#C64400]">Seleção Imóvelleve</p>
            <h2 id="selecao-title" className="max-w-xl text-3xl leading-[1.1] font-bold tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Espaços que combinam<br className="hidden sm:block" /> com você.
            </h2>
          </div>
          <a href="#lista-imoveis" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#0A0D12]/20 px-5 py-2.5 text-sm leading-5 font-semibold transition-colors duration-300 hover:border-[#FA5700] hover:bg-[#FA5700] hover:text-white">
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
