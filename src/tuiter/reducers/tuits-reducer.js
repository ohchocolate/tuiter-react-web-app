import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
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
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            }
    },
    // not going to use the old reducers in a8
    reducers: {
        addTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            // debug helper: alert(action.payload.tuit)
            const index = state.findIndex(tuit => tuit._id === action.payload)
            state.splice(index, 1);
        },
        likeTuit(state, action) {
            //debug helper: alert(action.payload)
            const index = state.findIndex(tuit => tuit._id === action.payload._id);
            state[index].liked = true;
            state[index].likes += 1;
        },
        unlikeTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload._id);
            state[index].liked = false;
            state[index].likes -= 1;
        },
        updateTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload)
            state[tuitIndex].tuit = action.payload.tuit
        },
        replyTuit() {},
        retuitTuit() {}
    }
});

export const {
    addTuit,
    deleteTuit,
    likeTuit,
    unlikeTuit,
    updateTuit
} = tuitsSlice.actions;
export default tuitsSlice.reducer;
