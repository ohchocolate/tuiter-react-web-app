import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    console.log(profile)
    return (
        <>
            <div className='row'>
                <Link to='/tuiter' className='col-1 btn py-3 text-center'>
                    <i className='fa-solid fa-arrow-left'/>
                </Link>
                <span className='col'>
                    something
                 {/*<h4 className='my-1'>{profile.firstname}{profile.lastname}</h4>*/}
                    {/*<p className='m-0 wd-font-grey wd-font-size-15px wd-font-family-arial'>*/}
                    {/*{profile.tuitsCount} Tuits*/}
                    {/*</p>*/}
                </span>
            </div>
        {/*    <div className='col-12 position-relative wd-profile-banner-div'>*/}
        {/*        <img*/}
        {/*            className='my-1 wd-profile-banner'*/}
        {/*            src={profile.bannerPicture}*/}
        {/*            alt='bannerPicture'*/}
        {/*        />*/}
        {/*        <div className='col-9 wd-profile-circle-icon-div'>*/}
        {/*            <img*/}
        {/*                className='wd-profile-circle-icon img-fluid'*/}
        {/*                src={profile.profilePicture}*/}
        {/*                alt='profilePicture'*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <div className='row'>*/}
        {/*            <div className='col-7 col-sm-8 col-md-9'/>*/}
        {/*            <div className='col-5 col-sm-4 col-md-3'>*/}
        {/*                <Link*/}
        {/*                    to='/tuiter/profile/edit'*/}
        {/*                    className='btn btn-outline-dark rounded-pill wd-font-white my-3'*/}
        {/*                >*/}
        {/*                    Edit profile*/}
        {/*                </Link>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <h4 className='my-1'>{profile.firstname}{profile.lastname}</h4>*/}
        {/*        <p className='my-1 wd-font-grey wd-font-size-15px wd-font-family-arial'>*/}
        {/*            @{profile.handle}*/}
        {/*        </p>*/}
        {/*        <p className='my-1 wd-font-white wd-font-size-15px wd-font-family-arial'>*/}
        {/*            {profile.bio}*/}
        {/*        </p>*/}
        {/*        <p className='my-1 wd-font-grey wd-font-size-15px wd-font-family-arial'>*/}
        {/*  <span className='me-2'>*/}
        {/*    <i className='fa-solid fa-location-dot'/>&nbsp;{profile.location}*/}
        {/*  </span>*/}
        {/*            <span className='me-2'>*/}
        {/*    <i className='fa-solid fa-cake-candles'/>&nbsp;*/}
        {/*                {profile.dateOfBirth}*/}
        {/*  </span>*/}
        {/*            <span className='me-2'>*/}
        {/*    <i className='fa-solid fa-calendar-days'/>&nbsp;*/}
        {/*                {profile.dateJoined}*/}
        {/*  </span>*/}
        {/*        </p>*/}
        {/*        <p className='my-1 wd-font-grey wd-font-size-15px wd-font-family-arial'>*/}
        {/*  <span className='me-2'>*/}
        {/*    <span className='me-2 wd-font-white'>{profile.followingCount}</span>*/}
        {/*    Following*/}
        {/*  </span>*/}
        {/*            <span className='me-2'>*/}
        {/*    <span className='me-2 wd-font-white'>{profile.followersCount}</span>*/}
        {/*    Followers*/}
        {/*  </span>*/}
        {/*        </p>*/}
        {/*    </div>*/}
        </>
    );
};

export default ProfileComponent;