import React from 'react'
import Exercicio2 from './components/Exercicio2'
import Exercicio1 from './components/Exercicio1'
import Campanha from './components/Campanha'


const App = () => {
  return (
    <div>
    <h1>Aula 5</h1>
    <hr />

    <h1>Exercicio 1</h1>
    <h4><Exercicio1/ ></h4>

    <br />
    <br />
    <br />

    <h1>Execicio 2</h1>
    <h4><Exercicio2 /></h4>

    <br />
    <br />
    <br />

    <h1>Campanha</h1>
    <h4><Campanha /></h4>
    <Campanha mes="setembro"/>
    </div>
  )
}

export default App