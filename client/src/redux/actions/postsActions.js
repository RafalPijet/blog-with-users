import {createActionName} from "../../utils/functions";

const reducerName = "posts";

// ACTIONS TYPE
export const LOAD_POST = createActionName(reducerName, "LOAD_POST");
export const LOAD_POSTS_RANGE = createActionName(reducerName, "LOAD_POSTS_RANGE");
export const THUMB_UP = createActionName(reducerName, "THUMB_UP");
export const THUMB_DOWN = createActionName(reducerName, "THUMB_DOWN");
export const SET_INITIAL_PAGE = createActionName(reducerName, "SET_INITIAL_PAGE");

// CREATORS OF ACTIONS
export const loadPostsByRange = payload => ({payload, type: LOAD_POSTS_RANGE});
export const loadPost = post => ({post, type: LOAD_POST});
export const thumbUp = id => ({id, type: THUMB_UP});
export const thumbDown = id => ({id, type: THUMB_DOWN});
export const setInitialPage = value => ({value, type: SET_INITIAL_PAGE});

// SELECTORS
export const getPosts = store => store.posts.data;
export const getAmount = store => store.posts.amount;
export const getPost = store => store.posts.singlePost;
export const getAmountOfComments = store => store.posts.singlePost.comments.length;
export const getInitialPaginationPage = store => store.posts.initialPage;
export const getPaginationPages = store => Math.ceil(store.posts.amount / store.posts.postsPerPage);

