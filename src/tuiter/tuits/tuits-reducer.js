import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit, //copy the tuit from the templateTuit
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = this.state.findIndex(tuit => tuit._id === action.payload._id);
            state.splice(index, 1);
        },
        likeTuit(state, action) {
            const index = this.state.findIndex(tuit => tuit._id === action.payload._id);
            state[index].liked = true;
            state[index].likes += 1;
        },
        unlikeTuit(state, action) {
            const index = this.state.findIndex(tuit => tuit._id === action.payload._id);
            state[index].liked = false;
            state[index].likes -= 1;
        }
    }
});

export const {
    createTuit,
    deleteTuit,
    likeTuit,
    unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;