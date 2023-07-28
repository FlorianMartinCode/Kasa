import React, { useState } from 'react';
import expandArrowImg from '../../../assets/expand_arrow.png';
import expandUpImg from '../../../assets/expand_up.png';

function Dropdown() {
  const [showFiabilite, setShowFiabilite] = useState(false);
  const [showRespect, setShowRespect] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showSecurite, setShowSecurite] = useState(false);

  const handleFiabiliteClick = () => {
    setShowFiabilite(!showFiabilite);
  };

  const handleRespectClick = () => {
    setShowRespect(!showRespect);
  };

  const handleServiceClick = () => {
    setShowService(!showService);
  };

  const handleSecuriteClick = () => {
    setShowSecurite(!showSecurite);
  };

  return (
    <div className='dropdown-container'>
      <div className='dropdown'>
        <div className='label-container' onClick={handleFiabiliteClick}>
          <label>Fiabilité</label>
          <img src={showFiabilite ? expandUpImg : expandArrowImg} alt="Expand Icon" />
        </div>
        {showFiabilite && (
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        )}
      </div>

      <div className='dropdown'>
        <div className='label-container' onClick={handleRespectClick}>
          <label>Respect</label>
          <img src={showRespect ? expandUpImg : expandArrowImg} alt="Expand Icon" />
        </div>
        {showRespect && (
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        )}
      </div>

      <div className='dropdown'>
        <div className='label-container' onClick={handleServiceClick}>
          <label>Service</label>
          <img src={showService ? expandUpImg : expandArrowImg} alt="Expand Icon" />
        </div>
        {showService && (
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        )}
      </div>

      <div className='dropdown'>
        <div className='label-container' onClick={handleSecuriteClick}>
          <label>Sécurité</label>
          <img src={showSecurite ? expandUpImg : expandArrowImg} alt="Expand Icon" />
        </div>
        {showSecurite && (
          <p>La sécutité est la priorité de Kasa. 
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
