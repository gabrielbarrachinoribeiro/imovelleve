import Hero from "./Hero/Hero"
import Selecao from "./Selecao/Selecao"
import Diferenciais from "./Diferenciais/Diferenciais"

function Home(){
    return(
        <main className="flex flex-1 flex-col">
            <Hero />
            <Selecao />
            <Diferenciais />
        </main>
    )
}

export default Home
