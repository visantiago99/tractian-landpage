import React from 'react';
import fabercastell from '../images/fabercastell.png';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="ptnrs-text-container">
        <h3>Quem já está se beneficiando do Software de Manutenção Inteligente:</h3>
      </div>
      <div className="partners-grid-container">
        <ul>
          <li>
            <img src={fabercastell} alt="fabercastell" />
          </li>
        </ul>
      </div>
    </div>
  )
}
