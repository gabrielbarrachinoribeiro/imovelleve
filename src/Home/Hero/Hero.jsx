import { useState } from 'react'
import { ChevronDown, MapPin, Search } from 'lucide-react'
import imgHero from '../../assets/imgHero.png'

function Hero() {
  const [purpose, setPurpose] = useState('comprar')

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100dvh-var(--header-height,82px))] flex-none text-white">
      <img
        src={imgHero}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[60%_center] lg:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-[#0A0D12]/45 via-[#0A0D12]/40 to-[#0A0D12]/80" />

      <div className="container mx-auto flex flex-col px-6">
        <div className="flex flex-1 flex-col pb-6 sm:pb-10">
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-12">
            <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FFAD80] sm:mb-7 sm:text-[11px]">
              <span aria-hidden="true" className="w-5 border-t border-current/50 sm:w-8" />
              Seu próximo lugar começa aqui
              <span aria-hidden="true" className="w-5 border-t border-current/50 sm:w-8" />
            </p>
            <h1 id="hero-title" className="max-w-4xl text-4xl leading-[1.06] font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Encontre um lugar<br className="hidden sm:block" /> para chamar de seu.
            </h1>
            <p className="mt-6 max-w-135 text-base leading-relaxed text-white/85 sm:text-lg">
              Explore imóveis selecionados para cada momento da sua vida. Seu novo lar está mais perto do que você imagina.
            </p>
          </div>

          <form action="/#imoveis" method="get" aria-label="Buscar imóveis" className="grid grid-cols-1 items-stretch gap-3 rounded-3xl bg-[#FAF9F6] p-4 text-[#0A0D12] shadow-xl shadow-black/10 sm:grid-cols-2 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-2">
            <input type="hidden" name="finalidade" value={purpose} />
            <div role="group" aria-label="Finalidade do imóvel" className="flex rounded-2xl bg-[#0A0D12]/4 p-1 sm:col-span-2 lg:col-span-1">
              {['comprar', 'alugar'].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={purpose === value}
                  onClick={() => setPurpose(value)}
                  className={`flex-1 rounded-xl px-4 py-3.5 text-sm leading-5 font-semibold transition-colors duration-200 ${purpose === value ? 'bg-[#FA5700] text-white' : 'text-[#0A0D12]/60 hover:bg-[#0A0D12]/5 hover:text-[#0A0D12]'}`}
                >
                  {value === 'comprar' ? 'Comprar' : 'Alugar'}
                </button>
              ))}
            </div>

            <label className="flex min-w-0 flex-col justify-center gap-1 rounded-2xl border border-[#0A0D12]/15 px-4 py-2.5 transition-colors duration-200 focus-within:border-[#FA5700] hover:border-[#0A0D12]/35">
              <span className="text-[10px] leading-4 font-semibold uppercase tracking-[0.18em] text-[#0A0D12]/65">Onde</span>
              <span className="flex items-center gap-2">
                <MapPin size={17} strokeWidth={1.7} className="shrink-0 text-[#0A0D12]/45" aria-hidden="true" />
                <input type="search" name="localizacao" placeholder="Cidade ou bairro" autoComplete="address-level2" className="min-w-0 w-full border-0 bg-transparent text-sm leading-5 text-[#0A0D12] outline-none focus-visible:outline-none placeholder:text-[#0A0D12]/50" />
              </span>
            </label>

            <label className="relative flex min-w-0 flex-col justify-center gap-1 rounded-2xl border border-[#0A0D12]/15 px-4 py-2.5 transition-colors duration-200 focus-within:border-[#FA5700] hover:border-[#0A0D12]/35">
              <span className="text-[10px] leading-4 font-semibold uppercase tracking-[0.18em] text-[#0A0D12]/65">Tipo</span>
              <select name="tipo" defaultValue="" className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-sm leading-5 outline-none">
                <option value="">Todos os tipos</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="studio">Studio</option>
                <option value="cobertura">Cobertura</option>
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-4 bottom-3 text-[#0A0D12]/50" aria-hidden="true" />
            </label>

            <button type="submit" className="flex items-center justify-center gap-2 rounded-2xl bg-[#FA5700] px-6 py-4 text-sm leading-5 font-semibold text-white transition-colors duration-200 hover:bg-[#D94B00] sm:col-span-2 lg:col-span-1">
              <Search size={18} strokeWidth={1.8} aria-hidden="true" />
              Buscar imóveis
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
