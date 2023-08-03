import React from 'react';
import locationDatas from '../../Data/logements.json';
import Logements from '../../components/Main/Logements/logements'

function Location () {
    return (
        <div>
            <Logements data={locationDatas} mode="full"/>
        </div>
    );
};

export default Location;