import React from 'react';
import {useDispatch } from 'react-redux';

import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            <li className="list-group-item">
                <div className="row d-flex justify-content-between">
                    <div className="col-2">
                        <div className="row">
                            <img width={50} alt="tuit-round-logo"
                                 className="float-end rounded-circle"
                                 src={tuit.image}/>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="fw-bolder">
                            {tuit.userName}{" "}
                            <i className='fas fa-check-circle'/>
                            {" "}
                            <span className="text-secondary fw-normal">
                                    {tuit.handle}
                                {" "}·{" "}{tuit.time}
                                </span>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}/>
                        </div>
                        <div>
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit} />
                    </div>
                </div>
            </li>
        </>
    );
};

export default TuitItem;