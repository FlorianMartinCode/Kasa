import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image1 from '../../assets/banner.png';
import Logements from '../../components/Main/Logements/logements';

function Home() {
  return (
    <div>
      <Banner
        imageSrc={image1}
        showText={true}
        imageHeightDesktop="223px"
        imageHeightResponsive="111px"
      />
      <Logements />
    </div>
  );
}
export default Home