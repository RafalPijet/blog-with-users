import {createActionName} from "../../utils/functions";

const reducerName = "users";

// ACTIONS TYPE
export const SET_LOGIN = createActionName(reducerName, "SET_LOGIN");
export const SET_USER = createActionName(reducerName, "SET_USER");
export const UPDATE_USER_POST = createActionName(reducerName, "UPDATE_USER_POST");
export const ADD_USER_COMMENT = createActionName(reducerName, "ADD_USER_COMMENT");
export const REMOVE_USER_POST = createActionName(reducerName, "REMOVE_USER_POST");

// CREATORS OF ACTIONS
export const setLogin = isLogin => ({isLogin, type: SET_LOGIN});
export const setUser = user => ({user, type: SET_USER});
export const updateUserPost = post => ({post, type: UPDATE_USER_POST});
export const addUserComment = comment => ({comment, type: ADD_USER_COMMENT});
export const removeUserPost = id => ({id, type: REMOVE_USER_POST});

// SELECTORS
export const getLogin = store => store.users.isLogin;
export const getUser = store => store.users.user;
export const getAmountUserPosts = store => store.users.user.posts.length;
