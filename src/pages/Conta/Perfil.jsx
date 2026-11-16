import { useState } from 'react'
import { Save } from 'lucide-react'
import ContaLayout, { DemoNotice, Field, panelClass, primaryButton } from './ContaLayout'

function Perfil() {
  const [message, setMessage] = useState('')
  return (
    <ContaLayout title="Meu perfil" description="Um espaço para cuidar dos seus dados e deixar sua experiência com a sua cara.">
      <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); setMessage('Demonstração: suas alterações não foram enviadas nem salvas.') }}>
        <section className={panelClass} aria-labelledby="dados-title">
          <div className="mb-7 flex items-center gap-4"><span className="inline-flex size-16 items-center justify-center rounded-full bg-[#FFF0E7] text-xl font-bold text-[#FA5700]">GA</span><div><h2 id="dados-title" className="text-lg font-semibold">Informações pessoais</h2><p className="mt-1 text-sm text-[#0A0D12]/50">Como podemos chamar você?</p></div></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" name="name" defaultValue="Gabriel" autoComplete="given-name" required />
            <Field label="Sobrenome" name="surname" placeholder="Seu sobrenome" autoComplete="family-name" />
            <Field label="E-mail" name="email" type="email" defaultValue="gabriel@exemplo.com" autoComplete="email" required />
            <Field label="Telefone" name="phone" type="tel" placeholder="(11) 99999-9999" autoComplete="tel" />
          </div>
        </section>
        <section className={panelClass} aria-labelledby="preferencias-title">
          <h2 id="preferencias-title" className="text-lg font-semibold">Suas preferências</h2>
          <p className="mt-2 text-sm text-[#0A0D12]/55">Escolha o que faz sentido para o seu momento.</p>
          <div className="mt-5 space-y-4">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed"><input type="checkbox" defaultChecked className="mt-1 size-4 accent-[#FA5700]" /><span>Receber novidades de imóveis<span className="block text-xs text-[#0A0D12]/50">Novas opções para inspirar o seu próximo passo.</span></span></label>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed"><input type="checkbox" className="mt-1 size-4 accent-[#FA5700]" /><span>Receber dicas e conteúdos da Imovel Leve</span></label>
          </div>
        </section>
        {message && <DemoNotice>{message}</DemoNotice>}
        <div className="flex justify-end"><button className={primaryButton} type="submit"><Save size={18} aria-hidden="true" /> Salvar alterações</button></div>
      </form>
    </ContaLayout>
  )
}

export default Perfil
