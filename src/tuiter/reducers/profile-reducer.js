import {createSlice} from "@reduxjs/toolkit";
const profile = {
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
        "tuitsCount": 333
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            return state = action.payload;
        },
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;