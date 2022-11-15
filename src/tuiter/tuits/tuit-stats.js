/* eslint-disable */
import {useDispatch} from 'react-redux';
import React from 'react';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    return (
        <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
            <div>
                <button className='btn btn-sm wd-font-size-15px wd-font-family-arial'>
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
                    tuit.liked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            liked: !tuit.liked,
                            likes: tuit.likes - 1
                        }))}
                        className='btn btn-sm'>
                        <i className='fas fa-heart' style={{color: 'red'}}/> {tuit.likes}
                    </button>
                }
                {
                    !tuit.liked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            liked: !tuit.liked,
                            likes: typeof tuit.likes === 'undefined' ? 1: tuit.likes + 1
                        }))}
                        className='btn btn-sm'>
                        <i className='fas fa-heart'/> {tuit.likes}
                    </button>
                }
            </div>
            <div>
                {
                    tuit.disliked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            disliked: !tuit.disliked,
                            dislikes: tuit.dislikes - 1
                        }))}
                        className='btn btn-sm'>
                        <i className='bi bi-hand-thumbs-down'/> {tuit.dislikes}
                    </button>
                }
                {
                    !tuit.disliked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            disliked: !tuit.disliked,
                            dislikes: typeof tuit.likes === 'undefined' ? 1: tuit.dislikes + 1
                        }))}
                        className='btn btn-sm'>
                        <i className='bi bi-hand-thumbs-down'/> {tuit.dislikes}
                    </button>
                }
            </div>
            <div>
                <button className='btn btn-sm wd-font-grey wd-font-size-15px wd-font-family-arial'>
              <span>
                <i className='fas fa-external-link-alt'/>
              </span>
                </button>
            </div>
        </div>
    );
};

export default TuitStats;