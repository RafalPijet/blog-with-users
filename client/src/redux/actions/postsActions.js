import axios from 'axios';
import {createActionName} from "../../utils/functions";
import {API_URL} from "../../config";

const reducerName = "posts";

// ACTIONS TYPE
export const LOAD_POSTS = createActionName(reducerName, "LOAD_POSTS");

// CREATORS ACTIONS
export const loadPosts = payload => ({payload, type: LOAD_POSTS});

// SELECTORS
export const getPosts = store => store.posts;
export const getAmount = store => store.posts.length;

// THUNKS
export const loadPostsRequest = () => {
    return async dispatch => {

        try {
            console.log("Start working loadPostsRequest thunk...");
            let res = await axios.get(`${API_URL}/posts`);
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch(loadPosts(res.data));
            console.log("End of request... Success")
        } catch (err) {
            console.log(`Something was wrong: ${err.message}`);
        }
    }
};
