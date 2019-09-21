import {
    START_REQUEST,
    STOP_REQUEST,
    ERROR_REQUEST,
    RESET_REQUEST,
    BEGIN_SET_VOTES
} from "../actions/requestActions";

const initialState = {pending: false, error: null, success: null, votes: false};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case START_REQUEST:
            return {pending: true, error: null, success: null, votes: false};
        case STOP_REQUEST:
            return {pending: false, error: null, success: true, votes: false};
        case ERROR_REQUEST:
            return {pending: false, error: action.error, success: false, votes: false};
        case RESET_REQUEST:
            return {pending: false, error: null, success: null, votes: false};
        case BEGIN_SET_VOTES:
            return {pending: false, error: null, success: null, votes: true};
        default:
            return state;
    }
};

export default reducer;
