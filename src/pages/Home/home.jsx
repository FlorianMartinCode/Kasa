import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image1 from '../../assets/banner.png';
import Logement from '../../components/Main/Logement/logement';
import locationDatas from '../../Data/logements.json';

function Home() {
  return (
    <main>
      <Banner
        imageSrc={image1}
        text="Chez vous, partout et ailleurs"
        className="image-height-1"
      />
      <section className='logements'>
        {locationDatas.map((location) => {
          return <Logement key={location.id} logement={location} mode="card" />
        })}
      </section>
    </main>
  );
}

export default Home;
