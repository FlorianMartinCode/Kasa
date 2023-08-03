import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image1 from '../../assets/banner.png';
import Logements from '../../components/Main/Logements/logements';
import locationDatas from '../../Data/logements.json';

function Home() {
  return (
    <div>
      <Banner
        imageSrc={image1}
        showText={true}
        className="image-height-1"
      />
      <Logements data={locationDatas} mode="card" />
    </div>
  );
}

export default Home;
