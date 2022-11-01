

import React from 'react';
import TuitListItem from './TuitItem.js';
import { useSelector } from 'react-redux';

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits);

    return (
        <>
            {tuits.map((tuit) => (
                <TuitListItem key={tuit._id} tuit={tuit} />
            ))}
        </>
    );
};

export default TuitList;