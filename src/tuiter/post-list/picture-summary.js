import React from 'react';

const PictureSummary = ({post}) => {
    if (post.title === undefined) {
        return (
            <div className="col-12 wd-frame">
                <div className="wd-border-thin">
                    <img className="img-fluid" alt="post-username" src={post.image}/>
                </div>
            </div>
        );
    }
    else {
        return (
            <>
                <div className="col-12 wd-frame">
                    <div className="wd-border-thin">
                        <img className="img-fluid wd-picture" alt="post-related" src={post.image}/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="wd-tuit-border wd-rounded-corners-bottom p-3">
                        <div className="wd-author">{post.title}</div>
                        <span>{post.summary}</span>
                        <span>
                            <i className="fas fa-link fa-xs"/>{post.link}
                        </span>
                    </div>
                </div>
            </>
        );
    }
};

export default PictureSummary;