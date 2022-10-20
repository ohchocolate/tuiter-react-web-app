import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
    return (
        <div className="row m-auto">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <ExploreComponent/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <WhoToFollowListItem/>
            </div>
        </div>
    )
}

export default Tuiter