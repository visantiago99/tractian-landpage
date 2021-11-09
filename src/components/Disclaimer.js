import React from 'react';
import insights from '../images/insights.png';
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-text">
        <h3>Indústrias inteligentes usam</h3>
        <h4>Trazemos paz para a manutenção.
        Controle, autonomia e confiabilidade para sua máquina.</h4>
      </div>
      <div className="disclaimer-img-container">
        <img src={insights} alt="insights" />
      </div>
      <div className="disclaimer-li-container">
        <ul>
          <li>Saúde dos ativos <BsFillCheckCircleFill /></li>
          <li>Monitoramento constante <BsFillCheckCircleFill /></li>
          <li>Alertas automáticos <BsFillCheckCircleFill /></li>
          <li>Analytics <BsFillCheckCircleFill /></li>
          <li>OS automatizados <BsFillCheckCircleFill /></li>
        </ul>
      </div>
    </div>
  )
}
