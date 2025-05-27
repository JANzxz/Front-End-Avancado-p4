// Pelo que eu entendi Hook serve para gerenciar coisas antes da pagina recarregar, tipo aquelas coisas quando dão F5 ai volta ao zero
// O hook sempre começa com useState (gerenciar estado)
// useState serve para modificar o estado de alguma coisa
// O hook e tipo um codigo que allguem ja fez.

import React, { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState() // contador → é como um papel com um número escrito.
    const [sorteados, setSorteados] = useState([]) // setContador → é como apagar o número do papel e escrever outro.



    function sortearNumero() {
        if (sorteados.length < 6) {

            let numeroSorteado = Math.floor(Math.random() * 60) + 1

            setSorteado(numeroSorteado)
            setSorteados([...sorteados, numeroSorteado])

        } else {
            alert("Já temos 6 úmeros sortedos");
        }

    }

  return (
    <div>

        <hr />
        <h1>Sorteador Da Mega Sena Em React</h1>
        <button onClick={sortearNumero}>   
            Sortear Numero
        </button>
        <h1>Ultimo Numero Sorteado:{sorteado}</h1>
        <h1>Lista de Sorteados {sorteados.join(" - ")}</h1>
        
    </div>
  )
}

export default HookMegaSena