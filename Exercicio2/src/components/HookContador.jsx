import React from 'react'
import { useState } from 'react'
const HookContador = () => {

    const [contador, setContador] = useState( 1 )

    function incrementarContador(){
        setContador(contador + 1)
    }
    function decrementarContador(){
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