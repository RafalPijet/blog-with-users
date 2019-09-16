import {createStore, combineReducers} from "redux";
import posts from './reducers/postsReducer';

const reducers = combineReducers({
    posts
});

const store = createStore(reducers);

export default store;
