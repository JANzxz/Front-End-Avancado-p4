// E importante criar a pasta assets para colocar as imagens lá
// Não se esquecer de importar a imagem

import React from 'react'
import UrubuDoPiximg from "../assets/UrubuDoPix.jpg"

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src="GatinhoTriste.jpg" alt="GatinhoTriste" />
        <br></br>
        <img src={UrubuDoPiximg} alt="UrubuDoPix" />
    </div>
  )
}

export default TrabalhandoComImagens