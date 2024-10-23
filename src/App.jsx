import Header from './components/Header'
import ConteudoPrincipal from './components/Paginas/ConteudoPrincipal'
import ContainerCP from './components/Paginas/ContainerCP'
import Sidebar from './components/Sidebar/Sidebar'
import { useEffect } from 'react'
import { useState } from 'react'
import CardNull from "./components/Cards/CardNull"
import InfoCard from "./components/Cards/InfoCard"


function App() {
  const[artistas, setArtistas] = useState([]);
  const[isLoading, setLoading] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
    .finally(() => console.log('finalizou a requisição')  )
  }, [])
  console.log(artistas)
  return (
    <>
      <Header></Header>
      <ContainerCP>
        <Sidebar></Sidebar>
        <ConteudoPrincipal>
          
          <>
            <div className='estilo'>
              <h1>Rock</h1>
              {
                artistas
                .filter(artista => artista.genero.includes('rock'))
                .map( artista => (
                  <CardNull>
                  <InfoCard></InfoCard>
                  <InfoCard><p>{artista.nome}</p></InfoCard>
                  </CardNull>
                ))
              }
            </div>
          </>
          <>
            <div className='estilo'>
              <h1>Pop</h1>
              {
                artistas
                .filter(artista => artista.genero.includes("pop"))
                .map( artista => (
                  <CardNull>
                  <InfoCard></InfoCard>
                  <InfoCard><p>{artista.nome}</p></InfoCard>
                  </CardNull>
                ))
              }
            </div>
          </>
        </ConteudoPrincipal>
      </ContainerCP>
    </>
  )
}
export default App
