import React from 'react';

const Tag = ({ dataLocation }) => {
    return (
        <div className='tag-content'>
            {dataLocation.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
    );
};

export default Tag;
