import {START_REQUEST, STOP_REQUEST, ERROR_REQUEST, RESET_REQUEST} from "../actions/requestActions";
const initialState = {pending: false, error: null, success: null};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case START_REQUEST:
            return {pending: true, error: null, success: null};
        case STOP_REQUEST:
            return {pending: false, error: null, success: true};
        case ERROR_REQUEST:
            return {pending: false, error: action.error, success: false};
        case RESET_REQUEST:
            return {pending: false, error: null, success: null};
        default:
            return state;
    }
};

export default reducer;
