import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image2 from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

function about() {
  const heightResponsive = "255px";

  return (
    <div>
      <Banner imageSrc={image2} heightResponsive={heightResponsive}/>
    </div>
  )
}

export default about