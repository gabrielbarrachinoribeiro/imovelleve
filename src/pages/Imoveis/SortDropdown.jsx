import { useEffect, useRef, useState } from 'react'
import { ArrowDownWideNarrow, Check, ChevronDown } from 'lucide-react'

const options = [
  { value: 'relevantes', label: 'Mais relevantes', description: 'Destaques primeiro' },
  { value: 'recentes', label: 'Mais recentes', description: 'Novidades primeiro' },
  { value: 'menor-preco', label: 'Menor preço', description: 'Do menor para o maior' },
  { value: 'maior-preco', label: 'Maior preço', description: 'Do maior para o menor' },
  { value: 'maior-area', label: 'Maior área', description: 'Mais espaço para você' },
]

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const selected = options.find((option) => option.value === value) || options[0]

  useEffect(() => {
    if (!open) return
    function closeOutside(event) {
      if (!containerRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [open])

  function handleKeys(event) {
    if (event.key === 'Escape') {
      setOpen(false)
      triggerRef.current.focus()
    }
    if (!open || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const buttons = [...containerRef.current.querySelectorAll('[data-sort-option]')]
    const index = buttons.indexOf(document.activeElement)
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
      : event.key === 'ArrowDown' ? (index + 1) % buttons.length : (index - 1 + buttons.length) % buttons.length
    buttons[next].focus()
  }

  return (
    <div ref={containerRef} className="relative w-full sm:w-auto" onKeyDown={handleKeys} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="sort-options" onClick={() => setOpen(!open)} className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-[#0A0D12]/15 bg-white px-5 py-2.5 text-sm leading-5 font-medium transition-colors duration-300 hover:border-[#FA5700] hover:text-[#FA5700] sm:w-auto">
        <ArrowDownWideNarrow size={17} className="text-[#FA5700]" aria-hidden="true" />
        <span><span className="sr-only">Ordenar por: </span>{selected.label}</span>
        <ChevronDown size={16} className="text-[#0A0D12]/45" aria-hidden="true" />
      </button>
      {open && (
        <div id="sort-options" className="absolute top-full right-0 z-30 mt-2 w-full min-w-64 rounded-2xl border border-[#0A0D12]/10 bg-white p-2 shadow-xl shadow-black/10">
          <p className="px-3 pt-2 pb-3 text-[10px] font-semibold tracking-[0.16em] uppercase text-[#0A0D12]/45">Ordenar imóveis</p>
          {options.map((option) => (
            <button key={option.value} data-sort-option type="button" aria-pressed={value === option.value} onClick={() => {
              onChange(option.value)
              setOpen(false)
              triggerRef.current.focus()
            }} className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 hover:bg-[#FFF0E7] ${value === option.value ? 'bg-[#FFF0E7] text-[#C64400]' : 'text-[#0A0D12]'}`}>
              <span><span className="block text-sm font-semibold">{option.label}</span><span className="mt-0.5 block text-xs text-[#0A0D12]/50">{option.description}</span></span>
              {value === option.value && <Check size={17} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown
