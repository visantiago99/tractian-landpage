import React from 'react';
import uniao from '../images/uniao.png';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";

export default function PercentegeDisclaimer() {
  return (
    <div className="pct-disclaimer-container">
      <div className="pct-text-container">
        <h3>A união perfeita de software e hardware em um só lugar</h3>
        <h4>Gestão de ativos, Ordens de Serviço automatizadas e Insights automáticos na mesma plataforma.</h4>
      </div>
      <div className="btn-list-container">
        <button><BsFillArrowDownSquareFill /> 60%</button>
        <h4>Reduza em até 60% o custo de manuteção</h4>
        <button><BsFillArrowUpSquareFill /> 50%</button>
        <h4>Aumente em até 50% o uptime da sua máquina</h4>
        <button><BsFillArrowDownSquareFill /> 55%</button>
        <h4>Reduza em até 55% o número de quebras inesperadas</h4>
      </div>
      <div className="pct-img-container">
        <img src={uniao} alt="uniao-software-hardware" />
      </div>
    </div>
  )
}
