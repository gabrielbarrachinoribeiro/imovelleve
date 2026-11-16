function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511961393362"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp com a Imovel Leve (abre em nova aba)"
      title="Fale com a gente pelo WhatsApp"
      className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-black/15 transition-colors duration-300 hover:bg-[#128C4A] focus-visible:outline-[#128C4A] sm:right-7 sm:bottom-7"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.48 0 .13 5.35.12 11.93c0 2.1.55 4.16 1.6 5.97L.02 24l6.25-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.93-11.93a11.85 11.85 0 0 0-3.46-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.98 9.86Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.1 4.48.72.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
