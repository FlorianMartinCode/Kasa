import React from 'react';
import Card from '../Logements/Logement/card';
import Full from '../Logements/Logement/full';

function logements({ data, mode }) {

  if (mode === "card") {
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
  } else if (mode === "full") {
    return (
      <div>
          <Full />
      </div>
    );
  }
}

export default logements;
