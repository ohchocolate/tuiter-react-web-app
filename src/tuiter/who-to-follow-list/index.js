import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <div className="list-group d-none d-sm-none d-md-none d-lg-inline-block">
            <li className="list-group-item fw-bolder">
                <h3 className="text-dark">Who to follow</h3>
            </li>
            {
                whoArray.map((item) => (<WhoToFollowListItem who={item}/>))
            }

        </div>
    );
};
export default WhoToFollowList;