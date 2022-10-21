import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar
    from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return (
        <div className='row mt-2'>
            <div className='col-2 col-md-2 col-lg-1 col-xl-2'>
                <NavigationSidebar active='explore'/>
            </div>
            <div className='col-10 col-md-10 col-lg-7 col-xl-6'>
                {/*style={{"position": "relative"}}*/}
                <Routes>
                    <Route path="" element={<ExploreComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className='col-lg-4 col-xl-4 d-none d-lg-block'>
                <Routes>
                    <Route path="" element={<WhoToFollowList/>}/>
                    <Route path="home" element={<PostSummaryList/>}/>
                    <Route path="explore" element={<WhoToFollowList />}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter;