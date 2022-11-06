import {useDispatch} from 'react-redux';
import React from 'react';
import {likeTuit, unlikeTuit} from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    };

    const unlikeTuitHandler = (tuit) => {
        dispatch(unlikeTuit(tuit))
    }


    return (
        <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
            <div>
                <button className='btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial'>
                  <span className='wd-margin-right-12px'>
                    <i className='far fa-comment fa-flip-horizontal'/>
                      {" "}
                  </span>
                    {tuit.replies}
                </button>
            </div>
            <div>
                <button className='btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial'>
                  <span className='wd-margin-right-12px'>
                    <i className='fas fa-retweet'/>
                  </span>
                    {" "}
                    {tuit.retuits}
                </button>
            </div>
            <div>
                {
                    !tuit.liked &&
                    <button
                        onClick={() => likeTuitHandler(tuit)}
                        className='btn btn-sm'>
                        <i className='fas fa-heart'/> ({tuit.likes})
                    </button>
                }
                {
                    tuit.liked &&
                    <button
                        onClick={() => unlikeTuitHandler(tuit)}
                        className='btn btn-sm'>
                        <i className='fas fa-heart' style={{color: 'red'}}/> {tuit.likes}
                    </button>
                }
            </div>
            <div>
                <button className='btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial'>
              <span className='wd-margin-right-12px'>
                <i className='fas fa-external-link-alt'/>
              </span>
                </button>
            </div>
        </div>
    );
};

export default TuitStats;