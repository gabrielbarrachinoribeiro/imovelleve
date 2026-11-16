import { ArrowRight, Compass, KeyRound, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    Icon: Compass,
    title: 'Busca simplificada',
    description: 'Encontre imóveis de acordo com suas preferências, sem ruído e sem etapas desnecessárias.',
  },
  {
    Icon: ShieldCheck,
    title: 'Informações transparentes',
    description: 'Todos os detalhes importantes em um só lugar: metragem, condomínio, IPTU e comodidades.',
  },
  {
    Icon: KeyRound,
    title: 'Seu próximo passo',
    description: 'Entre em contato com facilidade para conhecer o imóvel no momento que fizer sentido.',
  },
]

function Diferenciais() {
  return (
    <section id="sobre" aria-labelledby="diferenciais-title" className="scroll-mt-24 bg-[#FAF9F6] py-12 text-[#0A0D12] sm:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_2fr] lg:gap-12 xl:gap-16">
          <div>
            <p className="mb-4 text-[11px] leading-4 font-semibold tracking-[0.24em] uppercase text-[#C64400]">
              Por que a Imóvelleve
            </p>
            <h2 id="diferenciais-title" className="max-w-lg text-3xl leading-[1.1] font-bold tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Menos ruído, mais decisões certeiras.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#0A0D12]/65 sm:text-base">
              Reunimos curadoria, informação clara e um atendimento próximo para que a escolha do próximo endereço seja leve do começo ao fim.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {benefits.map(({ Icon, title, description }) => (
              <article key={title} className="rounded-[26px] border border-[#0A0D12]/10 bg-white p-6">
                <span className="mb-6 inline-flex rounded-full bg-[#FA5700]/10 p-3 text-[#FA5700]">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="text-base leading-6 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A0D12]/65">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative isolate mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0D12] px-6 py-14 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-12 sm:py-16 lg:mt-20 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_100%_0%,rgba(250,87,0,0.2),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(250,87,0,0.08),transparent_50%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -top-44 -right-44 -z-10 size-[480px] rounded-full border border-[#FA5700]/15 p-12">
            <div className="size-full rounded-full border border-[#FA5700]/15 p-12">
              <div className="size-full rounded-full border border-[#FA5700]/15" />
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-44 -z-10 size-[440px] rounded-full border border-white/[0.06] p-12">
            <div className="size-full rounded-full border border-white/[0.06]" />
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] leading-4 font-semibold tracking-[0.2em] uppercase text-white/75 sm:text-[11px]">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-[#FA5700]" />
              Novos planos, novas possibilidades
            </p>
            <h2 className="text-3xl leading-[1.08] font-bold tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
              Seu próximo capítulo merece <span className="text-[#FF965E]">um novo endereço.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Descubra imóveis que combinam com seus planos e encontre o espaço ideal para viver.
            </p>
            <a href="#imoveis" className="group mt-9 inline-flex items-center justify-center gap-4 rounded-full border border-transparent bg-[#FA5700] px-5 py-2.5 text-sm leading-5 font-semibold text-white shadow-[0_8px_30px_-12px_rgba(250,87,0,0.6)] transition-[color,background-color,border-color,box-shadow] duration-300 ease-in-out hover:border-white hover:bg-white hover:text-[#0A0D12] hover:shadow-[0_8px_35px_-10px_rgba(250,87,0,0.45)] focus-visible:bg-white focus-visible:text-[#0A0D12]">
              Explorar imóveis
              <span className="border-l border-white/25 pl-4 text-white transition-colors duration-300 group-hover:border-[#0A0D12]/15 group-hover:text-[#FA5700] group-focus-visible:border-[#0A0D12]/15 group-focus-visible:text-[#FA5700]">
                <ArrowRight size={20} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
