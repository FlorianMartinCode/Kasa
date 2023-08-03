import React from 'react';
import { useParams } from 'react-router-dom';
import Slide from '../../Slide/slide';
import locationDatas from '../../../../Data/logements.json';
import Error from '../../../../pages/Error/Error';

function Full() {

    const { id } = useParams();

    const dataLocation = locationDatas.find((location) => location.id === id);
    if (!dataLocation) {
        return (<Error />)
    }

    return (
        <div>
            <Slide dataLocation={dataLocation} />
        </div>
    );
}

export default Full;
