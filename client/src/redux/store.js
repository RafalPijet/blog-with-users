import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import posts from './reducers/postsReducer';
import request from './reducers/requestReducer';
import users from './reducers/usersReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    posts,
    request,
    users
});

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
