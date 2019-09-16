import {LOAD_POSTS} from "../actions/postsActions";
const initialState = [];

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_POSTS:
            return [...action.payload];
        default:
            return state;
    }
};

export default reducer;
