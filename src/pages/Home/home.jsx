import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image1 from '../../assets/banner.png';
import Logement from '../../components/Main/Logement/logement';
import locationDatas from '../../Data/logements.json';

function Home() {
  return (
    <div>
      <Banner
        imageSrc={image1}
        showText={true}
        className="image-height-1"
      />
      <div className='logements'>
      {locationDatas.map((location) => {
        return <Logement key={location.id} logement={location} mode="card" />
      }
      )}
      </div>
      
    </div>
  );
}

export default Home;
