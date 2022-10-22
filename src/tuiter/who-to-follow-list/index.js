import React from "react";
import Who from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <div className="list-group d-none d-sm-none d-md-none d-lg-inline-block">
            <li className="list-group-item fw-bolder">
                <h3 className="text-dark">Who to follow</h3>
            </li>
            {
                Who.map((item) => (<WhoToFollowListItem who={item}/>))
            }

        </div>
    );
};
export default WhoToFollowList;