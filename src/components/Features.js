import React from 'react';
import gestao from '../images/gestao.png';
import sensor from '../images/sensor.png';
import status from '../images/status.png';
import usuarios from '../images/usuarios.png';

export default function Features() {
  return (
    <div className="features-container">
      <div className="features-text-container">
        <h3>Para além do nome Indústria 4.0</h3>
        <h4>Conheça a Gestão de Ativos 4.0 que realmente funciona. Desfrute da fusão perfeita e simplificada de ferramentas de hardware-software de que precisa para chegar na manutenção classe mundial.</h4>
      </div>
      <div className="demonstration-btn-container">
        <button>Agende uma demonstração</button>
      </div>
      <div className="feature-list-container">
        <ul>
          <li>
            <img src={gestao} alt="gestao" />
            <h3>Gestão de Ativos e Alarmes</h3>
            <h4>Através da Visão Geral você acompanha todos os pontos de monitoramento e visualiza os últimos acontecimentos.</h4>
          </li>
          <li>
            <img src={sensor} alt="sensor" />
            <h3>Insights automáticos</h3>
            <h4>A plataforma aprende como funciona cada ponto de monitoramento e te avisa quando algo não está certo.</h4>
          </li>
          <li>
            <img src={status} alt="status" />
            <h3>Status completo</h3>
            <h4>Tenha controle de tudo o que acontece com as suas máquinas e gerencie suas rotinas de manutenção.</h4>
          </li>
          <li>
            <img src={usuarios} alt="usuarios" />
            <h3>Usuários ilimitados</h3>
            <h4>Centralize a rotina do seu time e escale atividades de cada colaborador através das ordens de serviço.</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}
