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
                Tuiter
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to='/tuiter/explore' className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <div className='btn btn-primary mt-2 rounded-pill' role='button'>
                <span className='d-block d-xl-none wd-font-size-12px'>Tweet</span>
                <span className='d-none d-xl-block'>Tuiter</span>
            </div>
        </div>
    );
};
export default NavigationSidebar;