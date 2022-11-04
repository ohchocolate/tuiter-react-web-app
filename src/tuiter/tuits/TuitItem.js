import React from 'react';
import {useDispatch } from 'react-redux';

import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col">
                        <img width={50} alt="tuit-image"
                             className="float-end rounded-circle"
                             src={tuit.image}/>
                    </div>
                    <div className='col'>
                        <div className="fw-bolder">
                            {tuit.userName}<i className='fas fa-check-circle'/>
                            <span className="text-secondary fw-normal">
                                {tuit.handle}
                                ·{tuit.time}
                            </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/>
                        </div>
                        <div>
                            {tuit.tuit}
                        </div>
                    </div>

                </div>
            </li>




        </>
    );
};

export default TuitItem;