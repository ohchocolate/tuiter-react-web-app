import React from 'react';

const PictureSummary = ({
    post = {
        userName: 'Elon Musk',
        handle: 'elonmusk',
        icon: 'https://pbs.twimg.com/media/FAWRiSrUcAQgmYY.jpg',
        time: '23h',
        content: 'Amazing show about <a href="#">@Inspiration4x</a> mission!',
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
    if (post.title === undefined) {
        return (
        <>
        <div className="col-12">
            <div className="wd-border-thin">
                <img className="img-fluid wd-picture" src={post.image}/>
            </div>
        </div>
        <div className="col-12">
            <div className="wd-tuit-border wd-rounded-corners-bottom p-3">
                <div className="wd-author">{post.title}</div>
                <span>{post.summary}</span>
                <span>
                    <i className="fas fa-link fa-xs"></i>{post.link}
                </span>
            </div>
        </div>
        </>
        );
    }
};

export default PictureSummary;