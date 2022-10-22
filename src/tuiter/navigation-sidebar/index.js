import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="rounded list-group">
            <a href='#' className="list-group-item list-group-item-action">
                <i className="fab fa-twitter"></i> Tuiter
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to='/tuiter/explore' className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"></i> Explore
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell"></i> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope"></i> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"></i> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"></i> Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"></i> Profile
            </a>
            <div className='btn btn-primary mt-2 rounded-pill' role='button'>
                <span className='d-block d-xl-none wd-font-size-12px'>Tweet</span>
                <span className='d-none d-xl-block'>Tuiter</span>
            </div>
        </div>
    );
};
export default NavigationSidebar;