import { ArrowRight, Eye, HandHeart, KeyRound } from 'lucide-react'

const values = [
  {
    Icon: Eye,
    title: 'Transparência',
    description: 'Informação completa sobre metragem, condomínio, IPTU e comodidades — sem letras miúdas.',
  },
  {
    Icon: HandHeart,
    title: 'Acolhimento',
    description: 'Uma experiência calma, com linguagem clara e nenhuma pressa para decidir.',
  },
  {
    Icon: KeyRound,
    title: 'Curadoria',
    description: 'Poucos imóveis, escolhidos com critério, para que cada opção valha a sua visita.',
  },
]

function Sobre() {
  return (
    <main className="flex-1 bg-[#FAF9F6] py-12 text-[#0A0D12] sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <section aria-labelledby="sobre-title" className="grid items-center gap-8 md:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <p className="mb-5 text-[11px] leading-4 font-semibold tracking-[0.24em] uppercase text-[#C64400]">Sobre a Imovel Leve</p>
            <h1 id="sobre-title" className="max-w-2xl text-4xl leading-[1.06] font-bold tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Mais do que imóveis, novos começos.
            </h1>
            <div className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-[#0A0D12]/65">
              <p>A Imovel Leve é uma plataforma fictícia criada para um portfólio de desenvolvimento front-end. A ideia nasceu de uma pergunta simples: por que encontrar um lugar para morar ainda é tão cansativo?</p>
              <p>Reunimos poucos imóveis, com informação honesta e fotografias que mostram o espaço como ele é. O resultado é uma experiência de descoberta mais leve, silenciosa e transparente — do primeiro filtro até a visita.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] bg-[#EAE2D8]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
              alt="Interior residencial amplo, com luz natural e acabamentos em tons claros"
              width="1200"
              height="960"
              fetchPriority="high"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </section>

        <section aria-labelledby="valores-title" className="mt-12 border-t border-[#0A0D12]/10 pt-12 sm:mt-16 sm:pt-14 lg:mt-20 lg:pt-16">
          <h2 id="valores-title" className="max-w-xl text-3xl leading-[1.12] font-bold tracking-[-0.04em] sm:text-4xl">
            Os valores que guiam cada escolha.
          </h2>
          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3">
            {values.map(({ Icon, title, description }) => (
              <article key={title} className="rounded-[26px] border border-[#0A0D12]/10 bg-white p-6">
                <span className="mb-5 inline-flex rounded-full bg-[#FA5700]/10 p-3 text-[#FA5700]">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="text-base leading-6 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A0D12]/65">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="sobre-cta-title" className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[#0A0D12] p-7 text-white sm:mt-16 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 id="sobre-cta-title" className="text-xl leading-snug font-semibold tracking-[-0.02em] sm:text-2xl">Pronto para encontrar o seu?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">Explore a seleção completa de imóveis da Imovel Leve.</p>
          </div>
          <a href="/imoveis" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent bg-[#FA5700] px-5 py-2.5 text-sm leading-5 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0A0D12]">
            Explorar imóveis <ArrowRight size={20} aria-hidden="true" />
          </a>
        </section>
      </div>
    </main>
  )
}

export default Sobre
