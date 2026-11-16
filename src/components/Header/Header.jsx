import { useEffect, useRef, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const links = [
  { label: "Comprar", href: "#comprar" },
  { label: "Alugar", href: "#alugar" },
  { label: "Explorar imóveis", href: "#imoveis" },
  { label: "Sobre nós", href: "#sobre" },
];

const actionClass =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold leading-5 transition-colors duration-200";

function Header() {
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
    <header className="sticky top-0 z-50 shrink-0 bg-[#FAF9F6] text-[#0A0D12]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8 py-5">
          <a
            href="/"
            aria-label="Imóvelleve — início"
            className="shrink-0 rounded-sm"
          >
            <img src={logo} alt="Imóvelleve" className="block w-36 sm:w-40" />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="py-2.5 text-base font-medium text-[#0A0D12]/70 transition-colors duration-200 hover:text-[#FA5700]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#favoritos"
              aria-label="Imóveis favoritos"
              className={`${actionClass} border-[#0A0D12]/15 px-2.5 hover:border-[#FA5700] hover:bg-[#FA5700]/5 hover:text-[#FA5700]`}
            >
              <Heart size={20} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a
              href="#anunciar"
              className={`${actionClass} border-transparent bg-[#FA5700] text-white hover:bg-[#D94B00]`}
            >
              Anunciar imóvel
            </a>
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
                aria-label="Imóvelleve — início"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={logo}
                  alt="Imóvelleve"
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
              <a
                href="#favoritos"
                onClick={() => setIsOpen(false)}
                className={`${actionClass} border-[#0A0D12]/15 hover:border-[#FA5700] hover:text-[#FA5700]`}
              >
                <Heart size={20} aria-hidden="true" /> Meus favoritos
              </a>
              <a
                href="#anunciar"
                onClick={() => setIsOpen(false)}
                className={`${actionClass} border-transparent bg-[#FA5700] text-white hover:bg-[#D94B00]`}
              >
                Anunciar imóvel
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
