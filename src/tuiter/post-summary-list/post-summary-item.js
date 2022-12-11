import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../images/react.png"
        }
    }
) => {
    return(
        <div className="row wd-frame">
            <div className="col-12 list-group">
                <div className="list-group-item">
                    <div>
                        <img alt="round-post" className="float-end rounded" src={post.image} height="100px">
                        </img>
                    </div>
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder wd-author">
                        {post.userName} -{post.time}
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostSummaryItem;