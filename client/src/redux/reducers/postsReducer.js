import {LOAD_POSTS, LOAD_POST, THUMB_UP, THUMB_DOWN, LOAD_POSTS_RANGE} from "../actions/postsActions";

const initialState = {
    data: [],
    singlePost: {},
    amount: 0,
    postsPerPage: 10,
    initialPage: 1
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, data: action.payload};
        case LOAD_POST:
            return {...state, singlePost: action.post};
        case LOAD_POSTS_RANGE:
            return {
                ...state,
                data: [...action.payload.data],
                amount: action.payload.amount,
                postsPerPage: action.payload.postsPerPage,
                initialPage: action.payload.initialPage
            };
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
