import React from "react";

import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";
import Divisao from "./components/Divisao";
import PrecisoEstudar from "./components/PrecisoEstudar";


function App() {

    return (

        <>

            <h1>Exercícios Aula 1 React</h1>
            <hr />

            <h3>Exercício 1</h3>

            <Adicao num1={2} num2={3}></Adicao>
            <br />

            <Subtracao num1={32} num2={9}></Subtracao>
            <br />

            <Multiplicacao num1={5} num2={6}></Multiplicacao>
            <br />

            <Divisao num1={90} num2={3}></Divisao>
            <br />

            <br />
            <hr />
            <h3>Exercício 2</h3>

            <PrecisoEstudar nomeDaTecnologia={"TypeScript"}></PrecisoEstudar>
            <br />

        </>

    );

}

export default App;
