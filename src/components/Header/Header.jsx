import { useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, HousePlus, List, LogOut, Menu, UserRound, X } from "lucide-react";
import logo from "../../assets/logo.png";

const links = [
  { label: "Comprar", href: "/comprar" },
  { label: "Alugar", href: "/alugar" },
  { label: "Explorar imóveis", href: "/imoveis" },
  { label: "Sobre nós", href: "/sobre" },
];

const actionClass =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold leading-5 transition-colors duration-200";

const accountLinks = [
  { label: 'Meu perfil', href: '/perfil', Icon: UserRound },
  { label: 'Meus favoritos', href: '/favoritos', Icon: Heart },
  { label: 'Meus anúncios', href: '/meus-anuncios', Icon: List },
  { label: 'Anunciar imóvel', href: '/anunciar', Icon: HousePlus },
]

function UserDropdown({ userName, onLogout, onNavigate, mobile }) {
  const nameParts = userName.trim().split(/\s+/).filter(Boolean)
  const initials = (nameParts.length > 1
    ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
    : (nameParts[0] || '').slice(0, 2)).toUpperCase()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    function handlePointer(event) {
      if (!dropdownRef.current?.contains(event.target)) setIsOpen(false)
    }
    function handleKey(event) {
      if (event.key === 'Escape') {
        event.stopPropagation()
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    const dropdown = dropdownRef.current
    dropdown.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      dropdown.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
    }}>
      <button ref={buttonRef} type="button" aria-expanded={isOpen} aria-controls={mobile ? 'mobile-user-dropdown' : 'user-dropdown'} onClick={() => setIsOpen((value) => !value)} className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#0A0D12]/15 bg-transparent px-5 py-2.5 text-sm leading-5 font-semibold text-[#0A0D12] transition-colors duration-300 hover:border-[#FA5700] hover:bg-[#FA5700]/5">
        <span aria-hidden="true" className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FA5700] text-xs leading-none font-bold tracking-wide text-white">{initials}</span>
        <span className="max-w-28 truncate">{userName}</span>
        <ChevronDown size={16} className="text-[#0A0D12]/65" aria-hidden="true" />
      </button>
      {isOpen && (
        <div id={mobile ? 'mobile-user-dropdown' : 'user-dropdown'} className={`absolute right-0 z-50 min-w-60 rounded-2xl border border-[#0A0D12]/10 bg-white p-2 shadow-lg shadow-black/10 ${mobile ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
          <div className="mb-2 border-b border-[#0A0D12]/10 px-3 py-3">
            <p className="text-sm font-semibold text-[#0A0D12]">{userName}</p>
            <p className="mt-1 text-xs text-[#0A0D12]/50">Minha conta</p>
          </div>
          <nav aria-label="Minha conta">
            {accountLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} onClick={() => { setIsOpen(false); onNavigate?.() }} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#0A0D12]/75 transition-colors duration-300 hover:bg-[#FFF0E7] hover:text-[#FA5700]">
                <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
          <div className="my-2 border-t border-[#0A0D12]/10" />
          <button type="button" onClick={onLogout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#0A0D12] transition-colors duration-300 hover:bg-[#FFF0E7] hover:text-[#FA5700]">
            <LogOut size={18} aria-hidden="true" /> Sair
          </button>
        </div>
      )}
    </div>
  )
}

function HeaderActions({ isAuthenticated, onNavigate, onLogout, userName, mobile = false }) {
  if (isAuthenticated) {
    return <UserDropdown userName={userName} onLogout={onLogout} onNavigate={onNavigate} mobile={mobile} />
  }

  return (
    <>
      <a
        href="/login"
        onClick={onNavigate}
        className={`${actionClass} border-[#0A0D12]/15 hover:border-[#FA5700] hover:bg-[#FA5700]/5 hover:text-[#FA5700]`}
      >
        Entrar
      </a>
      <a
        href="/cadastro"
        onClick={onNavigate}
        className={`${actionClass} border-transparent bg-[#FA5700] text-white hover:bg-[#D94B00]`}
      >
        Cadastrar
      </a>
    </>
  )
}

function Header({ userName = 'Gabriel' }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('imovelleve-demo-session') !== 'signed-out'
    } catch {
      return true
    }
  })

  function handleLogout() {
    setIsAuthenticated(false)
    try {
      sessionStorage.setItem('imovelleve-demo-session', 'signed-out')
    } catch {
      // The visual state still works when browser storage is unavailable.
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog.querySelector("button").focus();

    function onKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;
      const elements = dialog.querySelectorAll("a[href], button");
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", closeOnDesktop);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-[#0A0D12]/10 bg-[#FAF9F6] text-[#0A0D12]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4 py-5">
          <a
            href="/"
            aria-label="Imovel Leve — início"
            className="shrink-0 rounded-sm"
          >
            <img src={logo} alt="Imovel Leve" className="block w-36 sm:w-40" />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-5 lg:flex xl:gap-8"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="py-2.5 text-sm font-medium text-[#0A0D12]/70 transition-colors duration-300 hover:text-[#FA5700] xl:text-base"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <HeaderActions isAuthenticated={isAuthenticated} userName={userName} onLogout={handleLogout} />
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-[#0A0D12]/15 p-2.5 transition-colors duration-200 hover:border-[#FA5700] hover:text-[#FA5700] lg:hidden"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#FAF9F6] lg:hidden"
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between gap-8 py-5">
              <a
                href="/"
                aria-label="Imovel Leve — início"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={logo}
                  alt="Imovel Leve"
                  className="block w-36 sm:w-40"
                />
              </a>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-[#0A0D12]/15 p-2.5 transition-colors duration-200 hover:border-[#FA5700] hover:text-[#FA5700]"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="container mx-auto flex flex-1 flex-col px-6 pb-8">
            <nav
              aria-label="Navegação mobile"
              className="flex flex-1 flex-col justify-center gap-2 py-10"
            >
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg py-4 text-2xl font-medium transition-colors duration-200 hover:text-[#FA5700] sm:text-3xl"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-[#0A0D12]/10 pt-6 pb-[env(safe-area-inset-bottom)] sm:flex-row">
              <HeaderActions isAuthenticated={isAuthenticated} userName={userName} onLogout={handleLogout} mobile onNavigate={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
