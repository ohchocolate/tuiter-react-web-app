import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router";
import {editProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const oldProfile = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(oldProfile);
    const [firstname, setFirstname] = useState(profile.firstname);
    const [lastname, setLastname] = useState(profile.lastname);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch(editProfile({
            ...profile,
            firstname: firstname,
            lastname: lastname,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }));
    }

    const changeRoute = () => {
        navigate('/tuiter/profile');
    }

    function changeFirstname(e) {
        const newFirstname = e.target.value;
        setFirstname(newFirstname);
        const newProfile = {
            ...profile,
            firstname: newFirstname
        }
        setProfile(newProfile)
    }

    function changeLastname(e) {
        const newLastname = e.target.value;
        setLastname(newLastname);
        const newProfile = {
            ...profile,
            lastname: newLastname
        }
        setProfile(newProfile)
    }

    function changeBio(e) {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    function changeLocation(e) {
        const newLocation = e.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    function changeWebsite(e) {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile)
    }

    function changeDOB(e) {
        const newDOB = e.target.value;
        setDOB(newDOB);
        const newProfile = {
            ...profile,
            dateOfBirth: newDOB
        }
        setProfile(newProfile)
    }

    return (
        <>
            <div className='row'>
                <Link to='/tuiter/profile' className='col-1 btn py-3 text-center'>
                    <i className="bi bi-x-lg"/>
                </Link>
                <span className='col'>
          <h4 className='py-2'>Edit profile</h4>
        </span>
                <div className='col-4 col-sm-3 col-md-2 py-2'>
                    <button className='btn btn-light rounded-pill'
                    onClick={(event) => {saveProfile(event); changeRoute()}}>
                        Save
                    </button>
                </div>
            </div>
            <div className='col-12 position-relative'>
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
                    <button className='rounded-circle m-50 border-0 mx-1'>
                    <i className='btn fa fa-camera'/>
                    </button>
                    <button className='rounded-circle m-50 border-0 mx-1 float-end'>
                        <i className='btn fa fa-camera'/>
                    </button>
                </div>

            </div>
            <form>
                <div className='form-group my-2'>
                    <label htmlFor='user-firstname' className='form-label'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='user firstname'
                        placeholder='First Name'
                        value={profile.firstname}
                        onChange={(event => changeFirstname(event))}
                    />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='user-lastname' className='form-label'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='user lastname'
                        placeholder='Last Name'
                        value={profile.lastname}
                        onChange={(event => changeLastname(event))}
                    />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='bio' className='form-label'>
                        Bio
                    </label>
                    <textarea
                        className='form-control'
                        id='bio'
                        placeholder='Bio'
                        value={profile.bio}
                        onChange={event => changeBio(event)}
                    />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='location' className='form-label'>
                        Location
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='location'
                        placeholder='Location'
                        value={profile.location}
                        onChange={event => changeLocation(event)}
                    />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='website' className='form-label'>
                        Website
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='website'
                        placeholder='Website'
                        value={profile.website}
                        onChange={event => changeWebsite(event)}
                    />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='dateOfBirth' className='form-label'>
                        Date of birth
                    </label>
                    <input
                        type='date'
                        className='form-control'
                        id='dateOfBirth'
                        placeholder='Date of birth'
                        value={profile.dateOfBirth}
                        onChange={event => changeDOB(event)}
                    />
                </div>
            </form>
        </>
    );
};
export default EditProfileComponent;