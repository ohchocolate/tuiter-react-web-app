import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);

    return (
        <>
            <div className='row'>
                <Link to='/tuiter' className='col-1 btn py-3 text-center'>
                    <i className="fa fa-arrow-left"/>
                </Link>
                <span className='col'>
                 <h4 className='my-1'>{profile.firstname}&nbsp;{profile.lastname}</h4>
                    <p className='m-0 wd-font-grey wd-font-size-15px wd-font-family-arial'>
                    {profile.tuitsCount} Tuits
                    </p>
                </span>
            </div>
            <div className='col-12 position-relative wd-profile-banner-div'>
                <img
                    className='w-100 px-0 mx-0 border-0'
                    src={profile.bannerPicture}
                    alt='bannerPicture'
                />
                <div className='rounded-circle card-img-overlay mx-0 my-5 top-50'>
                    <img
                        width={100}
                        className='float-begin rounded-circle'
                        src={profile.profilePicture}
                        alt='profilePicture'
                    />
                </div>
                <div className='row'>
                    <div className='col-7 col-sm-8 col-md-9'/>
                    <div className='col-5 col-sm-4 col-md-3'>
                        <Link
                            to='/tuiter/profile/edit'
                            className='btn btn-outline-dark rounded-pill wd-font-white my-3'
                        >
                            Edit profile
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='my-1'>{profile.firstname}&nbsp;{profile.lastname}</h4>
                <p className='my-1 wd-font-grey wd-font-size-15px wd-font-family-arial'>
                    @{profile.handle}
                </p>
                <p className='my-1 wd-font-white wd-font-size-15px wd-font-family-arial'>
                    {profile.bio}
                </p>
                <p className='my-1 wd-font-grey wd-font-size-15px wd-font-family-arial'>
          <span className='me-2'>
            <i className="bi bi-geo-alt"/>&nbsp;{profile.location}
          </span>
                    <span className='me-2'>
            <i className="bi bi-card-image"/>&nbsp;
                        {profile.dateOfBirth}
          </span>
                    <span className='me-2'>
            <i className="fas fa-calendar-alt"/>&nbsp;
                       Joined {profile.dateJoined}
          </span>
                </p>
                <p className='my-1'>
          <span className='me-2'>
            <span className='me-2 fw-bold'>{profile.followingCount}</span>
            Following
          </span>
                    <span className='me-2'>
            <span className='me-2 fw-bold'>{profile.followersCount}</span>
            Followers
          </span>
                </p>
            </div>
        </>
    );
};

export default ProfileComponent;