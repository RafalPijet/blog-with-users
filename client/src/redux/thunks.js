import axios from "axios";
import {API_URL} from "../config";
import {loadPosts} from "./actions/postsActions";
import {startRequest, stopRequest, errorRequest} from "./actions/requestActions";

export const loadPostsRequest = () => {
    return async dispatch => {

        try {
            dispatch(startRequest());
            await new Promise(resolve => setTimeout(resolve, 2000));
            let res = await axios.get(`${API_URL}/posts`);
            dispatch(loadPosts(res.data));
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};
