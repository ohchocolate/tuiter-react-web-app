import React from "react";
import PictureSummary from './picture-summary';

const PostItem = ({
        post = {
            userName: 'Elon Musk',
            handle: 'elonmusk',
            icon: 'https://pbs.twimg.com/media/FAWRiSrUcAQgmYY.jpg',
            time: '23h',
            content: 'Amazing show about @Inspiration4x mission!',
            image: 'https://i.cbc.ca/1.6176796.1631726112!/fileImage/httpImage/image.JPG_gen/derivatives/original_780/space-exploration-spacex.JPG',
            title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            summary:
                'From training to launch to landing, this all-access docuseries rides along with the ' +
                'Inspiration4 crew on the first all-civilian orbital space ...',
            link: 'netflix.com',
            comment_count: '4.2k',
            retweet_count: '3.5k',
            like_count: '37.5k',
        },
    }) => {
    return (
        <>
            <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
                <div className="col-1 justify-content-center">
                    <div><img className="rounded-circle wd-avatar" src={post.icon} height="100px"/></div>
                </div>

                <div className="col-11 row ms-2">

                    <div className="col-11 mb-2">
                        <p>
                            <span className="wd-author">{post.userName}&nbsp;
                                <i className="fas fa-check-circle"></i></span>&nbsp;
                            @{post.handle}&nbsp;•&nbsp;{post.time}
                        </p>
                        <div className="wd-content">{post.content}</div>
                    </div>
                    <div className="col-1">
                        <a>...</a>
                    </div>

                    <PictureSummary post={post}/>

                    <div className="col-12 d-flex m-auto justify-content-between">
                        <a>
                            <span className="wd-tuit-time">
                            <i className="far fa-comment fa-flip-horizontal"></i>
                            </span>{post.comment_count}
                        </a>
                        <a>
                            <span><i className="fas fa-retweet"></i></span>
                            {post.retweet_count}</a>
                        <a>
                            <span><i className="fas fa-heart"></i></span>
                            {post.like_count}</a>
                        <a>
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
};
export default PostItem;
