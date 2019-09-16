import {createActionName} from "../../utils/functions";
const reducerName = "posts";

// ACTIONS TYPE
export const LOAD_POSTS = createActionName(reducerName, "LOAD_POSTS");

// CREATORS ACTIONS

export const loadPosts = payload => ({payload, type: LOAD_POSTS});

//SELECTORS

export const getPosts = store => store.posts;
