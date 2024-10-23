import { useEffect, useState } from "react";
import CardNull from "../Cards/CardNull"
import InfoCard from "../Cards/InfoCard"
import { Link } from "react-router-dom";

function ConteudoPrincipal(){
    const[artistas, setArtistas] = useState([]);
    const[isLoading, setLoading] = useState(false);

    useEffect(()=>{
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('finalizou a requisição')  )
    })

    return(
      <section>
      <>
            <div className='estilo'>
              <h1>Rock</h1>
              {
                artistas
                .filter(artista => artista.genero.includes('rock'))
                .map( artista => (
                  <>
                  <Link to={`/artistas/${artista._id}`}/>
                    <CardNull>
                    <InfoCard></InfoCard>
                    <InfoCard><p>{artista.nome}</p></InfoCard>
                    </CardNull>
                  <Link/>
                  </>
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
        </section>
    )
}
export default ConteudoPrincipal