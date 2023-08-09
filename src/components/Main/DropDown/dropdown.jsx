import React, { useState } from 'react';
import expandArrowImg from '../../../assets/expand_down.png';
import expandUpImg from '../../../assets/expand_up.png';

function Dropdown({ titre, description, className }) {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdownClick = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className={`dropdown ${activeDropdown ? 'open' : ''}`}>
      <div className='label-container' onClick={handleDropdownClick}>
        <label>{titre}</label>
        <img src={activeDropdown ? expandUpImg : expandArrowImg} alt="Expand Icon" />
      </div>
      {activeDropdown && <div className={`description-dropdown ${className}`}>{description}</div>}
    </div>
  );
}

export default Dropdown;
