import React from 'react';
import Banner from '../../components/Main/Banner/banner';
import image1 from '../../assets/banner.png';
import Logements from '../../components/Main/Logements/logements';


function home() {
    return (
        <div>
            <Banner imageSrc={image1} showText={true}/>
            <Logements />
        </div>
      )
}

export default home