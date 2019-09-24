import {SET_LOGIN} from "../actions/usersActions";

const initialState = {
    isLogin: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, isLogin: action.isLogin};
        default:
            return state
    }
};

export default reducer;
