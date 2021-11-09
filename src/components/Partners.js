import React from 'react';
import fabercastell from '../images/fabercastell.png';
import embraer from '../images/embraer.png';
import electrolux from '../images/electrolux.png';
import airliquide from '../images/airliquide.png';
import arcelor from '../images/arcelor.png';
import suzano from '../images/suzano.png';
import ciser from '../images/ciser.png';
import iochpemaxion from '../images/iochpemaxion.png';
import pirelli from '../images/pirelli.png';
import tigre from '../images/tigre.png';
import marilan from '../images/marilan.png';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="ptnrs-text-container">
        <h3>Quem já está se beneficiando do Software de Manutenção Inteligente:</h3>
      </div>
      <div className="partners-grid-container">
          <div className="know-item">
            <img src={fabercastell} alt="fabercastell" />
          </div>
          <div className="know-item">
            <img src={embraer} alt="embraer" />
          </div>
          <div className="know-item">
            <img src={electrolux} alt="electrolux" />
          </div>
          <div className="know-item">
            <img src={airliquide} alt="airliquide" />
          </div>
          <div className="know-item">
            <img src={arcelor} alt="arcelor" />
          </div>
          <div className="know-item">
            <img src={suzano} alt="suzano" />
          </div>
          <div className="know-item">
            <img src={pirelli} alt="pirelli" />
          </div>
          <div className="know-item">
            <img src={tigre} alt="tigre" />
          </div>
          <div className="know-item">
            <img src={marilan} alt="marilan" />
          </div>
      </div>
    </div>
  )
}
