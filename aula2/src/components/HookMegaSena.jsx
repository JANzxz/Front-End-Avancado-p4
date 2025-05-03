// Pelo que eu entendi Hook serve para gerenciar coisas antes da pagina recarregar, tipo aquelas coisas quando dão F5 ai volta ao zero
// O hook sempre começa com useState (gerenciar estado)
// useState serve para modificar o estado de alguma coisa
// O hook e tipo um codigo que allguem ja fez.

import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => { //Fazendo o rafce(rafael do ceara)

    const [sorteado, setSorteado] = useState(second) //Aqui tou fazendo o useStateSnipet
    const [listaDeSorteados, setListaDeSorteados] = useState(second) //Aqui vai amrazenar a lista de sorteados
    useState([]) //Aqui e pq inicialmmente a lista e vazia

    function sortearNumero(){
        if (listaDeSorteados.length < 6){
            let numeroSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado(numeroSorteado) // Tou pegando os numeros gerados no let encima e jogando pra o set
            setListaDeSorteados([...listaDeSorteados, numeroSorteado]) //Aqui minha cabeça bugou
        } else{
            alert("Já temos 6 numeros sorteados")
        }
    }

    }

  return (
    <div>
        
        <h1>Sorteador da Mega Sena</h1>
        <button onClick={sortearNumero}>Sortear Numeros</button>
        <h1>Ultimo numero sorteado: {sorteado}</h1> 
        <h1>Sorteados: {listaDeSorteados}</h1> 

    </div>
  )

export default HookMegaSena