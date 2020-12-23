import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import characterReducer from './characters/characterReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    characters: characterReducer
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));
export default store;