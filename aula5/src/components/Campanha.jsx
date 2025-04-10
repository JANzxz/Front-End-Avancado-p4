import React from 'react'
import styles from "./Campanha.module.css"

const Campanha = (props) => {

    function definirMensagem (mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicidio"
        } else if (mes === "outubro") {
            return "Concientização sobre o cançer de mama"
        } else if (mes === "novembro") {
            return "Prevenção e combate ao cancer de prostata"
        } 

    }

    function defineCor (mes) {
        if (mes === "setembro") {
            return styles.setembro
        } else if (mes === "outubro") {
            return styles.outubro
        } else if (mes === "novebro") {
            return styles.novembro
        }
    }

  return (
    <div className = {defineCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha