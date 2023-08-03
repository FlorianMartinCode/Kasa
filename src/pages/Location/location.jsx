import React from 'react';
import locationDatas from '../../Data/logements.json';
import Logement from '../../components/Main/Logement/logement';
import { useParams } from 'react-router-dom';
import Error from '../../pages/Error/Error';

function Location () {

    const { id } = useParams();

    const dataLocation = locationDatas.find((location) => location.id === id);
    if (!dataLocation) {
        return (<Error />)
    }
    return (
        <div>
            <Logement logement={dataLocation} mode="full"/>
        </div>
    );
};

export default Location;