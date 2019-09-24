import {createActionName} from "../../utils/functions";

const reducerName = "users";

// ACTIONS TYPE
export const SET_LOGIN = createActionName(reducerName, "SET_LOGIN");

// CREATORS OF ACTIONS
export const setLogin = isLogin => ({isLogin, type: SET_LOGIN});

// SELECTORS
export const getLogin = store => store.users.isLogin;
