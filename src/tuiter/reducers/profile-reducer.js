import {createSlice} from "@reduxjs/toolkit";

const profile = {
        firstname: "Eva",
        lastname: "Z",
        handle: "ohchocolate",
        profilePicture: "https://pbs.twimg.com/profile_images/1029548905346818048/5hfjk5sB_400x400.jpg",
        bannerPicture: "https://nuhuskies.com/images/2021/3/23/Generic_Graphic2.jpg",
        bio: "law, policy, and computer science",
        website: "https://github.com/ohchocolate/tuiter-react-web-app",
        location: "Boston, MA",
        dateOfBirth: "9/9/1999",
        dateJoined: "8/2021",
        followingCount: "666",
        followersCount: "888",
        tuitsCount: "333"
};

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            console.log("check point");
            return state = action.payload;
        },
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;