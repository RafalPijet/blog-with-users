import {createStore, combineReducers, applyMiddleware} from "redux";
import posts from './reducers/postsReducer';
import request from './reducers/requestReducer';
import users from './reducers/usersReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    posts,
    request,
    users
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
