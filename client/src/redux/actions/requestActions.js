import {createActionName} from "../../utils/functions";

const reducerName = 'request';

// ACTIONS
export const START_REQUEST = createActionName(reducerName, "START_REQUEST");
export const STOP_REQUEST = createActionName(reducerName, "STOP_REQUEST");
export const ERROR_REQUEST = createActionName(reducerName, "ERROR_REQUEST");
export const RESET_REQUEST = createActionName(reducerName, "RESET_REQUEST");
export const BEGIN_SET_VOTES = createActionName(reducerName, "BEGIN_SET_VOTES");

// CREATORS OF ACTIONS
export const startRequest = () => ({type: START_REQUEST});
export const stopRequest = () => ({type: STOP_REQUEST});
export const errorRequest = error => ({error, type: ERROR_REQUEST});
export const resetRequest = () => ({type: RESET_REQUEST});
export const beginSetVotes = () => ({type: BEGIN_SET_VOTES});

// SELECTORS
export const getRequest = store => store.request;
