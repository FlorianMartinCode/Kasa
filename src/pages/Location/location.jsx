import React from 'react';
import { useParams } from 'react-router-dom';
import Slide from '../../components/Main/Slide/slide';
import locationDatas from '../../Data/logements.json';
import Error from '../Error/Error'

const Location = () => {
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
};

export default Location;