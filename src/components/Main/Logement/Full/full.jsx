import React from 'react';
import Slide from '../../Slide/slide';


function Full(dataLocation) {
    const logement=dataLocation.dataLocation

    return (
        <div>
            <Slide dataLocation={logement} />
        </div>
    );
}

export default Full;
