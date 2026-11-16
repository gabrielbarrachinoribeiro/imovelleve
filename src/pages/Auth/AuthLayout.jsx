import { useState } from 'react'
import { ArrowLeft, ArrowRight, KeyRound } from 'lucide-react'

export function AuthField({ label, name, type = 'text', autoComplete, placeholder, minLength }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[#0A0D12]">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} minLength={minLength} required className="w-full rounded-xl border border-[#0A0D12]/15 bg-white px-4 py-3 text-base font-normal transition-colors duration-300 placeholder:text-[#0A0D12]/35 focus:border-[#FA5700] focus:outline-none" />
    </label>
  )
}

function AuthLayout({ title, description, submitLabel, children, footer }) {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Esta página é demonstrativa. Nenhum dado foi enviado ou salvo.')
  }

  return (
    <main className="flex flex-1 items-center bg-[#FAF9F6] py-12 text-[#0A0D12] sm:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-md">
          <a href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-[#0A0D12]/60 transition-colors duration-300 hover:text-[#FA5700]">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar para o início
          </a>
          <div className="rounded-[28px] border border-[#0A0D12]/10 bg-white p-6 sm:p-9">
            <span className="mb-5 inline-flex rounded-2xl bg-[#FA5700]/10 p-3 text-[#FA5700]">
              <KeyRound size={24} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h1 className="text-3xl font-bold tracking-[-0.04em]">{title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#0A0D12]/60">{description}</p>
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              {children}
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-[#FA5700] px-5 py-2.5 text-sm leading-5 font-semibold text-white transition-colors duration-300 hover:bg-[#D94B00]">
                {submitLabel} <ArrowRight size={20} aria-hidden="true" />
              </button>
              {message && <p role="status" className="rounded-xl bg-[#FAF9F6] p-3 text-sm leading-relaxed text-[#0A0D12]/65">{message}</p>}
            </form>
            <div className="mt-6 border-t border-[#0A0D12]/10 pt-5 text-center text-sm text-[#0A0D12]/60">{footer}</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export const authLinkClass = 'font-semibold text-[#FA5700] transition-colors duration-300 hover:text-[#B83E00]'

export default AuthLayout
