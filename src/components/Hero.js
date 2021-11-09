import React from 'react';
import logo from '../images/logo.svg';
import demonstrativo from '../images/demonstrativo1.png'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="hero-text-container">
        <h3>A PLATAFORMA MAIS COMPLETA DO MERCADO</h3>
        <h4>Com o Software de Manutenção da TRACTIAN você está um passo à frente da falha.</h4>
        <h4>É mais visibilidade, segurança e controle de forma simples e inteligente, como deve ser.</h4>
      </div>
      <div className="hero-btn-container">
        <button>Demonstração</button>
      </div>
      <div className="hero-img-container">
        <img src={demonstrativo} alt="demonstrativo1" />
      </div>
    </div>
  )
}
