import {createStore, applyMiddleWare, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import characterReducer from './characters/characterReducer';
const rootReducer = combineReducers({
    characters: characterReducer
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleWare(logger,thunk)));
export default store;