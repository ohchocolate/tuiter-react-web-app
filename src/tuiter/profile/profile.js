import {createSlice} from "@reduxjs/toolkit";
const initialProfile = {
    profile: {
        "firstname": "Eva",
        "lastname": "Z",
        "handle": "ohchocolate",
        "profilePicture": "/images/husky.jpg",
        "bannerPicture": "/images/react.png",
        "bio": "law, policy, and computer science",
        "website": "https://github.com/ohchocolate/tuiter-react-web-app",
        "location": "Boston, MA",
        "dateOfBirth": "9/9/1999",
        "dateJoined": "8/2021",
        "followingCount": 666,
        "followersCount": 888,
        "tuitsCount": 333}
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        editProfile(state, action) {
            switch (action.type) {
                case 'EDIT_PROFILE_SUCCESS':
                    return action.payload;
                default:
                    return state;
            }
        }
    }
});

export default profileSlice.reducer