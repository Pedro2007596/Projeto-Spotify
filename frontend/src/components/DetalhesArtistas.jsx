import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetalhesArtistas(){
    const { id } = useParams()
    const [artista, setArtista] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/artistas/${id}`)
        .then(res => res.json())
        .then(data => setArtista(data))
        .catch(err => console.log(err))
      }, [])
    
    return(
        <section>
            <div className="estilo">
                <h2 className="sobre-nome">{artista?.nome}</h2>
                <img className="sobre-img" src={artista?.img} alt="" />
                <p>{artista?.sobre}</p>
            </div>
        </section>
    )
}