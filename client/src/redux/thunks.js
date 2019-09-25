import axios from "axios";
import {API_URL} from "../config";
import {loadPosts, loadPost, thumbUp, thumbDown, loadPostsByRange} from "./actions/postsActions";
import {startRequest, stopRequest, errorRequest, beginSetVotes} from "./actions/requestActions";

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

export const loadPostRequest = id => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            let res = await axios.get(`${API_URL}/posts/${id}`);

            if (res.data !== null) {
                dispatch(loadPost(res.data));
                dispatch(stopRequest());
            } else {
                dispatch(errorRequest(`Post with id:${id} don't exist`))
            }

        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const addPostRequest = post => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await axios.post(`${API_URL}/posts`, post);
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const updatePostRequest = post => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await axios.put(`${API_URL}/posts`, post);
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const setThumbRequest = (id, isUp) => {
    return async dispatch => {

        dispatch(beginSetVotes());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            let res = await axios.put(`${API_URL}/posts/${id}/${isUp}`);

            if (res.status === 200) {
                isUp ? dispatch(thumbUp(id)) : dispatch(thumbDown(id));
            }
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(`Can't change a votes level: ${err.message}`))
        }
    }
};

export const randomPostRequest = () => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            let post = await axios.get(`${API_URL}/posts/random`);
            dispatch(loadPost(post.data));
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const loadPostsByRangeRequest = (page, postsPerPage) => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            let start = Math.ceil((page - 1) * postsPerPage);
            let limit = postsPerPage;
            await new Promise(resolve => setTimeout(resolve, 2000));
            let res = await axios.get(`${API_URL}/posts/range/${start}/${limit}`);
            let payload = {
                data: res.data.selectedPosts,
                amount: res.data.amount,
                postsPerPage: postsPerPage,
                initialPage: page
            };
            dispatch(loadPostsByRange(payload));
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const loadUserByLogin = login => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            let res = await axios.get(`${API_URL}/users/login`, {params: {email: login.email}});

            if (res.data !== null) {
                
                if (res.data.password === login.password) {
                    
                    dispatch(stopRequest());
                } else {
                    dispatch(errorRequest("Wrong password!!!"));
                }
                
            } else {
                dispatch(errorRequest("User don't exist!!!"));
            }
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
}
