import React from 'react';
import Card from './Card/card';
import Full from './Full/full';

function logement({ logement, mode }) {

  if (mode === "card") {
    return (
      
        
          <Card 
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
          />
    );
  } else if (mode === "full") {
    return (
      <div>
          <Full 
          dataLocation={logement}
          />
      </div>
    );
  }
}

export default logement;
