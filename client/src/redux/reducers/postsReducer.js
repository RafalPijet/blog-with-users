import {LOAD_POSTS, LOAD_POST, THUMB_UP, THUMB_DOWN} from "../actions/postsActions";

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
        case THUMB_UP:
            return {
                ...state,
                data: state.data.map(post => {

                    if (post.id === action.id) {
                        return {...post, votes: post.votes + 1};
                    }
                    return post;
                })
            };
        case THUMB_DOWN:
            return {
                ...state,
                data: state.data.map(post => {

                    if (post.id === action.id) {
                        return {...post, votes: post.votes - 1};
                    }
                    return post;
                })
            };
        default:
            return state;
    }
};

export default reducer;
