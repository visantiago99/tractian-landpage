import React from 'react';
import ordem from '../images/ordem.png'

export default function Alerts() {
  return (
    <div className="alerts-container">
      <div className="alerts-text-container">
        <h3>Acompanhe sempre que precisar</h3>
        <h4>O nosso software de manutenção permite que você acesse a situação atual dos seus ativos através do computador, tablet e celular.</h4>
        <h4>Quando houver uma anomalia, os alertas não só serão exibidos na plataforma, mas também serão enviados a você por e-mail e WhatsApp.</h4>
      </div>
      <div className="alerts-img-container">
        <img src={ordem} alt="ordem" />
      </div>
    </div>
  )
}
