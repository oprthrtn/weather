import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import weatherReducer from '../reducers/weather-reducer'

let reducers = combineReducers({
    weatherPage : weatherReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;