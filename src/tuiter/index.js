import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar
    from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";

function Tuiter() {
    return (
        <div className='row mt-2'>
            <div className='col-2 col-md-2 col-lg-1 col-xl-2'>
                <NavigationSidebar active='Explore' />
            </div>
            <div className='col-10 col-md-10 col-lg-7 col-xl-6'>
                <ExploreComponent />
            </div>
            <div className='col-lg-4 col-xl-4 d-none d-lg-block'>
                <WhoToFollowList />
            </div>
        </div>
    );
}

export default Tuiter;