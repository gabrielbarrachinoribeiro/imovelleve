import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function ScrollToTop({ hasWhatsApp = true }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 10)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      })}
      className={`fixed right-5 z-40 inline-flex items-center justify-center rounded-full border border-[#0A0D12]/15 bg-white p-3 text-[#0A0D12] shadow-md shadow-black/10 transition-colors duration-300 hover:border-[#FA5700] hover:bg-[#FA5700] hover:text-white sm:right-7 ${hasWhatsApp ? 'bottom-[calc(6rem+env(safe-area-inset-bottom))] sm:bottom-26' : 'bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:bottom-7'}`}
    >
      <ArrowUp size={24} strokeWidth={1.8} aria-hidden="true" />
    </button>
  )
}

export default ScrollToTop
