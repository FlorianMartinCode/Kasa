import React from 'react';
import Card from './Card/card';
import Full from './Full/full';

function logement({ logement, mode }) {

  if (mode === "card") {
    return (
          <Card 
            dataLocation={logement}
          />
    );
  } else if (mode === "full") {
    return (
      <Full 
        dataLocation={logement}
      />
    );
  }
}

export default logement;
