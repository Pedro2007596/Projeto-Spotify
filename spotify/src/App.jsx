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
  }, [])

  return (
    <>
      <Header></Header>
      <ContainerCP>
        <Sidebar></Sidebar>
        <ConteudoPrincipal>
          {
            artistas.map( artista => (
              <CardNull>
              <InfoCard></InfoCard>
              <InfoCard><p>{artista.name}</p></InfoCard>
            </CardNull>
            ))
          }

        </ConteudoPrincipal>
      </ContainerCP>
    </>
  )
}
export default App
