import {
    SET_LOGIN,
    SET_USER,
    UPDATE_USER_POST,
    ADD_USER_COMMENT,
    REMOVE_USER_POST
} from "../actions/usersActions";

const initialState = {
    isLogin: false,
    user: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, isLogin: action.isLogin};
        case SET_USER:
            return {...state, user: action.user};
        case UPDATE_USER_POST:
            return {
                ...state,
                user: {
                    ...state.user, posts: state.user.posts.map(post => {

                        if (post.id === action.post.id) {
                            return action.post;
                        } else {
                            return post;
                        }
                    })
                }
            };
        case ADD_USER_COMMENT:
            return {
                ...state,
                user: {
                    ...state.user, posts: state.user.posts.map(post => {

                        if (post.id === action.comment.postId) {
                            return {...post, comments: [...post.comments, action.comment]}
                        } else {
                            return post;
                        }
                    })
                }
            };
        case REMOVE_USER_POST:
            return {
                ...state,
                user: {
                    ...state.user, posts: state.user.posts.filter(post => (post.id !== action.id))
                }
            };
        default:
            return state
    }
};

export default reducer;
