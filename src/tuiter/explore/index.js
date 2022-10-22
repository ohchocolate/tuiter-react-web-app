import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="/#" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Sports</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt="starship"  src="https://s.hdnux.com/photos/01/23/33/15/21869409/4/rawImage.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;