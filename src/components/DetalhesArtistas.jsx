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
        .finally(() => console.log(artista)  )
      }, [])
    
    return(
        <>
            <p>{id}</p>
        </>
    )
}