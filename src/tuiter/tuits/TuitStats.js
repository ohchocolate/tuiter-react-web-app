import {useDispatch} from 'react-redux';
import React from 'react';
import {likeTuit, unlikeTuit} from "./tuits-reducer";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const likeTuit = () => {
        dispatch({ type: 'likeTuit', tuit });
    };

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
                <button
                    className='btn btn-sm wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial'
                    onClick={likeTuit}
                >
              <span className='wd-margin-right-12px'>
                {tuit.liked ? (
                    <i className='fas fa-heart' style={{color: 'red'}}/>
                ) : (
                    <i className='fas fa-heart'/>
                )}
              </span>
                    {" "}
                    {tuit.likes}
                </button>
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