import { useEffect, useState } from 'react'
import { ChevronDown, RotateCcw, Search, SlidersHorizontal } from 'lucide-react'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { properties } from '../../data/properties'
import { emptyFilters, filterProperties, readFilters } from './filters'
import SortDropdown from './SortDropdown'

const fieldClass = 'w-full min-w-0 rounded-xl border border-[#0A0D12]/15 bg-white px-3 py-2.5 text-sm leading-5 transition-colors duration-300 placeholder:text-[#0A0D12]/45 focus:border-[#FA5700] focus:outline-none'
const labelClass = 'mb-2 block text-[10px] leading-4 font-semibold uppercase tracking-[0.15em] text-[#0A0D12]/65'

function MinimumOptions({ label, value, onChange }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="flex flex-wrap gap-1.5">
        {['', '1', '2', '3', '4'].map((option) => (
          <button key={option} type="button" aria-pressed={value === option} onClick={() => onChange(option)} className={`rounded-full border px-3 py-1.5 text-xs leading-4 transition-colors duration-300 ${value === option ? 'border-[#FA5700] bg-[#FA5700] text-white' : 'border-[#0A0D12]/15 text-[#0A0D12]/65 hover:border-[#FA5700] hover:text-[#FA5700]'}`}>
            {option ? `${option}+` : 'Qualquer'}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

function RangeFields({ label, minValue, maxValue, onMinChange, onMaxChange }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" min="0" value={minValue} onChange={(event) => onMinChange(event.target.value)} placeholder="Mínimo" aria-label={`${label} mínimo`} className={fieldClass} />
        <input type="number" min="0" value={maxValue} onChange={(event) => onMaxChange(event.target.value)} placeholder="Máximo" aria-label={`${label} máximo`} className={fieldClass} />
      </div>
    </fieldset>
  )
}

function Imoveis() {
  const [filters, setFilters] = useState(readFilters)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [favorites, setFavorites] = useState([])
  const results = filterProperties(properties, filters)
  const title = filters.finalidade === 'comprar' ? 'Imóveis para comprar'
    : filters.finalidade === 'alugar' ? 'Imóveis para alugar' : 'Encontre seu próximo lugar.'

  useEffect(() => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== emptyFilters[key]) params.set(key, value)
    }
    const query = params.toString()
    window.history.replaceState(null, '', `/imoveis${query ? `?${query}` : ''}`)
    document.title = `${title} | Imovel Leve`
  }, [filters, title])

  function update(key, value) {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <main className="flex-1 bg-[#FAF9F6] py-12 text-[#0A0D12] sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-9 sm:mb-12">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C64400]">Explorar</p>
          <h1 className="text-3xl leading-[1.1] font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#0A0D12]/65">Combine filtros para encontrar o imóvel que combina com o seu momento — sem pressa, no seu ritmo.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <div className="lg:sticky lg:top-[calc(var(--header-height,82px)+24px)] lg:max-h-[calc(100dvh-var(--header-height,82px)-48px)] lg:overflow-y-auto lg:overscroll-contain">
            <button type="button" aria-expanded={filtersOpen} aria-controls="property-filters" onClick={() => setFiltersOpen(!filtersOpen)} className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0A0D12]/15 bg-white px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-[#FA5700] hover:text-[#FA5700] lg:hidden">
              <SlidersHorizontal size={18} aria-hidden="true" /> {filtersOpen ? 'Ocultar filtros' : 'Filtrar imóveis'}
            </button>
            <aside id="property-filters" aria-label="Filtros de imóveis" className={`${filtersOpen ? 'block' : 'hidden'} rounded-3xl border border-[#0A0D12]/10 bg-white p-5 lg:block`}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold tracking-[0.08em] uppercase">Filtros</h2>
                <button type="button" onClick={() => setFilters({ ...emptyFilters })} className="inline-flex items-center gap-1.5 text-xs text-[#0A0D12]/60 transition-colors duration-300 hover:text-[#FA5700]"><RotateCcw size={14} aria-hidden="true" /> Limpar</button>
              </div>
              <div className="flex flex-col gap-6">
                <div role="group" aria-label="Finalidade" className="flex rounded-full bg-[#0A0D12]/5 p-1">
                  {[['', 'Tudo'], ['comprar', 'Comprar'], ['alugar', 'Alugar']].map(([value, label]) => (
                    <button key={value} type="button" aria-pressed={filters.finalidade === value} onClick={() => update('finalidade', value)} className={`flex-1 rounded-full px-2 py-2 text-xs font-semibold transition-colors duration-300 ${filters.finalidade === value ? 'bg-[#FA5700] text-white' : 'text-[#0A0D12]/55 hover:text-[#FA5700]'}`}>{label}</button>
                  ))}
                </div>
                <label><span className={labelClass}>Cidade ou bairro</span><input type="search" value={filters.localizacao} onChange={(event) => update('localizacao', event.target.value)} placeholder="Ex.: Pinheiros" className={fieldClass} /></label>
                <label>
                  <span className={labelClass}>Tipo de imóvel</span>
                  <span className="relative block"><select value={filters.tipo} onChange={(event) => update('tipo', event.target.value)} className={`${fieldClass} appearance-none pr-9`}><option value="">Todos os tipos</option><option value="apartamento">Apartamento</option><option value="casa">Casa</option><option value="studio">Studio</option><option value="cobertura">Cobertura</option></select><ChevronDown size={16} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#0A0D12]/45" aria-hidden="true" /></span>
                </label>
                <RangeFields label="Preço (R$)" minValue={filters.precoMin} maxValue={filters.precoMax} onMinChange={(value) => update('precoMin', value)} onMaxChange={(value) => update('precoMax', value)} />
                <MinimumOptions label="Quartos" value={filters.quartos} onChange={(value) => update('quartos', value)} />
                <MinimumOptions label="Banheiros" value={filters.banheiros} onChange={(value) => update('banheiros', value)} />
                <MinimumOptions label="Vagas" value={filters.vagas} onChange={(value) => update('vagas', value)} />
                <RangeFields label="Área (m²)" minValue={filters.areaMin} maxValue={filters.areaMax} onMinChange={(value) => update('areaMin', value)} onMaxChange={(value) => update('areaMax', value)} />
              </div>
            </aside>
          </div>

          <div className="min-w-0">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-[#0A0D12]/10 pb-5 sm:flex-row sm:items-center">
              <p aria-live="polite" aria-atomic="true" className="text-sm text-[#0A0D12]/60"><strong className="font-semibold text-[#0A0D12]">{results.length}</strong> {results.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}</p>
              <SortDropdown value={filters.ordem} onChange={(value) => update('ordem', value)} />
            </div>
            {results.length ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((property) => <PropertyCard key={property.id} property={property} favorite={favorites.includes(property.id)} onToggleFavorite={() => toggleFavorite(property.id)} />)}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-[#0A0D12]/15 px-6 py-16 text-center">
                <Search size={30} className="mx-auto text-[#FA5700]" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold">Nenhum imóvel por aqui ainda.</h2>
                <p className="mt-2 text-sm text-[#0A0D12]/60">Experimente ajustar os filtros para descobrir outros espaços.</p>
                <button type="button" onClick={() => setFilters({ ...emptyFilters })} className="mt-6 rounded-full bg-[#FA5700] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#D94B00]">Limpar filtros</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Imoveis
