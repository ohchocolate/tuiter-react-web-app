import React from "react";
import PictureSummary from './picture-summary';

const PostItem = ({
        post = {
        },
    }) => {
    return (
        <>
            <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
                <div className="col-1 justify-content-center">
                    <div><img alt="post-icon" className="rounded-circle wd-avatar" src={post.icon} height="60px"/></div>
                </div>

                <div className="col-11 row ms-2">

                    <div className="col-11 mb-2">
                        <p>
                            <span className="wd-author">{post.userName}&nbsp;
                                <i className="fas fa-check-circle"/></span>&nbsp;
                            @{post.handle}&nbsp;•&nbsp;{post.time}
                        </p>
                        <div className="wd-content">{post.content}</div>
                    </div>
                    <div className="col-1">
                        <div>...</div>
                    </div>

                    <PictureSummary post={post}/>

                    <div className="col-12 d-flex m-auto justify-content-between">
                        <div>
                            <span>
                            <i className="far fa-comment fa-flip-horizontal"/>
                            </span>{post.comment_count}
                        </div>
                        <div>
                            <span><i className="fas fa-retweet"/></span>
                            {post.retweet_count}</div>
                        <div>
                            <span><i className="fas fa-heart"/></span>
                            {post.like_count}</div>
                        <div>
                            <i className="fas fa-external-link-alt"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
};
export default PostItem;
