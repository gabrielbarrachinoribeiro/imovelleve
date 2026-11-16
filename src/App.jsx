import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Home/Home"
import { useLayoutEffect, useRef } from 'react'

function App() {
  const shellRef = useRef(null)

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
      <Home />
      <Footer />
    </div>
  )
}

export default App
