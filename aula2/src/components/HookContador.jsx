// Pelo que eu entendi Hook serve para gerenciar coisas antes da pagina recarregar, tipo aquelas coisas quando dão F5 ai volta ao zero
// O hook sempre começa com useState (gerenciar estado)
// useState serve para modificar o estado de alguma coisa
// O hook e tipo um codigo que allguem ja fez.

import React from 'react'
import { useState } from 'react'
const HookContador = () => {

    const [contador, setContador] = useState( 1 ) //Antes do return faz as coisas que não necessariamente tem q aparecer na tela

    function incrementarContador(){ // Essa função incrementa no contador
        setContador(contador + 1)
    }
    function decrementarContador(){ // Essa decrementa
        setContador(contador - 1)
    }

  return (
    <div>
        <h1>contador com UseState</h1>
        <button onClick={incrementarContador}> Incrementar Contador </button>
        <button onClick={decrementarContador}> Decrementar Contador </button>
        <h1>O contador esta em: {contador}</h1>
    </div>
  )
}

export default HookContador