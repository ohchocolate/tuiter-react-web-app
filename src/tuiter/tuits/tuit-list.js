/* eslint-disable */
import React, {useEffect} from 'react';
import TuitItem from './TuitItem.js';
import {useDispatch, useSelector } from 'react-redux';
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(
        state => state.tuitsData)

    const dispatch = useDispatch();

    // invoke find tuits thunk to fetch tuits and
    // put them in the reducer's store, so we can
    // extract them with useSelector() and render
    // the tuits here
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
            {tuits.map((tuit) => (
                <TuitItem
                    key={tuit._id}
                    tuit={tuit}
                />
            ))}
        </ul>
    );
};

export default TuitList;