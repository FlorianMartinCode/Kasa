import React from 'react';
import Slide from '../../Slide/slide';
import Tag from '../../Tag/tag';
import Star from '../../Star/star';
import Dropdown from '../../DropDown/dropdown';

function Full({ dataLocation }) {
    const logement = dataLocation;

    return (
        <main>
            <Slide dataLocation={logement} />
            <section className='full-content'>
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
                    <div className='stars-align'>
                    <Star rating={logement.rating} />
                    </div>
                </div>
            </section>
            <section className='description-equipements'>
                <Dropdown titre="Description" description={logement.description} className="description-dropdown-log"/>
                <Dropdown titre="Equipements" description={logement.equipments.join('\n')} className="equipements-dropdown-log"/>
            </section>
        </main>
    );
}

export default Full;
