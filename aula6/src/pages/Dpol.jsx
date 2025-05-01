import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dpol = () => {

  const [dpoLgpd, SetDpoLgpd] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")//Request
    .then(response => SetDpoLgpd(response.data))//response(resposta do portugues)
    .catch(error => console.error("Erro ao carregar a lista de noticias: ", error))
  },[])
  
  return (
  <div>
    <h1>DpoLgpd</h1>
    <ul>
      {
        dpoLgpd.map((dpolgpd) => (
          <li key={dpolgpd.id}>
            <h2>{dpolgpd.titulo}</h2>
            <h3>{dpolgpd.texto}</h3>
          </li>
        ))
      }
    </ul>
</div>
  )
}

export default Dpol