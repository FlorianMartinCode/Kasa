import React from 'react';
import Card from '../Logements/Logement/card';
import data from '../../../Data/logements.json';

function logements() {
  return (
    <div className='logements'>
      {data.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
        />
      ))}
    </div>
  );
}

export default logements;
