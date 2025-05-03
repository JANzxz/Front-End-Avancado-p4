import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import RenderizaBackOuFront from './components/RenderizandoBackOuFront'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HookContador from './components/HookContador'
import HookMegaSena from './components/HookMegaSena'


const App = () => {
  return (
    <div>
      <h1>Aula 2</h1>
      <hr />

      <h1>Exercicio 1</h1>
      <h4><RenderizandoComFuncoes/ ></h4>

      <br />
      <br />
      <br />

      <h1>Execicio 2</h1>
      <h4><RenderizaBackOuFront /></h4>

      <br />
      <br />
      <br />


      <h1>Exercicio 3</h1>
      <TrabalhandoComImagens />

      <br />
      <br />
      <br />

    <h1>Exercicio 4</h1>
    <h3><HookContador /></h3>

      <br/>
      <hr/>
      <br/>

    <h1>Exercicio 5</h1>
      
    <h3><HookMegaSena/></h3>

    </div>
  )
}

export default App