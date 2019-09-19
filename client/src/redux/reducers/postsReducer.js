import {LOAD_POSTS, LOAD_POST} from "../actions/postsActions";
const initialState = {
    data: [],
    singlePost: {}
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, data: action.payload};
        case LOAD_POST:
            return {...state, singlePost: action.post};
        default:
            return state;
    }
};

export default reducer;
