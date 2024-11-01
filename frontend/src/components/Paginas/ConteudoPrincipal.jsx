import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardNull from '../Cards/CardNull';
import InfoCard from '../Cards/InfoCard';

const ConteudoPrincipal = () => {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        const response = await fetch("http://localhost:3000/artistas/");
        const data = await response.json();
        setArtistas(data);
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistas();
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
              .filter(artista => artista.genres && artista.genres.includes('rock'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.name}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.name} />
                  </CardNull>
                </Link>
              ))}
          </div>

          <div className="estilo">
            <h1>Pop</h1>
            {artistas
              .filter(artista => artista.genres && artista.genres.includes('pop'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.name}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.name} />
                  </CardNull>
                </Link>
              ))}
          </div>

          <div className="estilo">
            <h1>Rap</h1>
            {artistas
              .filter(artista => artista.genres && artista.genres.includes('rap'))
              .map(artista => (
                <Link key={artista._id} to={`/artistas/${artista._id}`}>
                  <CardNull>
                    <InfoCard>
                      <h2 className="titulo-card">{artista.name}</h2>
                    </InfoCard>
                    <img className="card-Image" src={artista.img} alt={artista.name} />
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
