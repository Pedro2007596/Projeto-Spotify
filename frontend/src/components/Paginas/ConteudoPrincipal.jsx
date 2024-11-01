import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardNull from '../Cards/CardNull';
import InfoCard from '../Cards/InfoCard';

const ConteudoPrincipal = () => {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => {
        console.log("Dados recebidos:", data);
        setArtistas(data);
      })
      .catch(err => console.error("Erro ao buscar artistas:", err))
      .finally(() => {
        setLoading(false);
        console.log('Finalizou a requisição');
      });
  }, []);

  return (
    <section>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && artistas.length === 0 && <p>Nenhum artista encontrado.</p>}
      {!isLoading && artistas.length > 0 && (
        <>
          <div className="estilo">
            <h1>Rock</h1>
            {artistas
              .filter(artista => artista.genero && artista.genero.includes('rock'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.nome}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.nome} />
                  </CardNull>
                </Link>
              ))}
          </div>

          <div className="estilo">
            <h1>Pop</h1>
            {artistas
              .filter(artista => artista.genero && artista.genero.includes('pop'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.nome}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.nome} />
                  </CardNull>
                </Link>
              ))}
          </div>

          <div className="estilo">
            <h1>Rap</h1>
            {artistas
              .filter(artista => artista.genero && artista.genero.includes('rap'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.nome}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.nome} />
                  </CardNull>
                </Link>
              ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ConteudoPrincipal;
