import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Home/Home"
import { useLayoutEffect, useRef } from 'react'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import EsqueceuSenha from './pages/EsqueceuSenha/EsqueceuSenha'
import Imoveis from './pages/Imoveis/Imoveis'
import Sobre from './pages/Sobre/Sobre'
import Perfil from './pages/Conta/Perfil'
import Favoritos from './pages/Conta/Favoritos'
import MeusAnuncios from './pages/Conta/MeusAnuncios'
import Anunciar from './pages/Conta/Anunciar'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const pages = {
  '/perfil': Perfil,
  '/favoritos': Favoritos,
  '/meus-anuncios': MeusAnuncios,
  '/anunciar': Anunciar,
  '/sobre': Sobre,
  '/imoveis': Imoveis,
  '/explorar': Imoveis,
  '/comprar': Imoveis,
  '/alugar': Imoveis,
  '/login': Login,
  '/cadastro': Cadastro,
  '/esqueceu-senha': EsqueceuSenha,
}

function App() {
  const shellRef = useRef(null)
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const Page = pages[pathname] || Home
  const isAccountPage = ['/perfil', '/favoritos', '/meus-anuncios', '/anunciar'].includes(pathname)

  useLayoutEffect(() => {
    const shell = shellRef.current
    const header = shell.querySelector('header')
    const updateHeaderHeight = () => {
      shell.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`)
    }
    updateHeaderHeight()
    const observer = new ResizeObserver(updateHeaderHeight)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={shellRef} className="flex min-h-dvh flex-col">
      <Header />
      <Page />
      <Footer />
      {!isAccountPage && <WhatsAppButton />}
      <ScrollToTop hasWhatsApp={!isAccountPage} />
    </div>
  )
}

export default App
