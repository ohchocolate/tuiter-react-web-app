import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    // noinspection CheckTagEmptyBody
    return (
        <div className="rounded list-group">
            <Link to="/tuiter" className="list-group-item list-group-item-action">
                Tuiter
            </Link>
            <Link to="/tuiter/ex" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>
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