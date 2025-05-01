import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Noticias = () => {

  const [noticias, SetNoticias] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/noticias")//Request
    .then(response => SetNoticias(response.data))//response(resposta do portugues)
    .catch(error => console.error("Erro ao carregar a lista de noticias: ", error))
  },[])

  return (
    <div>
        <h1>Notícias</h1>
        <ul>
          {
            noticias.map((noticia) => (
              <li key={noticia.id}>
                <h2>{noticia.titulo}</h2>
                <h3>{noticia.texto}</h3>
              </li>
            ))
          }
        </ul>

    </div>
  )
}

export default Noticias