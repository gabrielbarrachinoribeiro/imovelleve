import { Bath, BedDouble, CarFront, Heart, MapPin, Scan } from 'lucide-react'

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


export default PropertyCard
