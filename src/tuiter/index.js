import React from "react";
import NavigationSidebar
    from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}}
);

function Tuiter() {
    return (
        <Provider store={store}>
            <div className='row mt-2'>
                <div className='col-2 col-md-2 col-lg-1 col-xl-2'>
                    <NavigationSidebar active="home"/>
                </div>
                <div className='col-10 col-md-10 col-lg-7 col-xl-6'>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                    </Routes>
                </div>
                <div className='col-lg-4 col-xl-4 d-none d-lg-block'>
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;