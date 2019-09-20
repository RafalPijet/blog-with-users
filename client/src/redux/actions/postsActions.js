import {createActionName} from "../../utils/functions";

const reducerName = "posts";

// ACTIONS TYPE
export const LOAD_POSTS = createActionName(reducerName, "LOAD_POSTS");
export const LOAD_POST = createActionName(reducerName, "LOAD_POST");
export const THUMB_UP = createActionName(reducerName, "THUMB_UP");
export const THUMB_DOWN = createActionName(reducerName, "THUMB_DOWN");

// CREATORS OF ACTIONS
export const loadPosts = payload => ({payload, type: LOAD_POSTS});
export const loadPost = post => ({post, type: LOAD_POST});
export const thumbUp = id => ({id, type: THUMB_UP});
export const thumbDown = id => ({id, type: THUMB_DOWN});

// SELECTORS
export const getPosts = store => store.posts.data;
export const getAmount = store => store.posts.data.length;
export const getPost = store => store.posts.singlePost;
