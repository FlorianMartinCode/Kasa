import React from 'react';
import Slide from '../../Slide/slide';
import Tag from '../../Tag/tag';


function Full({ dataLocation }) {
    const logement = dataLocation;

    return (
        <div>
            <Slide dataLocation={logement} />
            <div className='full-content'>
                <div className='content-left'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tag dataLocation={logement.tags} />
                </div>
                <div className='content-right'>
                    <div className='host'>
                        <span className="host-name">{logement.host.name}</span>
                        <img src = {logement.host.picture} alt = {logement.host.name} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Full;
