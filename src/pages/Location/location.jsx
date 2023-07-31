import React from 'react';
import { useParams } from 'react-router-dom';
import Slide from '../../components/Main/Slide/slide';
import locationDatas from '../../Data/logements.json';

const Location = () => {
    const { id } = useParams();
  
    // Filtrer les données pour obtenir le logement spécifique
    const dataLocation = locationDatas.find((location) => location.id === id);

    // Vérifier si le logement existe
    if (!dataLocation) {
        return <div>Logement introuvable</div>;
    }

    // Afficher le détail du logement
    return (
        <div>
            <Slide dataLocation={dataLocation} />
        </div>
    );
};

export default Location;