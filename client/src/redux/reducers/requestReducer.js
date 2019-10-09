import {
    START_REQUEST,
    STOP_REQUEST,
    ERROR_REQUEST,
    RESET_REQUEST,
    BEGIN_SET_VOTES,
    USER_POSTS_MODE,
    REMOVE_REQUEST
} from "../actions/requestActions";

const initialState = {pending: false, error: null, success: null, votes: false, userPosts: false, remove: false};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case START_REQUEST:
            return {...state, pending: true, error: null, success: null, votes: false};
        case STOP_REQUEST:
            return {...state, pending: false, error: null, success: true, votes: false};
        case ERROR_REQUEST:
            return {...state, pending: false, error: action.error, success: false, votes: false};
        case RESET_REQUEST:
            return {...state, pending: false, error: null, success: null, votes: false};
        case BEGIN_SET_VOTES:
            return {...state, pending: false, error: null, success: null, votes: true};
        case USER_POSTS_MODE:
            return {...state, userPosts: action.isSet};
        case REMOVE_REQUEST:
            return {...state, remove: action.isSet};
        default:
            return state;
    }
};

export default reducer;
