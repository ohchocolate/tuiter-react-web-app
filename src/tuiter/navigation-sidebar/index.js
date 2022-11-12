import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="rounded list-group">
            <a href="/" className="list-group-item list-group-item-action">
                <i className="fab fa-twitter"/>
                <span className='d-none d-xl-block'>Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"/>
                <span className='d-none d-xl-block'>Home</span>
            </Link>
            <Link to='/tuiter/explore' className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"/>
                <span className='d-none d-xl-block'>Explore</span>
            </Link>
            <a href="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell"/>
                <span className='d-none d-xl-block'>Notifications</span>
            </a>
            <a href="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope"/>
                <span className='d-none d-xl-block'>Messages</span>
            </a>
            <a href="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"/>
                <span className='d-none d-xl-block'>Bookmarks</span>
            </a>
            <a href="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"/>
                <span className='d-none d-xl-block'>Lists</span>
            </a>
            <a href='/tuiter/profile' className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"/>
                <span className='d-none d-xl-block'>Profile</span>
            </a>
            <div className='btn btn-primary mt-2 rounded-pill' role='button'>
                <span className='d-block d-xl-none wd-font-size-12px'>Tweet</span>
                <span className='d-none d-xl-block'>Tuiter</span>
            </div>
        </div>
    );
};
export default NavigationSidebar;